import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
    }

    increment() {
        // this.setState(//method
        //     {
        //         count: this.state.count + 1
        //     }, 
                //Code has to be executed after the state has been updated? Place that code in the call back function which is the second argument to the setState method.
        //     () => { console.log('Callback value', this.state.count) 
        //     }
        // )
        //When you have to update state based on the previous state value, pass in a function as an argument instead of the regular object.
        this.setState((prevState,props) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <div>count : {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter