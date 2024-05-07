import { Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MidiasSociais = () => {
    return (
        <Flex gap={'3.5'} marginRight={'5'} display={{ base: "none", md: "flex" }}>

            <Link to="https://github.com/victorhfsilva" target="_blank" rel="noopener noreferrer">
                <Image 
                    src="/github.svg" 
                    alt="DB" 
                    boxSize='6' 
                    objectFit='cover'
                    marginLeft={'4'}  
                />  
            </Link>
            
            <Link to="https://www.linkedin.com/in/victorhfsilva/" target="_blank" rel="noopener noreferrer">
                <Image 
                    src="/linkedin.svg" 
                    alt="DB" 
                    boxSize='6' 
                    objectFit='cover'
                    marginLeft={'4'}  
                />
            </Link>
            
        </Flex>
    )
}

export default MidiasSociais;