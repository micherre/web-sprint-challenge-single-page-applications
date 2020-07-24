import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import App from '../App'
import Home from './Home'


export default function Form(props){
  const { name, pSize, pepperoni, liver, arsenic, pineapple, litter, extracheese } = props
  return(
    <form>
      <label>
        Your Name:
        <input name="name" value={name} />
      </label>
      <label>
        Pizza Size:
        <select value={pSize}>
          <option value="personal">Personal Size</option>
          <option value="regular">Regular Size</option>
          <option value="large">Large Size</option>
          <option value="family">Family Size</option>
        </select>
      </label>
      <label>
        Person Pepperoni
        <input type="checkbox" checked={pepperoni} />
      </label>
      <label>
        Polar Bear Liver
        <input type="checkbox" checked={liver} />
      </label>
      <label>
        Arsenic
        <input type="checkbox" checked={arsenic} />
      </label>
      <label>
        Pineapple
        <input type="checkbox" checked={pineapple} />
      </label>
      <label>
        Cat Litter
        <input type="checkbox" checked={litter} />
      </label>
      <label>
        Extra Cheese
        <input type="checkbox" checked={extracheese} />
      </label>
      <button>Order Pizza</button>
    </form>
  )
}