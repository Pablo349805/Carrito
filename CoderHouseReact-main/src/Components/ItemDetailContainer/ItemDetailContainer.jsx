import ItemDetail from "./ItemDetail"
import { useContext, useEffect, useState  } from "react"
import { useParams } from "react-router-dom"
import { UIContext } from "../../context/UIContext"
import { getFirestore } from "../../firebase/config"


const ItemDetailContainer = () => {
    
    
    const {loading, setLoading} = useContext(UIContext);
    const resultado = useParams()
    const [item, setItem] = useState({})
    

    console.log(item)

    useEffect(() => {
        setLoading(true)
        
        const db = getFirestore()
        const productos = db.collection("productos")
        const item = productos.doc(resultado.id)

        item.get()
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
         })
         .catch( err => console.log(err))
         .finally(() => {
             setLoading(false)
            })
    
    }, [ resultado.id, setLoading]) 


   
    return ( 
        <>
             <div>
                {loading ? (<div className="d-flex justify-content-center align-items-center" style={{ height: "88vh" }}>
                                <div className="spinner-border text-secondary justify-content-center" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            </div>) 
                        : <ItemDetail item={item}/>}
                
            </div>
        </>
     );
}
 
export default ItemDetailContainer;

