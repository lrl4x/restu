import axios from "axios"
import { useState } from "react"
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom'
const Signupc = () => {

  // const [users,setusers] =useState([])
  const [Firstname, setFirstname] = useState("")
  const [Lastname, setLastname] = useState("")
  const [Zip, setZIPCode] = useState("")
  const [PhoneNumber, setPhoneNumber] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const [Birthday, setBirthday] = useState("")
  const [_,setCookies] =useCookies(['access_token'])
  const navigate = useNavigate();
  // useEffect(()=>{
  // axios.get('http://localhost:3001/account/get')
  // .then(res =>{

  //   console.log(res.data)
  // })
  // },[users])


  const handleSubmit = async(e: { preventDefault: () => void }) => {
    e.preventDefault();

      await axios.post('http://localhost:3001/account/register', {
      Firstname,
      Lastname,
      Email,
      Zip,
      PhoneNumber,
      Password,
      ConfirmPassword,
      Birthday
    })

   
    
  }
  return (
    <div className='mt-12'>
      
      <div className='container mx-auto md:flex md:justify-center '>
        <div className=' bg-white rounded-xl shadow-2xl flex flex-col items-center justify-center p-4  '>
          {/* tytle */}
          <div>
            <h1 className='text-3xl md:text-5xl text-center font-serif'>JOIN US</h1>
            <hr className='mx-auto 0 border-2 rounded-full  border-yellow-200 w-24 h-px my-8 bg-gray-200  dark:bg-gray-500' />
            <p className='text-center text-sm'>Feed your happy. Sign up below.</p>
          </div>
          {/* options */}
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
          {/* line */}
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
            <span className=" px-3 font-medium text-gray-900">or</span>
            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
          </div>

          <div className=''>
            {/* forms */}
            <form onSubmit={handleSubmit}>
              <div className="mb-1">
                <label id="Firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                <input type="text" name="Firstname" value={Firstname} onChange={(e)=> setFirstname(e.target.value)} id="Firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required />
              </div>
              <div className="mb-1">
                <label id="Lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                <input type="text"  value={Lastname} onChange={(e)=> setLastname(e.target.value)} id="Lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required />
              </div>
              
              <div className="mb-1">
                <label id="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="Email" value={Email} onChange={(e)=> setEmail(e.target.value)} id="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
              </div>
              <div className="mb-1">
                <label id="ZIPCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your ZIPCode</label>
                <input type="text" name="Zip" value={Zip} onChange={(e)=> setZIPCode(e.target.value)} id="ZIPCode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ZIP Code" required />
              </div>
              <div className="mb-1">
                <label id="PhoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone</label>
                <input type="text" name="PhoneNumber" value={PhoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} id="PhoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required />
              </div>
              <div className="mb-1">
                <label id="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" name="Password" value={Password} onChange={(e)=> setPassword(e.target.value)} id="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
              </div>
              <div className="mb-1">
                <label id="ConfirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your conpassword</label>
                <input type="password" name="ConfirmPassword" value={ConfirmPassword} onChange={e => setConfirmPassword(e.target.value)} id="ConfirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm Password" required />
              </div>
              <div className="mb-1">
                <label id="Birthday" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Birthday</label>
                <input type="text" name="Birthday" value={Birthday} onChange={(e)=> setBirthday(e.target.value)} id="Birthday" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Birthday || MM/DD" required />
              </div>
              {/* Agree */}
              <div className="flex items-start mb-1 mt-4">
                <div className="flex items-center h-5">
                  <input id="agree" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-300 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label id="agree" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">I’m good with SMS messages about order status. Msg & data rates may apply. Reply STOP any time to stop.</label>
              </div>
              {/* remember me */}
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-300 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label id="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">Yes, send me emails so I get news on the latest flavors, deals and local offers.</label>
              </div>
              {/* sumbit */}
              <button type="submit" className=" text-white bg-slate-500 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-gray-300 dark:hover:bg-gray-300 dark:focus:ring-slate-500">SIGN UP</button>


            </form>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Signupc