import React from 'react'
import { useSelector } from 'react-redux'
import { selectStudents } from './studentSlice'


const Showstudents = () => {
    const students = useSelector(selectStudents)
    

    
    
  return (
    <div>
        ALL OF THEM <hr></hr>
    {students.length> 0 &&students.map((student, i) => <div key={i}>
    Name: {student.sname} <br></br>
    email : {student.semail} <br></br>
    computer grade: {student.sgrade_computer} <br></br>
    english grade: {student.sgrade_english} <br></br>
    math grade: {student.sgrade_math} <br></br>
    <hr />
  </div>)}
    </div>
  )
}

export default Showstudents