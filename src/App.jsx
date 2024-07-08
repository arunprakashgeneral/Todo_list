import Content from './Content';
import Header from './Header';
import './App.css'
import React, { useState } from 'react'
import Additem from './Additem';
import Searchitem from './Searchitem';

function App() {
    const [items,setItems]= useState(JSON.parse(localStorage.getItem('todo_list'))||[])
    const[newItem,setNewItem]= useState('')
    const[search,setSearch]= useState('')
    
    const addNewItem=(item)=>{
         const id= items.length?items[items.length-1].id+1:1
         const addNewItem={id,checked:false,item}
         const listItems=[...items,addNewItem]
         setItems(listItems)
         localStorage.setItem('todo_list',JSON.stringify(listItems))
    }
    const handleSubmit= (e)=>{
         e.preventDefault()
         if(!newItem) return
         addNewItem(newItem)
         setNewItem('')

    }
    const handleCheck= (id)=>{
         const listItems =items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
         setItems(listItems)
         localStorage.setItem('todo_list',JSON.stringify(listItems))
    }  
    const handleDelete = (id)=>{
         const listItems =items.filter((item)=>item.id!==id)
         setItems(listItems)
         localStorage.setItem('todo_list',JSON.stringify(listItems))
    }
 return(
  <div className='App'>
     <Header />
     <Additem
     newItem={newItem}
     setNewItem={setNewItem} 
     handleSubmit={handleSubmit}
     />
     <Searchitem 
     search={search}
     setSearch={setSearch}
     />
     <Content 
     items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
     handleCheck={handleCheck}
     handleDelete={handleDelete}
     />
  </div>
 );
   
 
}

export default App;
