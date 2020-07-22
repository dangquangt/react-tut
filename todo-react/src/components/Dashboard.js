import React from "react";
import ToDoList from './ToDoList';

class Dashboard extends React.Component{
    render(){
        return (
            <div> 
                <h1> This is the dashboard </h1>
                <div> 
                <ToDoList itemName='name1'/> 
                </div>
            </div>
            
            
        )
    }
}

export default Dashboard