import React from "react";


class ToDoList extends React.Component {
    constructor(props) {
        super(props)

        this.handleInput = this.handleInput.bind(this)
        this.state = {
            content: ""
        }
    }

    handleInput(event) {
        let value = event.target.value
        this.setState(() => {
            return { content: value }
        })
        console.log("hahah ", this.state, event.target.value)
    }


    render() {
        return (
            <form  >
                <h2> Add button </h2>
                <input type="text" onChange={this.handleInput}></input>
            </form>
        )
    }
}

export default ToDoList