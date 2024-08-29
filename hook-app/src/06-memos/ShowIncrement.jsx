
export const ShowIncrement = ({increment}) => {
    console.log("ME volvi a generar 😑")
  return (
    <button
        className="btn btn-primary"
        onClick={()=>increment(5)}
    >Incrementar</button>
  )
}
