export function TodoCard(props) {
    const { todo,handelDeleteTodo,todoIndex,handelCompleteTodo} = props

    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button onClick={()=>
                    handelCompleteTodo(todoIndex)
                }disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button onClick={()=>
                    handelDeleteTodo(todoIndex)}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}