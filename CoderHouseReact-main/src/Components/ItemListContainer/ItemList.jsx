import Row from "react-bootstrap/Row"
import Item from "./Item"



const ItemList = ({ items }) => {


    return ( 
        <main className="p-5">
            <Row>
                        
                {items.length>0 && items.map((item, pos) => {
                        return <Item key={pos} id={item.id} category={item.category} price={item.price} title={item.title} image={item.image}/>
                
                })
                } 
            </Row>
        </main>
    )
}

export default ItemList;