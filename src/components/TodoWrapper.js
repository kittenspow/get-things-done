import React, {useState} from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import {v4 as uuidv4} from 'uuid';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    // to add the new todo into todo array
    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
        console.log(todos)
    }
    // ...todos -> copy all of element from todo array
    // basically we set the new todo array with the existing todos and the new todo

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed} : todo));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
        // we set the array with todos array value, without
        // the id that we want to delete.
    }

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ?
            {...todo, isEditing: !todo.isEditing} : todo));
    };

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ?
            {...todo, task, isEditing: !todo.isEditing} : todo));
    };

    return (
        <div className="">
            <h1 className="text-violet-900 text-center mb-4 text-3xl font-bold font-sans">get things done!</h1>

            {/* form to do */}
            <TodoForm addTodo={addTodo}/> 

            <div className="mt-5"> 
                {todos.map((todo, index) => (
                    todo.isEditing ? ( // if we're editing it then it's show edit form
                        <EditTodoForm editTodo={editTask} task={todo}/>
                    ) : (
                        <Todo task={todo} key={index} // if not then show the list
                        toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
                    )
                ))}  
            </div>   
        </div>
    )
}