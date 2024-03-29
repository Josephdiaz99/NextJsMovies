import Form from "../../components/Form"
import useSWR from "swr"
import {useRouter} from 'next/dist/client/router'


const fetcher=url=>(
    fetch(url)
    .then(res=>res.json())
    .then(json>json.data)
)

const EditMovie=()=>{

    const router=useRouter()
    const {id}=router.query

    const {data:movie,error}=useSWR(id ? `/api/movie/${id}`: null,fetcher)

    if(!movie){
        return(
            <div className="container mt-5 text-center">
                <h1>Loading...</h1>
            </div>
        )
    }

    const formData={
        title:'',
        plot:''
    }

    return (
        <div className="container">
        <h1>Editar Movie</h1>
        <Form forNewMovie={false} formData={formData} >

        </Form>
        </div>
    )

    
}
export default EditMovie