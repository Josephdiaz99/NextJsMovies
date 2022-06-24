import Head from 'next/head'
import Link from 'next/link'
import conectarDB from '../lib/dbConnect'
import Movie from '../models/Movie'


export default function Home({movies}) {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container' >
        <h1 className='text-center' >Movies</h1>
        <Link href="/new" >
        <a className="btn btn-primary w-100 mb-2">Agregar</a>
        </Link>
         {
          movies.map(({_id,title,plot})=>(
            <div className="card mb-2" key={_id} >
              <div className="card-body">
                <div className="h5 text-uppercar"> {title} </div>
                <p className="fw-ligt">{plot}</p>
              </div>
            </div>
          ))
         }
      </main>
     </div>
  )

}

export async function getServerSideProps(){
    try {
        await conectarDB()
        const res= await Movie.find({})

        const movies=res.map(doc=>{
          const movie=doc.toObject() 
          movie._id=`${movie._id}`
          return movie
        })
        return {props:{movies}}
    } catch (error) {
      console.log(error)
    }
}
