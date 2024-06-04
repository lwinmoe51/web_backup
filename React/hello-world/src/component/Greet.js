// import React from 'react'

// function Greet(props){
//     console.log(props.name)
//     return (
//         // <div>
//         //     <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//         //     {props.children}
//         // </div>

//         <div>
//             <h1>Hello lwinmoe</h1>
//         </div>
//     )
// }

// export default Greet
/////////////////////////////////////////////////////
//props Destructuring
import React from "react"
//destructuring props in argument itself
// const Greet = ({name, heroName}) => {

//destructuring props in function body
const Greet = props => {
    const {name,heroName} = props
  return (
    <div>
        <h1>
            Hello {name} a.k.a {heroName}
        </h1>
    </div>
  )
}

export default Greet
