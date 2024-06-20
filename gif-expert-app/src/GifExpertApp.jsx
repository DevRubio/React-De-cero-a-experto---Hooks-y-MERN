import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

  const onAddCategory = () =>{

    setCategories([...categories, 'One Piece'])
    
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      {/*Listado de Gifs */}
      <AddCategory setCategories={setCategories}/>
      

      <ol>
        {categories.map((category)=>(
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
