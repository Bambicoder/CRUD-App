import React, { useState } from "react";

export default function TodoList({it, index ,deleteItems , completeItems ,updateItems}){
  return (
    <div className="task-list">
      <li className="task-item" style={{textDecoration: it.complete ? "line-through" : ""}}>{it.todo}
    <div className="action-button">
    <button className="delete-button" onClick={() => deleteItems({index})}>Delete</button>         
    <button className="done-button" onClick={() => completeItems(index)}>Done!</button>
    <button className="update-button" onClick={() => updateItems(index)}>Edit</button>
                 
              </div>
              </li>
              </div>
  )
}

 

    
   
    