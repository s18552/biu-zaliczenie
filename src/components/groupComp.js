import React from 'react'
import { Link } from 'react-router-dom'

const GroupComp = ({ group }) => {
  return (
    <div key={group.id}>
      <Link to={`/groups/${group.id}`}>
        <h2>{group.name}</h2>
      </Link>
      <ul>
        {group.students.map((student) => (
          <li key={student.id}><Link to={`/students/${student.id}`}>{student.name}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default GroupComp
