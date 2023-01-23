
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getStudentsAsync, selectStudents, addStudentAsync, selectUpdate } from './studentSlice';

const Student = () => {
  const students = useAppSelector(selectStudents);
  const studentUpdate = useAppSelector(selectUpdate)
  const dispatch = useAppDispatch();
  const [sname, setsname] = useState("")
  const [semail, setsemail] = useState("")

  const [sgrade_english, setsgrade_english] = useState(0)
  const [sgrade_math, setsgrade_math] = useState(0)
  const [sgrade_computer, setsgrade_computer] = useState(0)

  useEffect(() => {
    console.table(students)
  }, [students])



  useEffect(() => {
    dispatch(getStudentsAsync())
  }, [studentUpdate])

  return (
    <>
    
      <div>
      <h1>students</h1>
      <h5>NOTE = if you didnt entered a grade, youll see in your json file in its property its value as 0. dont panic. have fun.  </h5>
        student name:<input onChange={(e) => setsname(e.target.value)} /><br />
        email:<input onChange={(e) => setsemail(e.target.value)} />
        english grade:<input onChange={(e) => setsgrade_english(+e.target.value)} /><br />
        math grade:<input onChange={(e) => setsgrade_math(+e.target.value)} />
        computer grade:<input onChange={(e) => setsgrade_computer(+e.target.value)} />
        <button onClick={() => dispatch(addStudentAsync({ sname: sname , semail: semail, sgrade_english: sgrade_english, sgrade_math: sgrade_math, sgrade_computer: sgrade_computer }))}>add student</button>
        <br /><hr />
      
      </div>
      

    </>
  )
}

export default Student
