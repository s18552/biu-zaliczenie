import { useParams } from 'react-router-dom'
import StudentComp from '../components/studentComp'
import { groups } from '../mocks/groups'
import { students } from '../mocks/students'

const Student = () => {
  const { studentId } = useParams()
  console.log('students', students);
  const student = students[studentId]
  const studentsGroups = groups.filter((group) =>
    group.students.some((s) => s.id === student.id)
  )
  const studentSubjects = studentsGroups.flatMap((group) => group.subjects)
  return (
    <div>
      <h1>Student nr {studentId}</h1>
      <StudentComp student={student} />
      <h3>Groups:</h3>
      <ul>
        {studentsGroups.map((group) => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul>
      <h3>Subjects:</h3>
      <ul>
        {studentSubjects.map((subject) => (
          <li key={subject.id}>{subject.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Student
