import Form from "../../components/Form"


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