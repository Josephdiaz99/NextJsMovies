import Form from "../../components/Form"
import useSWR from "swr"

const fetcher=url=>(
    fetch(url)
    .then(res=>res.json())
    .then(json>json.data)
)

const editMovie=()=>{

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
export default editMovie