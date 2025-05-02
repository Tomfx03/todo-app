export function Headerss(props) {
    const {todos} = props
    const todosLength= todos.filter(val => !val.complete).length

    const taskOrTasks = todosLength == 1 ? 'task' : todosLength == 0 ?'task to complete':'tasks'
    return(
        <header>
            <h1 className="text-gradient">You have {todosLength} {taskOrTasks}.</h1>
        </header>
    )
} 