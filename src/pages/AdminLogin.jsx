import React from 'react'
const background = {
    display :'flex' ,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background:
      "url('https://images2.alphacoders.com/261/26102.jpg') no-repeat",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

function AdminLogin() {
  return (
    <>
    <div style={background}>

<div className='border bg-white shadow  px-5 pb-5 pt-3 rounded' style={{width:'500px', height:'350px'}}>
    <h3 className='text-center'>Admin Login</h3>
    
    <div className='d-flex justify-content-center align-items-center'>
        <form className=''>
            <input type="text" placeholder='username' className='form-control mt-3  ' style={{width:'300px'}}/>

            <input type="password" placeholder='password' className='form-control mt-3' />

            <p className='text-center mt-2'><a href=''>Forgot Password ?</a></p>

           <div className='d-flex align-items-center justify-content-center'>
            <button className='btn btn-primary mt-3'>Submit</button>
           </div>


        </form>
    </div>
</div>


</div>
    </>
  )
}

export default AdminLogin