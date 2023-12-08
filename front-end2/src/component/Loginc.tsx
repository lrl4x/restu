import React, { useState,useEffect } from 'react'
import { BsFacebook } from 'react-icons/bs'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate, Outlet } from 'react-router-dom';



// useEffect(() => {

//   const token = localStorage.getItem('token');
//   if (!token) {
//     // navigate('/account/login')
//   }
// }, []);

const Loginc = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [_, setCookies] = useCookies(['access_token'])



  const handlesumbit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3001/account/login', {
      Email,
      Password,
    })
    if (res.status === 200) {
      setCookies("access_token", res.data.token)
      window.localStorage.setItem("UserID", res.data.UserID)
      console.log(res)
      navigate('/')
    }

    // navigate('/');

    // window.location.reload(false)

  }




  return (
    <div className='h-screen md:pt-16'>

      <div className='container mx-auto md:flex md:justify-center '>
        <div className=' bg-white rounded-xl shadow-2xl flex flex-col items-center justify-center p-4  '>
          <div>
            <h1 className='text-3xl md:text-5xl font-serif'>WHO’S HUNGRY?</h1>
            <hr className='mx-auto 0 border-2 rounded-full  border-yellow-200 w-24 h-px my-8 bg-gray-200  dark:bg-gray-500' />
            <p className='text-center text-sm'>Feed your happy. Log in below.</p>
          </div>

          <div className='flex flex-col mt-5 space-y-2 w-full '>
            <button className='inline-flex items-center justify-center text-white bg-blue-700 hover:bg-blue-300 w-full rounded-full px-16 py-2'>
              <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
              </svg>
              <h2>Login with Facebook</h2>
            </button>

            <button className='inline-flex items-center justify-center bg-white hover:bg-slate-100 w-full rounded-full px-16 py-2'>
              <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
              </svg>
              <h2>Login with Google</h2>
            </button>

            <button className='inline-flex items-center justify-center text-white bg-black hover:bg-zinc-900 w-full rounded-full px-16 py-2'>
              <svg className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
              <h2>Login with Apple</h2>
            </button>
          </div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
            <span className=" px-3 font-medium text-gray-900">or</span>
            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
          </div>

          <div className=''>
            <form onSubmit={handlesumbit} >
              <div className="mb-1">
                <label id="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="Email" onChange={(e => setEmail(e.target.value))} value={Email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
              </div>
              <div className="mb-6">
                <label id="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" id="Password" onChange={e => setPassword(e.target.value)} value={Password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
              </div>
              {/* <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-300 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label id="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              </div> */}
              <button type="submit" className=" text-white bg-slate-500 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-gray-300 dark:hover:bg-gray-300 dark:focus:ring-slate-500">LOGIN</button>
              <div className='text-center mt-2'>
                <div> <a href="" className='underline'>Forget Password</a> | Don't have an account? <a href="/account/signup" className='underline'>Join Now</a></div>
              </div>

            </form>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Loginc