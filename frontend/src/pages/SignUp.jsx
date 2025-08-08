import React from 'react'

const SignUp = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center' >
        <form action="" className='max-w-[900px] w-[90%] h-[600px] flex items-center justify-center flex-col  md:items-start gap-[10px]'>
            <h1 className='text-[30px] text-[black]'>Welcome to Mern-Estate</h1>
           <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]'>
            <label htmlFor="name" className='20px'>Username</label> 
            <input type="text" id='name' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]'/>
           </div>
           <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
            <label htmlFor="email" className='20px'>Email</label> 
            <input type="email" id='email'className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' />
           </div>
           <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'> 
            <label htmlFor="password" className='20px'>Password</label> 
            <input type="password" id='password' className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] [px-20px]'/>
           </div>
            <button className='px-[50px] py-[10px] bg-[purple] text-[white] text-[18px]'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp