import React from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
//import { redirect } from "next/dist/server/api-utils";

export default function RegisterForm() {
  /*const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const signUp = async(formData) => {
    //console.log('Form submitted:', data);
   
    const origin = headers.get('origin')
    const email=formData.get('email')
    const name=FormData.get('name')
    const password=formData.get('password')
    const confirmPassword=formData.get('confirmPassword')

    const supabase=createClient()
    const {error} =await supabase.auth.signUp({
      email,
      password,
      options:{
       emailRedirectTo:`${origin}auth/confirm`
      }
    })
    if (error){
      redirect('/signup'?message:'email already in use!')
    }
    redirect('/confirm'?message:'check email for confirmation mail')
  };*/
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()
  const router = useRouter()

  const onSubmit = (formData) => {
    const { email, name, password, confirmPassword } = formData

    const supabase = createClient() // Assuming createClient() sets up Supabase client

    supabase.auth
      .signUp({
        email,
        password,
        options: {
          // Redirect URL after confirmation email is sent
          emailRedirectTo: `${window.location.origin}/auth/confirm`,
        },
      })
      .then(({ error }) => {
        if (error) {
          throw error
        }

        // Redirect to a page indicating the email has been sent
        router.push(
          `/confirm?message=check%20email%20for%20confirmation%20mail`,
        )
      })
      .catch((error) => {
        router.push(
          `/signup?message=${encodeURIComponent('email already in use!')}`,
        )
      })
  }

  return (
    <>
      <div className="opacity-85 flex justify-center items-center h-full">
        <div className="bg-white text-black p-7 rounded-2xl flex flex-col h-[650px]">
          <p className="text-2xl font-bold mb-2 flex items-center justify-center text-center">
            JOIN US TODAY!
          </p>

          {/* Form includes (Email, Name, Password, Confirm password, T&C) */}
          <form
            className="w-full max-w-md text-sm font-semibold"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="email" className="block mb-1">
              Email:
            </label>
            <input
              name="email"
              placeholder="you@example.com"
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Invalid email address',
                },
              })}
              className="w-full p-2 mb-1 border-2 border-gray-300 rounded bg-slate-100"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}

            <label htmlFor="name" className="block mb-2">
              Full Name:
            </label>
            <input
              name="name"
              placeholder="First last"
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full p-2 mb-4 border-2 rounded bg-slate-100"
            />
            {errors.name && (
              <div className="text-red-500">{errors.name.message}</div>
            )}

            <label htmlFor="password" className="block mb-2">
              Password:
            </label>
            <input
              name="password"
              placeholder="********"
              type="password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
              className="w-full p-2 mb-4 border-2 rounded bg-slate-100"
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}

            <label htmlFor="confirmPassword" className="block mb-2">
              Confirm Password:
            </label>
            <input
              name="confirmPassword"
              placeholder="********"
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) =>
                  value === watch('password') || 'Passwords do not match',
              })}
              className="w-full p-2 mb-4 border-2 rounded bg-slate-100"
            />
            {errors.confirmPassword && (
              <div className="text-red-500">
                {errors.confirmPassword.message}
              </div>
            )}

            <label className="block mb-2">
              <input
                type="checkbox"
                {...register('terms', {
                  required: 'You must accept the terms and conditions',
                })}
                className="mr-2"
              />
              I agree to the terms and conditions
            </label>
            {errors.terms && (
              <div className="text-red-500">{errors.terms.message}</div>
            )}

            <div className="text-left">
              <button
                type="submit"
                className="bg-white text-black border-2 border-black py-2 px-4 rounded-lg font-md hover:bg-black hover:text-white mt-2 mb-2"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Line break with "OR" */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-400"></div>
            <div className="mx-3 text-black">OR</div>
            <div className="flex-1 border-t border-gray-400"></div>
          </div>

          {/* Social Media Sign Up (Google or LinkedIn) */}
          <div className="flex items-center justify-between gap-1 h-16 mb-3 text-center text-sm font-semibold">
            <div>
              <button
                type="button"
                className="border-2 py-2 px-4 rounded-xl flex items-center"
              >
                <img
                  src="./google.webp"
                  alt="Google Logo"
                  className="w-8 h-8 mr-2"
                />
                Sign Up with Google
              </button>
            </div>

            <div>
              <button
                type="button"
                className="border-2 py-2 px-4 rounded-xl flex items-center"
              >
                <img
                  src="./linkedin2.png"
                  alt="LinkedIn Logo"
                  className="w-8 h-8 mr-2"
                />
                Sign Up with LinkedIn
              </button>
            </div>
          </div>

          {/* "Already have an account" link */}
          <p className="text-center">
            Already have an account?{' '}
            <Link href={'/login'}>
              <span className="text-blue-400 underline hover:text-black font-semibold">
                {' '}
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
