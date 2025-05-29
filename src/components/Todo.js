import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className="flex justify-between sm:flex-row ap-5 p-3 mt-2 bg-white rounded-xl w-full max-w-md mx-auto">
            <p onClick={() => toggleComplete(task.id)}
                className={`flex-grow text-lg text-gray-800 cursor-pointer transition duration-200 ease-in-out ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare}
                    className="text-violet-500 cursor-pointer hover:text-violet-700 transition duration-200 ease-in-out ml-3"
                    onClick={() => editTodo(task.id)}/>

                <FontAwesomeIcon icon={faTrash} 
                    className="text-red-500 cursor-pointer hover:text-red-700 transition duration-200 ease-in-out ml-3"
                    onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    )
}