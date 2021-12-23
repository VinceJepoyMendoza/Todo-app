import React from 'react'

const Categories = ({ currCategory, setCurrCategory }) => {
  return (
    <>
      <label className='categories-label'>
        <h4>School</h4>
        <input
          type='radio'
          name='editCategory'
          checked={currCategory === 'school'}
          onChange={() => setCurrCategory('school')}
        />
      </label>
      <label className='categories-label'>
        <h4>House</h4>
        <input
          type='radio'
          name='editCategory'
          checked={currCategory === 'house'}
          onChange={() => setCurrCategory('house')}
        />
      </label>
      <label className='categories-label'>
        <h4>Games</h4>
        <input
          type='radio'
          name='editCategory'
          checked={currCategory === 'games'}
          onChange={() => setCurrCategory('games')}
        />
      </label>
    </>
  )
}

export default Categories
