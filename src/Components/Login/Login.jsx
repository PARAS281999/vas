import React from 'react'

export const Login = () => {
  return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src='' alt='' />
            </div>

            <div className='bg-blue-100 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-200 p-8 px-8 rounded-lg'>
                    <h2 className='text-2xl text-black text-left font-bold mb-4 italic'>SIGN IN</h2>
                    <p className='text-1xl text-black text-left font-semibold mb-4 italic'>Welcome Back!</p>
                    <div className='flex flex-col text-black-600 text-left py-2'>
                        <label>User Name</label>
                        <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-400 focus:outline-none' type='text' />
                    </div>
                    <div className='flex flex-col text-black-600 text-left py-2'>
                        <label>Password</label>
                        <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-400 focus:outline-none' type='password' />
                    </div>
                    <div className='flex justify-between text-black-400 py-2'>
                        <p className='flex items-center'>
                            <input className='mr-2' type='checkbox' />Remember Me</p>
                        <button>Forget Password</button>
                    </div>
                    <button className='w-full my-5 py-2 bg-blue-500 shadow-lg shadow-blue-500/50 hover:shadow-gray-500/100 text-white text-xl rounded-lg'>SIGN IN</button>
                </form>
            </div>
        </div>
    )
}
