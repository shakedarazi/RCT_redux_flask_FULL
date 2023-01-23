import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Student from '../../app/models/Student';
import { RootState } from '../../app/store';
import {addStudent, getStudents } from './studentAPI';

export interface StudentState {
  students:Student[]
  update:boolean

}

const initialState: StudentState = {
  students:[],
  update:false

};


export const getStudentsAsync = createAsyncThunk(
  'Student/getStudents',
  async () => {
   
    const response = await getStudents();
   
    return response;
  }
);

export const addStudentAsync = createAsyncThunk(
  'Student/addStudent',
  async (stud:Student) => {
   
    const response = await addStudent(stud);
   
    return response;
  }
);

// export const delProductAsync = createAsyncThunk(
//   'Product/delProduct',
//   async (id:number) => {
   
//     const response = await delProduct(id);
   
//     return response;
//   }
// );

// export const updProductAsync = createAsyncThunk(
//   'Product/updProduct',
//   async (prod:Product) => {
   
//     const response = await updProduct(prod);
   
//     return response;
//   }
// );

export const StudentSlice = createSlice({
  name: 'Student',
  initialState,
  reducers: {
    
  },
  
  extraReducers: (builder) => {
    builder
     
      .addCase(getStudentsAsync.fulfilled, (state, action) => {
        state.students = action.payload.data
      }).addCase(addStudentAsync.fulfilled, (state, action) => {
        console.log(action.payload.data)
        state.students.push(action.payload.data)
      })
      // .addCase(delStudentAsync.fulfilled, (state, action) => {
      //   console.log(action.payload)
      //   state.students= state.students.filter(x => x.pid !== action.payload)
      // }).addCase(updStudentsAsync.fulfilled, (state, action) => {
      //   console.log(action.payload.data)
      //   state.update =! state.update
    
      // })
  },
});

// export const {  } = StudentSlice.actions;

export const selectStudents = (state: RootState) => state.Student.students;
export const selectUpdate = (state:RootState) => state.Student.update;
export default StudentSlice.reducer;
