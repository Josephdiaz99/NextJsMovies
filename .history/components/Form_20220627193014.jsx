import { useState } from "react"
import Link from 'next/link'
import {useRouter} from 'next/dist/client/router'
const Form = ({formData, forNewMovie=true}) => {

    const router=useRouter()

    const [form , setForm] = useState({
      title:formData.title,
      plot:formData.plot
    })
  
    const [message, setMessage] = useState([])
  
  
    const handleChange=e=>{
      const {value,name}=e.target
      setForm({
          ...form,
          [name]:value
      })
    }

     const handleSubmit = (e) => {
    e.preventDefault();
    if (forNewMovie) {
      postData(form);
    } else {
      // editar data
      putData(form);
    }
  };
    const putData=async(form)=>{
      const {id}=router.query
      try {
        const res= await fetch(`/api/movie/${id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(form)

        })

        const data= await res.json()
        console.log(data)
        if(!data.success){
            for (const key in data.error.errors) {
                let error=data.error.errors[key]

               
                    setMessage(oldmensage=>[
                        ...oldmensage,
                        {message:error.message}
                    ])
                    
                    setTimeout(()=>{
                        setMessage([])
                    },3500)
            }
            

        }else{
          setMessage([])
            router.push('/')
        }
        
    } catch (error) {


        console.log(error)
    }

    }
    const postData=async(form)=>{
  
      try {
          const res= await fetch('/api/movie/',{
              method:'POST',
              headers:{
                  'Content-type':'application/json'
              },
              body:JSON.stringify(form)
  
          })
  
          const data= await res.json()
          console.log(data)
          if(!data.success){
              for (const key in data.error.errors) {
                  let error=data.error.errors[key]
  
                 
                      setMessage(oldmensage=>[
                          ...oldmensage,
                          {message:error.message}
                      ])
                      
                      setTimeout(()=>{
                          setMessage('')
                      },3500)
              }
              
  
          }else{
              router.push('/')
          }
          
      } catch (error) {
  
  
          console.log(error)
      }
  
    }

  return (
    <form onSubmit={handleSubmit} >
            <input type="text" 
            className="form-control my-2"
             placeholder='Title' 
             autoComplete='off'
              name='title'
               value={form.title} 
               onChange={handleChange} />
       
            <input 
            type="text"
             className="form-control my-2"
              placeholder='Plot'
               autoComplete='off' 
               name='plot' 
               value={form.plot} 
               onChange={handleChange} />

       <button className="btn btn-primary w-100 mb-2" type='submit'>{forNewMovie ? 'Agregar':'Editar'} </button>
    <Link href='/'>
    <a className='btn btn-warning w-100' >Volver...</a>
    </Link>
    {
      message && message.map(({message}) =>(
        <p className='text-center mt-2' key={message} >{message}</p>
    ))

    }
        </form>
  )
}

export default Form