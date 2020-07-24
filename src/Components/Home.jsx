import React from 'react'
import { useHistory } from 'react-router-dom'
import Form from './Form'
// import Logo from '../Assets/Pizza.jpg'

export default function Home(){
const history = useHistory()
    return(
        <div>
            {/* <img src={Logo} alt= "pizza slice" /> */}
            <button onClick={() => history.push("/form")}>Create Your Pizza</button>
        </div>
    )
}