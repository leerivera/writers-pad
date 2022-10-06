import React from 'react'
import NoteForm from '../components/stateful/NoteForm'

const HomeContainer = () => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <NoteForm  />
    </div>
  )
}

export default HomeContainer