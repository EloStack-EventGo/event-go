"use client"
import React,{useState} from "react";
export default function Login() {



  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  //return <h1>Login</h1>
  return (

    <>
    
     
  {/*background image */}
    <main className="bg-crowd bg-cover bg-center bg-no-repeat w-full">   
      <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-55">

        {/** division */}
        {/**left half */}
        <div className="w-1/3"> <h1>LEFT</h1> </div>


        {/**right half */}
        <div className="absolute left-[calc(40%)] w-[50%] bg-white opacity-65 p-5 text-black rounded-2xl py-12 px-20 flex-1 justify-center text-justify mt-7 mb-2">
          <p className="text-2xl font-bold mb-2 flex items-center justify-center text-center ">JOIN US TODAY !</p>
          {/* <div className="border-2 w-10 border-black inline-block mb-2"></div>*/}
         {/* <a href='#' className="border-2 border-black rounded-xl bg-white  text-black px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white">SIGN UP</a>*/}
          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-md text-sm font-semibold">
              {/* Email Field */}
              <label htmlFor="email" className="block mb-1">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mb-1 border-2 boreder-gray-300 rounded bg-slate-100"
              />
              {/* Name Field */}
              <label htmlFor="name" className="block mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mb-4 border-2 rounded  bg-slate-100"
              />

              {/* Password Field */}
              <label htmlFor="password" className="block mb-2">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 mb-4 border-2 rounded  bg-slate-100"
              />

              {/* Confirm Password Field */}
              <label htmlFor="confirmPassword" className="block mb-2">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 mb-4 border-2 rounded  bg-slate-100"
              />

              {/* Terms and Conditions */}
              <label className="block mb-2">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="mr-2"
                />
                I agree to the terms and conditions
              </label>
              <div className="text-left">
              {/* Submit Button */}
              <button type="submit" className="bg-white text-black border-2 border-black py-2 px-4 rounded-lg font-md hover:bg-black hover:text-white mt-2 mb-2">
          
                Sign Up
              </button>
              </div>
              </form>
              <div className="flex items-center mt-2 mb-4">
              <div className="flex-1 border-t border-gray-400"></div>
              <div className="mx-3 text-black">OR</div>
              <div className="flex-1 border-t border-gray-400"></div>
            </div>

            {/**social signup */}
          <div className="flex justify-between mb-4 ">
            {/* Google Sign Up Button */}
            <div className="text-center text-sm font-semibold">
              <button type="button" className=" bg-white opacity-95 text-black border-2 border-black-400 py-2 px-4 rounded-xl flex items-center justify-center mb-2">
                <img src="./google.png" alt="Google Logo" className="w-8 h-8 mr-2" />
                Sign Up with Google
              </button>
            </div>

            {/* LinkedIn Sign Up Button */}
            <div className="text-center text-sm font-semibold">
            <button type="button" className=" bg-white opacity-95 text-black border-2 border-black-400 py-2 px-4 rounded-xl flex items-center justify-center mb-2">
                <img src="./linkedin.png" alt="LinkedIn Logo" className="w-7 h-7 mr-3" />
                Sign Up with LinkedIn
              </button>
              </div>
            </div>


        {/* Already have an account? */}
        <p className=" text-center">
          Already have an account? <a href="#" className="text-blue-400 underline hover:text-black font-semibold ">Login</a>
        </p>
          

        </div>
          


        
      </div>
    </main>

    </>
  )
}
