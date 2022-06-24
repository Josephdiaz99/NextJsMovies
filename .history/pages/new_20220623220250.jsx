import {Link} from 'next/link'

const New = () => {
  return (
    <div className='container' >
        <h1 className='my-3' >Agregar Movie</h1>
        <form>
            <input type="text" className="form-control my-2" placeholder='Title' autoComplete='off' name='title' value={} onChange={} />
        </form>
        <form>
            <input type="text" className="form-control my-2" placeholder='Plot' autoComplete='off' name='plot' value={} onChange={} />
        </form>
       <button className="btn btn-primary w-100" type='submit'>Agregar</button>
       <link></link>
    </div>
  )
}

export default New