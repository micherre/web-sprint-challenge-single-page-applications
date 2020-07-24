import React from 'react'


export default function Complete(props){
  const { pizza } = props
console.log(props)
  return(
    <div>
			<h3> Ordered </h3>
			{pizza.map((myPizza) => {
				return(
					<div key={myPizza.id}>
						<h4>{myPizza.name}</h4>
						<p>Pizza Size: {myPizza.pSize}</p>
						{myPizza.pepperoni && <p>Person Pepperoni</p>}
						{myPizza.liver && <p> Polar Bear Liver</p>}
						{myPizza.arsenic && <p> Arsenic</p>}
						{myPizza.pineapple && <p> Pineapple</p>}
						{myPizza.litte && <p> Litter </p>}
						{myPizza.extracheese && <p> Extra Cheese </p>}
						<p>Additional Instructions: {myPizza.additional}</p>
					</div>
				)
			})}
    </div>
  )
    
}