import React, { useState } from 'react'
import Axios from 'axios'


function App() {
const [name,setName]=useState('');
const [age,setAge]=useState(0);
const [country,setCountry]=useState('');
const [position,setPosition]=useState('');
const [salary,setSalary]=useState(0);

const [employeeList, setEmployeeList]=useState([]);

const addEmployee = ()=>{
  Axios.post('http://localhost:3000/create',{
    name:name,
    age:age,
    country:country,
    position:position,
    salary:salary,
  }).then(()=>{
    console.log('success');
  });

}
const getEmployee = ()=> {
  Axios.get('http://localhost:3000/employees').then((response)=>{
    setEmployeeList(response.data);
  });
  
}
  return (
   <> 
   <body className='p-5'>
      <section className='bg-gray-100 rounded-2xl p-5 mb-10' >
        <div className='container mx-auto'>
       <p className='text-3xl font-light font-serif'>Personal Details</p> 
         <li className='flex flex-col p-5'> 


    <label className='p-5 text-lg'> Name:     <input type='text'    className=' border rounded w-1/3 h-8 shadow-md'onChange={(event)=>{setName(event.target.value);}} placeholder='example kumar '/></label>
    <label className='p-5 text-lg'> Age:      <input type='number'   className=' border rounded w-1/3 h-8 shadow-md'onChange={(event)=>{setAge(event.target.value);}} placeholder='ex 26'/></label>
    <label className='p-5 text-lg'> Country:  <input type='text'     className=' border rounded w-1/3 h-8 shadow-md'onChange={(event)=>{setCountry(event.target.value);}} placeholder='India'/></label>
    <label className='p-5 text-lg'> Position: <input type='text'     className=' border rounded w-1/3 h-8 shadow-md'onChange={(event)=>{setPosition(event.target.value);}} placeholder='software_developer'/></label>
    <label className='p-5 text-lg'> Salary:   <input type='number'   className=' border rounded w-1/3 h-8 shadow-md'onChange={(event)=>{setSalary(event.target.value);}} placeholder='60,000'/></label>
    <div className='px-3 py-3 space-x-5 font-semibold text-white '>
    <button className='border p-4 bg-red-500 rounded-md ' onClick={addEmployee} >Add Employee</button>
    <button className=' border p-4 bg-red-500 rounded-md' onClick={getEmployee} >Show Employee</button>

    </div>
    

         </li>
      </div> 

      </section>
    
   </body>
    
   <body className=' p-5'>
    

     
    
   {employeeList.map((val,key)=>{
     
      return <div className=' p-2 font-serif'>
        <section className='bg-red-100 rounded p-5 mb-10'>
        
        Name: {val.name},
       Age: {val.age},
       Country: {val.country},
       Position: {val.position},
       Salary: {val.salary}

        </section>
       </div>
      

    })}
   

   </body>

    

   
   

   
   

   
   
   
   </>
  )
}

export default App