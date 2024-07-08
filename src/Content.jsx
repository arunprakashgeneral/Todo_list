import React from 'react';


import Itemslist from './Itemslist';

const Content = ({items,handleCheck,handleDelete}) => {
    
    
  return (
    <main>
      
     {(items.length)?
       <Itemslist
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
     
       :(
           <p className='text-black font-bold text-3xl'><b>Your list is empty!!!</b></p>
       )
   }
    </main>
    
  )
}

export default Content
