import { Flex, Text } from "@chakra-ui/react";
import DB from "./db";
import { Link } from "react-router-dom";
import MidiasSociais from "./midiasSociais";

const Header = () => {
    return (
        <header>
            <Flex background={'blue.100'} justifyContent={'space-between'} alignItems={'center'}>
                <DB />

                <Flex gap={'10'} marginLeft={'16'} marginRight={'5'}>
                    <Link to="/">
                        <Text fontFamily={'decorativo'} 
                            color={'azul.800'} 
                            fontSize={'xl'}>
                                <b>Sobre</b>
                        </Text>
                    </Link>
                    
                    <Link 
                        to="/Victor Hugo Ferreira Silva - Currículo.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <Text fontFamily={'decorativo'} 
                            color={'azul.800'}
                            fontSize={'xl'}>
                                <b>Currículo</b>
                        </Text>
                    </Link>
                    
                    <Link to="/projetos">
                        <Text fontFamily={'decorativo'} 
                            color={'azul.800'}
                            fontSize={'xl'}>
                                <b>Projetos</b>
                        </Text>
                    </Link>
                </Flex>

                <MidiasSociais />

            </Flex>
        </header>
    )
}

export default Header;