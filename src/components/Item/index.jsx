import ItemDetail from "../../ItemDetail"
import { ShopContext } from "../../context/shopcontext"


export default function Item() {
    return (
        <div>
            <ShopContext.Provider >
                <ItemDetail/> 
            </ShopContext.Provider>
        </div>
    )
}
