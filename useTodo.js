import { useEffect, useReducer } from "react"
import { todoReducer } from "../07-useReducer/TodoReducer"

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {



    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleTodo = (todo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }
        dispatch(action)
    }


    const handleDeleteTodo = (id) => {
        console.log({ id })
        dispatch({
            type: '[TODO] Remove todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        console.log({ id })
        dispatch({
            type: '[TODO] Toggle todo',
            payload: id
        })
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodos: todos.filter(todo => !todo.done).length,
        handleTodo,
        handleDeleteTodo,
        handleToggleTodo

    }
}