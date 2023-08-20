import React, {useState} from "react";

export default function AddTodo({appendItems}){
    const [value, setValue] = React.useState("")

    function handleClick(e) {
      e.preventDefault();
        if (value === "") {
          return alert("Enter a Task");
        } 
        appendItems(value)
        setValue("")
        }
      
   


    return(
        <form onSubmit={handleClick} className="add-items">
            <input className="input-items" 
            type="text"
            placeholder="  Add your task..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <button className="add-button"  onClick={handleClick}>+</button>
        </form>

    )

}