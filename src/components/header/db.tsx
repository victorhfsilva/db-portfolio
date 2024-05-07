
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom"

const DB = () => {
    return (
        <Link to="https://db.tec.br/" target="_blank" rel="noopener noreferrer">
            <Image 
                src="/db.png" 
                alt="DB" 
                boxSize='16' 
                objectFit='cover'
                marginLeft={'4'}  
            />
        </Link>
    )
}

export default DB;