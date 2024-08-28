import { useEffect, useState } from "react"

const localCache = {}

export const useFetch = (url) =>{

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    })

    useEffect(()=>{
        getFetch()

    },[url])

    const setLoadingSatate = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        })
    }

    const getFetch = async() =>{

        if (localCache[url]){
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            })
            return
        }

        setLoadingSatate()

        const response = await fetch(url)

        //sleep
        await new Promise(resolve => setTimeout(resolve, 2000))

        if (!response.ok){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText,
                },
            })
            return
        }
        const data = await response.json()
        setState({
            data,
            isLoading: false,
            hasError: false,
            error: null,
        })

        //manejo de cache
        localCache[url] = data

       
    }

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }

}