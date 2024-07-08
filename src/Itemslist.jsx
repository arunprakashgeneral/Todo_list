import React from 'react'
import {FaTrashAlt} from "react-icons/fa";

const Itemslist = ({items,handleCheck,handleDelete}) => {
  return (
    <>
      <ul className=''>
     {items.map((item) => (
        <li key={item.id} className='bg-blue-300 rounded-xl p-3 flex flex-row justify-between mt-6 w-screen sm:max-w-xl'>
            <input type="checkbox"
            className='w-7 '
            checked={item.checked}
            onChange={()=>handleCheck(item.id)}
            />
            <label className='text-black text-xl sm:text-3xl '
            style={(item.checked)?{textDecoration:'line-through'}:null}
            onDoubleClick={()=>handleCheck(item.id)}>{item.item}
            </label>
            <FaTrashAlt
            className='text-black text-4xl outline-none '
            role='button'
            tabIndex='0'
            onClick={()=>handleDelete(item.id)}
            />
        </li>
      ))}
      
     </ul>
    </>
  )
}

export default Itemslist