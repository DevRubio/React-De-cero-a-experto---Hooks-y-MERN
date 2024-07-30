import { useState, useEffect } from "react"


export const Message = () => {
    const [coors, setCoors] = useState({x:0, y:0})

    useEffect(() => {
        
        const onMuseMove = ({x,y}) => {
            //const coors = {x, y}
            console.log(coors)
            setCoors({x, y})
        }

        window.addEventListener('mousemove', onMuseMove)

        return ()=>{
            window.removeEventListener('mousemove', onMuseMove)
        }
    }, [])

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coors)}
        </>
    )
}