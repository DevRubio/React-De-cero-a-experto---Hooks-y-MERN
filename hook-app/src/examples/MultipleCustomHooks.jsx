import { useState } from "react"
import { useFetch } from "../hooks"

export const MultipleCustomHooks = () =>{ 
    
    const {data, isLoading, hasError} = useFetch('https://pokeapi.co/api/v2/pokemon/3')

    return (
        <>
            <h1>Informacion de Pokémon</h1>
            <hr/>
            {isLoading && <h3>Loading...</h3>}
            {hasError && <h3>Error</h3>}
            <h2>{data?.name}</h2>

        </>
    )

}