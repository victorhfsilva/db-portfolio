import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import Projeto from "./projeto";

const Projetos = () => {
    return (
        <Grid
        templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} 
        gap={'12'}
        marginLeft={'12'}
        marginRight={'12'}
        marginTop={'10'}
        marginBottom={'4'}>
                <GridItem colSpan={3}>
                    <Flex direction={'column'}>
                        <Heading 
                            as={'h2'}
                            fontFamily={'decorativo'} fontSize={'2xl'}
                            color={'cinza.800'}
                            marginBottom={'5'}>
                                Meus
                        </Heading>
                        <Heading 
                            as={'h1'}
                            fontFamily={'sans_serif'} fontSize={'4xl'}
                            color={'cinza.800'}>
                                Projetos
                        </Heading>
                    </Flex>
                </GridItem>

            <GridItem>
                <Projeto 
                    imagem="/src/assets/votacao.jpg" 
                    titulo = "Desafio Votação" 
                    habilidades="Back-End, Front End, QA, DevOps" 
                    descricao="Este projeto foi desenvolvido para o desafio da DBServer. Consiste em um sistema de votação de pautas, onde é possível criar pautas, votar e determinar o tempo das sessões de votação." 
                    link ="https://github.com/victorhfsilva/DesafioDB-Votacao-React-Spring"/>
            </GridItem>
  
            <GridItem>
                <Projeto
                    imagem="/src/assets/anotacoes.jpg"
                    titulo = "Treinamento Anotações do Spring"  
                    habilidades="Back-End, Comunicação" 
                    descricao="Este treinamento foi desenvolvido com o objetivo de disseminar o conhecimento entre trainees da DBServer. Nele exploramos algumas das principais anotações do Spring Boot."
                    link = ""
                    />
            </GridItem>
        </Grid>
    )
}

export default Projetos;