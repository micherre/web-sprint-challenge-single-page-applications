import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from 'react-router-dom'
import Form from './Components/Form'
import Navigation from "./Components/Navigation"
import Complete from "./Components/Complete"
import Home from "./Components/Home"
import "./App.css"
import Axios from "axios";
import * as yup from 'yup'

const initialForm = {
  name: "",
  pSize: "",
  pepperoni: false,
  liver: false,
  arsenic: false,
  pineapple: false,
  litter: false,
  extracheese: false,
  additional: ""
}

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Must be at least 2 characters long"),
  pepperoni: yup
    .string(),
  liver: yup
    .string(),
  arsenic: yup
    .string(),
  pineapple: yup
    .string(),
  litter: yup
    .string(),
  extracheese: yup
    .string()
})

function App () {
  const [form, setForm] = useState(initialForm)
  const [pizza, setPizza] = useState([])
  // const [disable, setDisable] = useState("true")
  const [errors, setErrors] = useState(initialForm)
  const history = useHistory()

  // useEffect(() => {
  //   formSchema.isValid(form)
  //     .then(valid => setDisable(!valid))
  // }, [form])

  const validateForm = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => setErrors({...errors, [e.target.name]: ''}))
      .catch(err => setErrors({...errors, [e.target.name]: err.errors[0]}))
  }
  const handleChange = (e) => {
    e.persist()
    e.target.type === "checkbox"
    ? setForm({ ...form, [e.target.name]: e.target.checked})
    : setForm({ ...form, [e.target.name]: e.target.value })
    validateForm(e)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    Axios
      .post("https://reqres.in/api/users", form)
      .then((res) => {
        setPizza([...pizza, res.data])
        setForm(initialForm)
        history.push("/complete")
      })
      .catch((err) => console.log(err))
  }

  return(
    <div className="App">
      <Navigation />
      {errors.name.length > 0 && <p> {errors.name}</p>}
      <Switch>
        <Route path="/form">
          <Form form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </Route>
        <Route path="/complete">
          <Complete pizza={pizza}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    )
};
export default App;
