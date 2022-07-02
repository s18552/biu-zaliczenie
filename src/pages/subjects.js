import React from 'react'
import { subjects } from '../mocks/subjects'

const Subjects = () => {
  return (
    <div>
      <h1>Subjects</h1>
      <div>
        {subjects.map((subject) => (
          <div key={subject.id}>
            <h2>{subject.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Subjects
