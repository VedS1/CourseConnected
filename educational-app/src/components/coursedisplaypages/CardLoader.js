import CardDataFetcher from "./CardDataFetcher"
import { useEffect } from "react"

const CardLoader = ({ idList }) => {
    
    

    return (
        <div>
            {idList.map((id) => <CardDataFetcher id={id}/>)}
        </div>
    )
}

export default CardLoader
