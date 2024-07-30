import { useState } from "react"

export const useForm = (initialForm = {}) =>{
    const [formState, setFormState] = useState(initialForm)

   
    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return {
        formState,
        handleInputChange,
    }

}