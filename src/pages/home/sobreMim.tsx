import { Flex, Heading, Text } from "@chakra-ui/react";

const SobreMim = () => {
    return (
        <Flex direction={'column'} width={'80%'}>
            <Heading
                as={'h2'}
                fontFamily={'decorativo'} fontSize={'xl'}
                color={'cinza.800'}
                marginBottom={'5'}>
                Sobre mim
            </Heading>

            <Text paddingBottom={'5'}
                fontFamily={'sans_serif'} fontSize={'md'}>
                Sou um estagiário da Unidade Ar da DB Server. Entrei na empresa através do programa StartDB 2023. Desde então passei por diferentes capacitações em Back-End com Java, Front-End com React, Qualidade e Metodologias Ágeis. Além disso participei de um projeto real em que desenvolvemos o jogo Agile Life que simula o ambiente de trabalho de uma equipe de desenvolvimento. 
            </Text>
            
            <Text paddingBottom={'5'}
                fontFamily={'sans_serif'} fontSize={'md'}>
                Sou formado em Engenharia Física e graduando de Engenharia Eletrônica e de Telecomunicações. Durante minha primeira graduação tive a oportunidade de estudar Tecnologia da Informação na Óbuda University por um ano em Budapeste. Este foi meu primeiro contato com a Engenharia de Software.
            </Text>
        </Flex>
    );
}

export default SobreMim;