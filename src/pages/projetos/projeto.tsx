import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

type ProjetoProps = {
    imagem: string,
    titulo: string,
    habilidades: string,
    descricao: string,
    link: string
}

const Projeto: React.FC<ProjetoProps> = ({imagem, titulo, habilidades, descricao, link}) => {
    return (
        <Flex 
            direction={'column'} 
            width={'64'}
            height={'30rem'}
            background={'cinza.50'} 
            borderRadius={'lg'}
            boxShadow={'lg'}
            overflow={'auto'}
            marginBottom={'16'}
            >

            <Image 
                src={imagem} 
                alt={titulo} 
                paddingBottom={'4'}
                borderTopLeftRadius={'lg'}
                borderTopRightRadius={'lg'}/>

            <Flex direction={'column'} justifyContent={'space-between'} height={'100%'}>
                
                <Flex direction={'column'} >
                    <Heading 
                        fontFamily={'decorativo'} 
                        fontSize={'xl'} 
                        as={'h3'}
                        paddingBottom={'1'}
                        paddingLeft={'4'}>
                            {titulo}
                    </Heading>
                    <Text 
                        fontFamily={'decorativo'}
                        fontSize={'sm'}
                        color={'rosa'}
                        paddingLeft={'4'}
                        paddingBottom={'3'}>
                            {habilidades}
                    </Text>
                    <Text
                        fontFamily={'sans_serif'}
                        fontSize={'sm'}
                        paddingLeft={'4'}
                        paddingRight={'4'}>
                            {descricao}
                    </Text>
                </Flex>
                
                <Button as={'a'} 
                        href={link}
                        target="_blank" rel="noopener noreferrer"
                        background={'azul.700'}
                        color={'branco'}
                        margin={'4'}>
                            Acessar
                </Button>
                
            </Flex>
        </Flex>
    )
}

export default Projeto;