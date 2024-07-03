import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

  const onAddCategory = (newCategory) =>{
    if(categories.includes(newCategory)) return;
    //setCategories([...categories, newCategory])
    setCategories([newCategory, ...categories])
    
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      {/*Listado de Gifs */}
      <AddCategory 
        //setCategories={setCategories}
        onNewCategory={ (value) => onAddCategory(value) }
      />
      

      <ol>
        {categories.map((category)=>(
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
