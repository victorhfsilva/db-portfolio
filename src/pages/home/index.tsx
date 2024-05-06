import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react"
import SobreMim from "./sobreMim";
import Habilidades from "./habilidades";

const Home = () => {
    return (
        <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} 
            gap={'12'}
            marginLeft={'12'}
            marginRight={'12'}
            marginTop={'10'}
            marginBottom={'4'}>

                <GridItem colSpan={2}>
                    <Flex direction={'column'}>
                        <Heading 
                            as={'h2'}
                            fontFamily={'decorativo'} fontSize={'2xl'}
                            color={'cinza.800'}
                            marginBottom={'5'}>
                                Olá, meu nome é
                        </Heading>
                        <Heading 
                            as={'h1'}
                            fontFamily={'sans_serif'} fontSize={'4xl'}
                            color={'cinza.800'}>
                                Victor Hugo Ferreira Silva
                        </Heading>
                    </Flex>
                </GridItem>

                <GridItem colSpan={{base: 2, md: 1}}>
                    <SobreMim/>
                </GridItem>

                <GridItem colSpan={{base: 2, md: 1}}>
                    <Habilidades />
                </GridItem>
        </Grid>
        
    )
}

export default Home;