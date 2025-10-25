import React from 'react'
import { Header } from '@/components/header'
import PropertyForm from '@/components/property/PropertyForm'

const page = () => {
  return (
    <>
      <Header />
      <div className='bg-gray-50 py-6'>
        <PropertyForm />
      </div>
    </>
  )
}

export default page