import { useState } from "react"
import './CheckOutForm.css'

function CheckOutForm(props){
    const [formData, setFormData] = useState(
        {
            username: "",
            email: "",
            phone:"",
        }
    )

    function handleSubmit(event){
        event.preventDefault()
        props.handleCheckout(formData)
    }

    function handleChange(event){
        const inputName = event.target.name
        const value = event.target.value

        const newFormData = {...formData}
        newFormData[inputName] = value
        setFormData(newFormData)
    }

    function clearForm(){
        setFormData({
            username:"",
            email:"",
            phone:"",
        })
    }

    return(
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h4>Ingrese sus datos</h4>
                <div className="form-inputs">
                    <input value={formData.username} onChange={handleChange} name="username" required type="text" placeholder="Nombre y Apellido"/>

                    <input value={formData.email} onChange={handleChange} name="email" required type="email" placeholder="...@email.com" />
                
                    <input value={formData.phone} onChange={handleChange} name="phone" required type="tel" placeholder="1111111111" />

                    <div className="form-buttons">
                        <button type="submit" className="form-button-confirm"> Finalizar Compra</button>
                        <button onClick={clearForm} type="button" className="form-button-clear">Limpiar Formulario</button>
                    </div>
                </div>
            </form>
        </section>
    )

}

export default CheckOutForm