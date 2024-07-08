import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const Additem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef= useRef()
  return (
    <>
    <form  className='pt-5 w-' onSubmit={handleSubmit}>
        <input
        className='px-12 py-3 rounded-md outline-none bg-slate-500 text-white ' 
        ref={inputRef}
        type="text"
        placeholder='Add item'
        required
        autoFocus
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
         />
         <button 
         className='bg-slate-500 px-3 py-4 ml-4 hover:text-black'
         type='submit'
         onClick={()=>inputRef.current.focus()}
         >
            <FaPlus />
         </button>
    </form>
    </>
  )
}

export default Additem