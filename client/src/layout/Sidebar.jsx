import React, {useState, useEffect} from 'react'

const Sidebar = () => {
  const [groups, setGroups] = useState([]);
  const [classmates, setClassmates] = useState([]);

  useEffect(() => {
    const getGroups = async () => {
      const response = await fetch("localhost:8347/user/groups");
      const data = await response.json();
      setGroups(data);
    }

    const getClassmates = async () => {
      const response = await fetch("localhost:8347/user/classmates");
      const data = await response.json();
      setClassmates(data);
    }

    getGroups();
    getClassmates();
  }, [])

  return (
    <div>
      <div className='groups'>
        <h1>Groups</h1>
        <ul>
          {groups.map((group) => <li className='group'>{group.name}</li>)}
        </ul>
      </div>
      <div className='classmates'>
        <h1>Classmates</h1>
        <ul>
          {classmates.map((classmate) => <li className='classmate'>{classmate.displayName}</li>)}
        </ul>
      </div>
    </div>
  )
};

export default Sidebar;