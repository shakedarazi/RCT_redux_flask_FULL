import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getStudentsAsync, selectStudents, addStudentAsync, selectUpdate } from './studentSlice';

const Filterstudent = () => {
  const students = useAppSelector(selectStudents)
  const [search, setsearch] = useState('')

  return (
    <div>
      name to search: <input onChange={(e) => setsearch(e.target.value)} />
      {students.filter(stud => stud.sname.includes(search)).map((filteredStud, i) => <div key={i}>
        <h4>
          {filteredStud.sname} <br></br> male to contact : {filteredStud.semail}
        </h4> </div>
      )}
    </div>
  )
}

export default Filterstudent