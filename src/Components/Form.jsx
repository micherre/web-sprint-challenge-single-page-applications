import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import App from '../App'
import Home from './Home'


export default function Form(props){
  const { 
    name, 
    pSize, 
    pepperoni, 
    liver, 
    arsenic, 
    pineapple, 
    litter, 
    extracheese,
    additional,
    handleChange,
    handleSubmit,
    disable } = props

  // const history = useHistory()
  return(
    <form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input id="name" name="name" value={name} onChange={handleChange}/>
      </label>
      <label>
        Pizza Size:
        <select value={pSize} >
          <option value="personal" onChange={handleChange}>Personal Size</option>
          <option value="regular" onChange={handleChange}>Regular Size</option>
          <option value="large" onChange={handleChange}>Large Size</option>
          <option value="family" onChange={handleChange}>Family Size</option>
        </select>
      </label>
      <label>
        Person Pepperoni
        <input 
          name="pepperoni" 
          type="checkbox" 
          checked={pepperoni}
          onChange={handleChange}/>
      </label>
      <label>
        Polar Bear Liver
        <input id="liver" name="liver" type="checkbox" checked={liver} onChange={handleChange}/>
      </label>
      <label>
        Arsenic
        <input id="arsenic" name="arsenic" type="checkbox" checked={arsenic} onChange={handleChange}/>
      </label>
      <label>
        Pineapple
        <input name="pineapple" type="checkbox" checked={pineapple} onChange={handleChange}/>
      </label>
      <label>
        Cat Litter
        <input name="litter" type="checkbox" checked={litter} onChange={handleChange}/>
      </label>
      <label>
        Extra Cheese
        <input name="extracheese" type="checkbox" checked={extracheese} onChange={handleChange}/>
      </label>
      <label>
        Special Instructions:
        <input name="additional" value={additional} onChange={handleChange}/>
      </label>
      <button id="orderbtn" disable={disable} type="submit">Order Pizza</button>
    </form>
  )
}