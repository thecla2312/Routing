import React from 'react'
import { useGlobalcontext } from '../hooks/context'
import SearchForm from '../Components/SearchForm'
import MealList from '../Components/MealList'

const Homepage = () => {
  return (
    <div>
     <SearchForm />
      <MealList />
    </div>
  )
}

export default Homepage;