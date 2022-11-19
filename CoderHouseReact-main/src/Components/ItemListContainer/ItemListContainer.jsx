import ItemList from "./ItemList"
import { useContext, useEffect, useState  } from "react"
import { UIContext } from "../../context/UIContext"
import { getFirestore } from "../../firebase/config"
import { useParams } from "react-router"


const ItemListContainer = () => {
    
    const [items, setItems] = useState([])
    const {loading, setLoading} = useContext(UIContext)
 
    const {categoryId} = useParams()


    useEffect(() => {
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection("productos")

        if (categoryId) {

            const filtrado = productos.where("category", "==", categoryId)

            filtrado.get()
                .then((response) => {
                    const newItems = response.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    })

                    setItems(newItems)
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)}
            )

        } else {

            productos.get()
                .then((response) => {
                    const newItems = response.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    })

                    setItems(newItems)
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)}
            )
        }    
        }, [categoryId, setLoading])
        

    return ( 
        <>
            <div>
                {loading ? (<div className="d-flex justify-content-center align-items-center" style={{ height: "88vh" }}>
                                <div className="spinner-border text-secondary justify-content-center" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            </div>) 
                        : <ItemList items={items} />}
                
            </div>
        </>

     );
}
 
export default ItemListContainer;