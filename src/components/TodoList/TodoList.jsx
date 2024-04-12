import Todo from "../Todo/Todo";

function TodoList({ todos, deleteTodo, editTodo }) {
    return (
        todos && 
        todos.map((todo) => 
                    <Todo key={todo.id} 
                        text={todo.text} 
                        isFinished={todo.isFinished}
                        deleteTodo={() => deleteTodo(todo.id)}
                        editTodo={editTodo}
                        id={todo.id}
                    />)
    );
}

export default TodoList;