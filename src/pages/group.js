import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import GroupComp from '../components/groupComp'
import { groups } from '../mocks/groups'
import { students } from '../mocks/students'

const Group = () => {
  const { groupId } = useParams()
  const [group, setGroup] = useState(groups[groupId])
  const studentsOutsideGroup = students.filter(
    (student) =>
      !group.students.some((studentInGroup) => studentInGroup.id === student.id)
  )
  const [newStudentId, setNewStudentId] = useState("")

  const addToGroup = () => {
    const newGroup = {
      ...group,
      students: [
        ...group.students,
        students[newStudentId],
      ],
    }
    console.log('newGroup', newGroup);
    setGroup(newGroup)
    groups[groupId] = newGroup
  }

  return (
    <div>
      <h1>Group nr {groupId}</h1>
      <GroupComp group={group} />
      <h3>Add user to group:</h3>
      <select
        value={newStudentId}
        onChange={(e) => setNewStudentId(e.target.value)}
      >
        <option value="">Pick student</option>
        {studentsOutsideGroup.map((student) => (
          <option key={student.id} value={student.id}>
            {student.name}
          </option>
        ))}
      </select>
      <button onClick={addToGroup}>Add</button>
    </div>
  )
}

export default Group
