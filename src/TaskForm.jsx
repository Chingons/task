import {useState, useEffect} from 'react'

function TaskForm({createTask}){
    const [title, setTitle] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        createTask(title)
    }

    return (    
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Escribe tu Tarea" 
            onChange={(e) => setTitle(e.target.value)}
            />
            <button>
                Guardar
            </button>
        </form>
    

)
}


export default TaskForm