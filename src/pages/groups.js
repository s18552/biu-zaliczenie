import GroupComp from '../components/groupComp'
import { groups } from '../mocks/groups'

const Groups = () => {
  return (
    <div>
      Groups
      {groups.map((group) => (
        <GroupComp key={group.id} group={group} />
      ))}
    </div>
  )
}

export default Groups
