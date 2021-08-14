import CardDataFetcher from "./CardDataFetcher"

const CardLoader = ({ idList }) => {
    
    return (
        <div>
            {idList.map((id) => <CardDataFetcher id={id}/>)}
        </div>
    )
}

export default CardLoader
