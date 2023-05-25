import {useState, useContext} from 'react'
import { TaskContext } from '../context/TaskContext';

function TaskForm(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {createTask} = useContext(TaskContext)

    

    const handleSubmit = (e) =>{
        e.preventDefault();
        createTask(
            {
                title,
                description
            }
        )
        setTitle('')
        setDescription('')
    }

    return (    
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Escribe tu Tarea" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
            <textarea placeholder='Escribe la descripción de la tarea'
            onChange={(x) => setDescription(x.target.value)}
            value={description}
            ></textarea>
            <button>
                Guardar
            </button>
        </form>
    

)
}


export default TaskForm