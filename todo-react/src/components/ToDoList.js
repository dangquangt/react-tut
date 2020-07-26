import React from "react";


class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.itemName1 = props.itemName
        // this.playground.bind(this)

    }
   
    render() {
        return (
            <h2> this props {this.itemName} </h2>

        )
    }
}

export default ToDoList
