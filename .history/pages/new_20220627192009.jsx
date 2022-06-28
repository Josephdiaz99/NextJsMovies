import Link from 'next/link'
import { useState } from 'react'
import {useRouter}from 'next/dist/client/router'
import Form from '../components/Form'

const New = () => {
   const formData={

      title:'',
      plot:''
   }
  
  return (
    <div className='container' >
        <h1 className='my-3'>Agregar Movie</h1> 
        <Form formData={formData} />
    </div>
  )
}

export default New