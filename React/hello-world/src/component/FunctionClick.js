import React from 'react'

function FunctionClick() {
    function eventHandler(){
        console.log('clicked')
    }
  return (
    <div>
        <button onClick={eventHandler}>Click</button>
    </div>
  )
}
export default FunctionClick