import TaskCard from "./TaskCard"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskList(){

    const {tasks}= useContext(TaskContext)

    if (tasks.length===0){
        return <h1>No hay tareas aun</h1>
    }
    return (
        <div>
            {
                tasks.map(tasks => (
                    <TaskCard key={tasks.id} task={tasks} />

                ))
            }
        </div>
    
    
    )
}

export default TaskList