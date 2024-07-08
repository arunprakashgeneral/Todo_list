import React from 'react'

const Searchitem = ({search,setSearch}) => {
  return (
    <>
       <form   onSubmit={(e)=>e.preventDefault()}>
        <input 
        className='my-6 py-4 bg-slate-500 px-6  rounded-md text-white'
          placeholder='Search Items'
          type="text"
          role='searchbox'
          id='search'
          value={search}
          onChange={(e)=>setSearch(e.target.value)} 
        /> 
        </form>
    </>
  )
}

export default Searchitem