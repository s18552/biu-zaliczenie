import { students } from './students'
import { subjects } from './subjects'

export const groups = [
  {
    id: 0,
    name: '61c',
    students: [students[0], students[1], students[2]],
    subjects: [subjects[0], subjects[1]],
  },
  {
    id: 1,
    name: '62c',
    students: [students[0], students[1]],
    subjects: [subjects[2]],
  },
  {
    id: 2,
    name: '63c',
    students: [students[3], students[4]],
    subjects: [subjects[3]],
  },
]
