import React, {useState} from 'react'
import TodoForm from './TodoForm'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Checkbox from '@material-ui/core/Checkbox';



function Todo({todos, completeTodo, removeTodo, updateTodo}) {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
    setChecked(event.target.checked);}


    const[edit, setEdit] = useState({
        id: null,
        value:''
    })

    const submiteUpdate = value =>{
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id)
    {
        return <TodoForm edit={edit} onSubmit={submiteUpdate}/>
    }
    

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
        key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text} :  {todo.date}/{todo.month}/{todo.year} - {todo.hour}:{todo.minute}:{todo.second} 
            </div>
            <div className='icons'>
             <Checkbox  color="default" onChange={handleChange}
                            inputProps={{ 'aria-label': 'primary checkbox' }} className ='check-icon'style ={{
                                color: "#ffffff",
                              }} />
             <DeleteIcon onClick={() => removeTodo(todo.id)} className='delete-icon'/>
             <EditIcon  onClick={() => setEdit({id: todo.id, value: todo.text})} className='edit-icon'/>
            </div>

        </div>
    ))
}

export default Todo
