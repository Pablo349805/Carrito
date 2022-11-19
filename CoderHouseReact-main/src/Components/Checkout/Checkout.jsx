import { useContext, useState } from "react";
import { Redirect } from "react-router";
import { UIContext } from "../../context/UIContext";
import { CartContext } from "../../context/CartContext";
import generarOrden from "../../firebase/generarOrden";
import Swal from "sweetalert2";


const Checkout = () => {

    const { loading, setLoading } = useContext(UIContext);
    const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext);

    const [values, setValues] = useState({
        nombre: "",
        apellido: "",
        email: "",
        tel: "",
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    if (values.nombre === "" || values.apellido === "" || values.email === "" || values.tel === "") {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Debe completar todos los campos",
        });
        return;
    }

    setLoading(true)
    try{
        generarOrden(values, carrito, calcularTotal())
            .then((res) => {
                Swal.fire({
                        icon: 'success',
                        title: 'Orden registrada!',
                        text: `Guarde su número: ${res}`,
                        willClose: () => {
                            vaciarCarrito();
                        }
                    })
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Producto sin stock',
                        text: `No hay stock de: ${err.map(el => el.title).join(", ")}`
                    })
            })
            .finally(() => {
                setLoading(false)
            })
        } catch(err) {
            Swal.fire({
                        icon: 'error',
                        title: 'Error inesperado',
                        text: err
                    })
        }
    }

    return ( 
        <>
            {carrito.length === 0 && <Redirect to="/" />}
            {loading &&  <div className="spinner-border text-secondary justify-content-center" role="status">
                                <span className="sr-only"></span>
                        </div>}

                <div>
                    <h2>Complete sus datos</h2>
                    <hr/>

                    <div className="container my-5">
                        <form onSubmit={handleSubmit}>
                            <h2>Formulario</h2>
                            <input 
                                className="form-control my-2"
                                type="text"
                                placeholder="Nombre"
                                name="nombre"
                                value={values.nombre}
                                onChange={handleInputChange}
                            />
                        {values.nombre.length === 0 && <small>Este campo es obligaotrio</small>}            

                            <input 
                                className="form-control my-2"
                                type="text"
                                placeholder="Apellido"
                                name="apellido"
                                value={values.apellido}
                                onChange={handleInputChange}
                            />
                        {values.apellido.length === 0 && <small>Este campo es obligaotrio</small>}            

                                <input 
                                className="form-control my-2"
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                            />
                        {values.email.length === 0 && <small>Este campo es obligaotrio</small>}  

                        <input 
                                className="form-control my-2"
                                type="text"
                                placeholder="Teléfono"
                                name="tel"
                                value={values.tel}
                                onChange={handleInputChange}
                            />
                        {values.tel.length === 0 && <small>Este campo es obligaotrio</small>}  
                        <br/>

                        <button className="btn btn-primary my-2" type="submit" disabled={loading}>Finalizar</button>          
                                                
                        </form>
                    </div>
                </div>
        </>
    );  
}

export default Checkout;