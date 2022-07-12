import { useState } from 'react'
import FilterComponent from './Filter'
import Search from './Search'
import Transaction from './Transaction'

function App() {
  
  return (
    <div className="bg-gray-50 h-screen  flex justify-center ">
      <div className='mx-20 p-10 space-y-10'>
      <Search />
      <FilterComponent />
      <Transaction />
      </div>
    </div>
  )
}

export default App
