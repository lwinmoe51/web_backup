import React from "react";

const Hello = () => {
    //jsx
    // return (
    //     <div>
    //     <h1>Hello</h1>
    // </div>
    // )

    return(
        //without jsx
        React.createElement(
            'div',
            {id: 'myid', className: 'mycalss'},
            React.createElement('h1',null,'Hello this is lwinmoe')
        )
    )
}

export default Hello

// this code show difference of jsx and without jsx