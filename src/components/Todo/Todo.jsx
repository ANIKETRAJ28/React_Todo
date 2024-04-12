import { useState } from "react";

function Todo({ text, isFinished, deleteTodo, editTodo, id }) {
    const [checkTodo, setCheckTodo] = useState(isFinished);
    const [isEditing, setIsEditing] = useState(false);
    const [todoText, setTodoText] = useState(text);
    return (
        <div>
        <input type="checkbox" checked={checkTodo} onChange={() => setCheckTodo(!checkTodo)} />
        {
            isEditing? 
                <input 
                    value={todoText} 
                    onChange={(e) => setTodoText(e.target.value)} 
                    type="text"/> 
                :<span>{text}</span>
        }
        <button 
            onClick={() => {
                setIsEditing(!isEditing);
                editTodo(id, todoText);
            }}>
            {isEditing? "Save" : "Edit"}
        </button>
        <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}

export default Todo;