import { Flex, Grid, GridItem, Heading, Image } from "@chakra-ui/react"
import SobreMim from "./sobreMim";
import Habilidades from "./habilidades";

const Home = () => {
    return (
        <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} 
            paddingLeft={'8%'}
            paddingRight={'8%'}
            marginTop={'20'}
            rowGap={'2'}    
            columnGap={'32'}
            marginLeft={'12'}
            marginRight={'12'}
            alignItems={'center'}
            marginBottom={'4'}>

                <GridItem>
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
                            color={'cinza.800'}
                            marginBottom={'2'}>
                                Victor Hugo Ferreira Silva
                        </Heading>
                        <Heading 
                            as={'h3'}
                            fontFamily={'sans_serif'} fontSize={'3xl'} fontWeight={'normal'}
                            color={'cinza.800'}>
                                Sou Desenvolvedor Full Stack na DBServer. 
                        </Heading>
                        <Image 
                        src={'/victor-silva.jpg'} 
                        alt={'Foto de Victor Hugo Ferreira Silva'} 
                        marginTop={'8'}
                        marginEnd={'8'}/>
                    </Flex>


                </GridItem>

                <GridItem rowSpan={2}>
                    <Habilidades />
                </GridItem>

                <GridItem marginTop={'8'}>
                    <SobreMim/>
                </GridItem>


        </Grid>
        
    )
}

export default Home;