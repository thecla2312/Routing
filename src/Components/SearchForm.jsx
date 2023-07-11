import React from 'react'

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="w-lg-50 mx-auto my-2">
      <form onSubmit={handleSubmit} className='w-50 mx-auto'>
        <label htmlFor="name" className='form-label' text-success fw-bold fs-4 text-center> Saerch for your favorite Meal</label>
        <input type="text" className="form-control" id="name" />
      </form>
    </div>
  )
}

export default SearchForm