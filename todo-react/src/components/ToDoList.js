import React from "react";


class ToDoList extends React.Component {
    constructor(props) {
        super(props)

        this.handleInput = this.handleInput.bind(this)

        this.state = {
            id: 0,
            content: ""
        }
    }


    handleInput(event) {
        let value = event.target.value
        this.setState((prevState) => {
            return {
                content: value,
                id: prevState++
            }
        })
        console.log("haha", this.state, event)

    }


    render() {
        return (
            <form  >
                <h2> Add button </h2>
                <input type="text" onBlur={(e) => { this.handleInput(e) }}></input>

            </form>
        )
    }
}

export default ToDoList