'use client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Slider from '@/app/components/Slider'
import sliderData from '@/app/components/SliderData'
//import { useSearchParams } from "next/navigation";
import RegisterForm from '../components/RegisterForm'
import Background from '../components/Background'

//const RegisterForm = dynamic(() => import("@/app/components/RegisterForm"), { ssr: false });

export default function Register() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div>Loading...</div>
  }

  return (
    <main className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 items-center bg-black bg-opacity-70">
      {/* Image Slider */}
      <section className="h-full">
        <Slider slides={sliderData} />
      </section>

      {/* Register Form */}
      <section className="h-full">
        <RegisterForm />
      </section>

      <Background className="z-[-10] h-full bg-crowd" />
    </main>
  )
}
