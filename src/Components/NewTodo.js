import React, {useState} from 'react'

export default function NewTodo({onAddTodo}) {
    const [description, setDescription] = useState("")

    function handleSubmit(e) {
        e.preventDefault()



    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Todos</h2>
            <label htmlFor="description">New List Item</label>
            <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            <button type="submit">Add Todo</button>
            </form>
    )













    return (
        <div>
            
        </div>
    )
}
