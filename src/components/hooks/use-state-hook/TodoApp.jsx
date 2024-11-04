import React from "react"

const styles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "1rem"
}



const TodoApp = () => {

    const [todos, setTodos] = React.useState([]);
    const [todo, setTodo] = React.useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const addTodo = () => {

        todo.length > 1 ? setTodos([...todos, todo]) : setTodo([...todos]);

        setTodo("");
    }

    return (
        <>
            <div style={styles}>
                <h1 style={{ marginBottom: '1rem' }}>My Todo App</h1>
                <div>
                    <input style={{ padding: '.5rem', marginRight: '.2rem', borderRadius: '.5rem' }} type="text" value={todo} onChange={handleChange} placeholder="Enter your todos..." />
                    <button onClick={addTodo}>Add Todo</button>
                </div>

                <div>
                    {
                        todos.map(todo => (
                            <div key={Math.random() * 100}>
                                <li style={{ marginTop: '.5rem', fontWeight: "bolder", fontSize: '1.5rem' }}>{todo}</li>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default TodoApp;

