import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Navigation(){
  const history = { useHistory }
  return(
    <div>
      <h3>Construct a New Pizza</h3>
      <button onClick={() => history.push("/")}>Home</button>
    </div>
  )
}