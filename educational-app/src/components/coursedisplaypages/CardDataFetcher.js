import MenuCard from "../menucards/MenuCard"

const CardDataFetcher = ( {id} ) => {
    
    
    return (
        <div>
            <MenuCard
            imageURL = "https://cdn.discordapp.com/attachments/675487279623569479/876244497015644190/unknown.png"
            rating = {id}
            title = "Mr. Stuff"
            author = "Ved Soolgiri"
            text = "I am Stuff"
            bookmarkStatus = "true"
            />
        </div>
    )
}

export default CardDataFetcher
