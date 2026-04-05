
import React from "react"

import '../state.css';

export const TodoList = () => {
    
    const [todoList, setTodoList] = React.useState([]);
    
    const handleTodo = () => {
        const item = document.getElementById('todoInput');
        if(item.value != "") {
            setTodoList([...todoList, item.value]);
            item.value = "";
            item.focus();
        }
    }

    console.log("Component Rendered...");

    return (
        <section className="flex mt-1">
            <div className="display_flex">
                <input type="text" placeholder="Enter your todo..." id="todoInput"/>
                <button onClick={handleTodo} className="btn">Add Todo</button>
            </div>

            <div className="display_flex">
                <ul>
                    {
                        todoList.map(item => (
                            <li key={Math.random() * 100}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}