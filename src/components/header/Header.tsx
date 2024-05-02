import { Text } from "@chakra-ui/react";

const Header = () => {
    return (
        <header>
            <Text 
                fontFamily={'decorativo'} 
                fontWeight={'800'} 
                fontSize={{base: 'lg', sm: 'xl', md: '2xl'}} 
                color={'azul.600'}>
                Header
            </Text>
        </header>
    )
}

export default Header;