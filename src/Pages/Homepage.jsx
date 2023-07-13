import React from 'react'
import { useGlobalcontext } from '../hooks/context'
import SearchForm from '../Components/SearchForm'
import MealList from '../Components/MealList'
import Banner from '../Components/Banner'

const Homepage = () => {
  return (
    <div>
      <Banner />
     <SearchForm />
      <MealList />
    </div>
  )
}

export default Homepage;