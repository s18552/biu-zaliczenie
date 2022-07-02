import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Navigation from './components/navigation'
import Groups from './pages/groups'
import Students from './pages/students'
import Subjects from './pages/subjects'
import Group from './pages/group'
import Student from './pages/student'

const App = () => {
  return (
    <div>
      <Navigation />
      {/* Router */}
      <Routes>
        {/* <Route path="/groups" element={<Groups />} /> */}
        <Route path="/students" element={<Students />} />
        <Route path="/students/:studentId" element={<Student />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/groups/:groupId" element={<Group />} />
        <Route path="/" element={<Groups />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
