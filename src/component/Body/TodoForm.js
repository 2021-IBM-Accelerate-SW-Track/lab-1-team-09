import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const[input,setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    })
    
    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        var today= new Date();
        props.onSubmit({
            //unique id
            year: today.getFullYear(),
            month: (today.getMonth()+1),
            date: today.getDate(),
            hour:today.getHours(),
            minute: today.getMinutes(),
            second:today.getSeconds(),
            id: Math.floor(Math.random()*10000),
            text: input  
        });
        setInput('');
    };

    return (
        <form className="todo-from" onSubmit={handleSubmit} >
            <input type='text'
            placeholder="Enter Todo Text"
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="todo-button">+</button>
             </form>
    )
}

export default TodoForm
