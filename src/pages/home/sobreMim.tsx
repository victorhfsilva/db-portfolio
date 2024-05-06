import { Button, Flex, Heading, Text } from "@chakra-ui/react";

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
                fontFamily={'sans_serif'} fontSize={'sm'}>
                Sou um estagiário da Unidade Ar da DB Server. Entrei na empresa através do programa StartDB 2023. Desde então passei por diferentes capacitações em Back-End com Java, Front-End com React, Qualidade e Metodologias Ágeis. Além disso participei de um projeto real em que desenvolvemos o jogo Agile Life que simula o ambiente de trabalho de uma equipe de desenvolvimento. 
            </Text>
            <Text paddingBottom={'5'}
                fontFamily={'sans_serif'} fontSize={'sm'}>
                Possuo formação em Engenharia Física. Durante esta graduação aprendi conceitos avançados de Física e Matemática, porém meu aprendizado mais importante foi como aprender a aprender. Graças a ela digo hoje que sou autodidata e que com persistência consigo aprender qualquer conteúdo.
            </Text>
            <Text paddingBottom={'5'}
                fontFamily={'sans_serif'} fontSize={'sm'}>
                Também tive a oportunidade de estudar Tecnologia da Informação na Óbuda University por um ano em Budapeste, através do programa Ciência sem Fronteiras, o que me introduziu ao mundo de desenvolvimento de software e acendeu minha paixão por ele.
            </Text>
            <Text paddingBottom={'5'}
                fontFamily={'sans_serif'} fontSize={'sm'}>
                Acredito que esta minha paixão pela tecnologia e minha capacidade de aprendizado rápido serão um grande trunfo em qualquer projeto. Estou sempre disposto a aprender e crescer, e animado para encontrar oportunidades para desenvolver minhas habilidades.
            </Text>
        </Flex>
    );
}

export default SobreMim;