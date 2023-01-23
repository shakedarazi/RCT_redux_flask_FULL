import axios from "axios";
// import Product from '../../app/models/Product';
import Student from "../../app/models/Student";
import{MY_SERVER} from '../../env'

export function getStudents() {
  // console.log([Student])
  return new Promise<{ data:Student[] }>((resolve) =>
  
    axios.get(MY_SERVER).then(res => resolve({data: res.data})))
}

export function addStudent(stud:Student) {
  return new Promise<{ data: Student }>((resolve) =>
  
    axios.post(MY_SERVER, stud).then(res => resolve({data: res.data})))
}

// export async function delProduct(id:number) {
//   return await axios.delete(MY_SERVER + "/" + id).then(res => id)
// }

// export async function updProduct(prod: Product) {
//   return await axios.put(MY_SERVER + "/" + prod.pid,prod).then(res => res.data)

