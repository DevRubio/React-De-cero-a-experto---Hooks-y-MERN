import { useState, useEffect } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {
    const { formState, handleInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })
    
    const { username, email, password } = formState

    return (
        <>
            <h1>Formulario con CustomHook </h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={handleInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="UserName@mail.com"
                name="email"
                value={email}
                onChange={handleInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={handleInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

        </>
    )
}