import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Welcome"
        }

        {/* binding "this" in constructor (recommanded approch_3 by react documentation) */ }
        // this.clickHandler = this.clickHandler.bind(this)
    }


    // clickHandler() {
    //     this.setState({
    //         message: "Goodbye!"
    //     })
    //     console.log(this)
    // }

    // binding "this" in constructor (recommanded approch_4 by react documentation)
    clickHandler = () => {
        this.setState({
            message: "Goodbye!"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* binding "this" in rendor(approch_1) */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* binding "this" in rendor using arrow function (approch_2) */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}

                {/* binding "this" in constructor (recommanded approch_3 and approch_4 by react documentation) */}
                <button onClick={this.clickHandler}>Click</button>

            </div>
        )
    }
}

export default EventBinding