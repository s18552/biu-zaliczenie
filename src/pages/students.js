import React, { useState } from 'react'
import { students as studentsMock } from '../mocks/students'
import StudentComp from '../components/studentComp'
import StudentForm from '../components/studentForm'

const Students = () => {
  const [students, setStudents] = useState(studentsMock)
  const addStudent = ({ name, age }) => {
    const newStudent = {
      id: students.length,
      name,
      age,
    }
    setStudents([...students, newStudent])
    studentsMock.push(newStudent)
  }
  return (
    <div>
      <h1>Students</h1>
      <div>
        {students.map((student) => (
          <StudentComp key={student.id} student={student} />
        ))}
      </div>
      <StudentForm onSubmit={addStudent} />
    </div>
  )
}

export default Students
