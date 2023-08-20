import React , {useState} from 'react'
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';


function App() {
  const [item, setItem]= React.useState([])

  const appendItems = (todo) => {
    const newItem = [...item , {todo , complete :false}];
    setItem(newItem); //create
  };

  const deleteItems = (index) => {
    const newItemList = [...item]
    newItemList.splice(index,1)
    setItem(newItemList)  //delete
  }
  const completeItems = (index) => {
    const newItem =[...item];
    newItem[index].complete === false ?
    (newItem[index].complete = true)
    :
    (newItem[index].complete = false)
    setItem(newItem)  //write
  };

  const updateItems = (index) => {  //update
    const newUpdateItem = [...item];
    const newTodoindex = newUpdateItem[index];
    let newItem = prompt(`Update ${newTodoindex.todo}?`, newTodoindex.todo);
    let todoObj = { todo : newItem , complete : false };
    newUpdateItem.splice(index, 1, todoObj);
    if(newItem === null || newItem === ""){
      return; 
    }
    else{
      newTodoindex.todo = newItem;
    }
    setItem(newUpdateItem);
  };


    
  return (
    <div>
    <Header />

    <AddTodo appendItems={appendItems} />

    {item.map((it ,index) => (<TodoList key= {index} 
    index = {index} 
    it = {it} 
    deleteItems ={deleteItems} 
    completeItems={completeItems} 
    updateItems ={updateItems}
    /> ))}

    </div>
  );
    }

export default App;
