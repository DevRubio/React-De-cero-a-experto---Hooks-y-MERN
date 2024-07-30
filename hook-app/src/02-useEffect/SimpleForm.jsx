import { useState, useEffect } from "react"
import { Message } from './Message'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'Rubio',
        email: 'notiene@google.com',
    })

    const { username, email } = formState

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

/*     useEffect(() => {
        console.log('hey')
    }, []) */

 /*    useEffect(() => {
        console.log('formState Cambio')
    }, [formState])
 */
    return (
        <>
            <h1>Formulario simple </h1>
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

            {
                (username === 'Rubio2') && <Message />
            }

        </>
    )
}