import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"


function TaskCard({task}){

    const {deleteTask} = useContext(TaskContext)

    return(
        <div id="cards">
                        <h1 id="titulo-card">{task.title}</h1>
                        <p id="descripcion">{task.description} </p>
                        <button  id="boton-eliminar" onClick={() => deleteTask(task.id)}>Eliminar</button>
                    
                    </div>

    )
}

export default TaskCard