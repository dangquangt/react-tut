import React from "react";


class ToDoList extends React.Component {
    constructor(props) {
        super(props)

        this.handleInput.bind(this)
        this.state = {
            content: ""
        }
    }

    handleInput(event) {

        this.setState(() => { content: "haha" })
        console.log(event, this.state)
    }


    render() {
        return (
            <div>
                <h2> To do list page </h2>
                <input onChange={() => { this.handleInput }} type="text"></input>
            </div>
        )
    }
}

export default ToDoList