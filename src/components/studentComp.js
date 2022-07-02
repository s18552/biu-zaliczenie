import { Link } from 'react-router-dom'

const StudentComp = ({ student }) => {
  return (
    <div key={student.id}>
      <Link to={`/students/${student.id}`}>
        <h2>{student.name}</h2>
      </Link>
    </div>
  )
}

export default StudentComp
