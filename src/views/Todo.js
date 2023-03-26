const Todo = (props) => {
    const { todos, title, handleDeleteTodo } = props;
    const OnClickDelete = (id) => {
        handleDeleteTodo(id);
    }
    return (
        <ul className='list-todos'>
            <li>{title}</li>
            {
                todos.map(todo => {
                    return (
                        <li className='list-item' key={todo.id}>{todo.name}
                            &nbsp; &nbsp; <span onClick={() => OnClickDelete(todo.id)}>X</span>
                        </li>
                    )
                }
                )
            }
            <hr />
        </ul>

    )
}

export default Todo;