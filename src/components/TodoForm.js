import React, {useState} from "react";

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    // function, what happened if we submit
    const handleSubmit = e => {
        e.preventDefault(); // to prevent the browser from page reload

        addTodo(value);

        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row ap-5 p-5 bg-white rounded-xl w-full max-w-md mx-auto">
            <input placeholder="What is the task today?"
                className="mr-2 text-base flex-grow w-full py-2.5 px-2.5 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                value={value}
                type="text"
                onChange={(e) => setValue(e.target.value)}/>
            <button
                className="sm:mt-0 mt-2 border border-transparent text-base whitespace-nowrap py-2.5 px-2.5 bg-violet-600 hover:bg-violet-800 active:bg-violet-900 rounded-lg text-white focus:outline-none
                transition duration-300 ease-in-out font-semibold w-full sm:w-auto"
                type="submit">Add Task</button>
        </form>
    )
}