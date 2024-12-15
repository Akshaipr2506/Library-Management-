import { serverurl } from './serverurl';
import { commonApi } from './commonApi';




export const addBookApi=async(reqBody)=>{
    return await commonApi("POST",`${serverurl}/books`,reqBody)
 }

 export const getBookDetailsApi=async()=>{
    return await commonApi("GET",`${serverurl}/books`,"")
 }

 export const deleteBookApi=async(id)=>{
    return await commonApi("DELETE",`${serverurl}/books/${id}`,{})
 }
// const API_URL = 'http://localhost:4000/users';

// // Function to check if a user exists and match credentials
// export const loginUser = async (email, password) => {
//     try {
//         const response = await axios.get(API_URL, {
//             params: { email, password }
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Login failed', error);
//         return null;
//     }
// };

// // Function to register a new user
// export const registerUser = async (email, password, role) => {
//     try {
//         const newUser = { email, password, role };
//         const response = await axios.post(API_URL, newUser);
//         return response.data;
//     } catch (error) {
//         console.error('Registration failed', error);
//         return null;
//     }
// };