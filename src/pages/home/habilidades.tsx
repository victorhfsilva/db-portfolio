import { Flex, Heading } from "@chakra-ui/react";
import Habilidade from "./habilidade";

const Habilidades = () => {
    return (
        <Flex direction={'column'} width={'80%'}>
            <Heading
                as={'h2'}
                fontFamily={'decorativo'} fontSize={'xl'}
                color={'cinza.800'}
                marginBottom={'5'}>
                Habilidades
            </Heading>

            <Flex direction={'column'} paddingBottom={'5'}>
                <Heading
                    as={'h2'}
                    fontFamily={'decorativo'} fontSize={'md'}
                    color={'cinza.800'}
                    marginBottom={'3'}>
                    Back-End
                </Heading>
                <Habilidade nome={'Java'} nivel={5} />
                <Habilidade nome={'Spring Boot'} nivel={5} />
                <Habilidade nome={'Spring Security'} nivel={4} />
                <Habilidade nome={'Flyway'} nivel={4} />
            </Flex>

            <Flex direction={'column'} paddingBottom={'5'}>
                <Heading
                    as={'h2'}
                    fontFamily={'decorativo'} fontSize={'md'}
                    color={'cinza.800'}
                    marginBottom={'3'}>
                    Front-End
                </Heading>
                <Habilidade nome={'Javascript'} nivel={4} />
                <Habilidade nome={'Typescript'} nivel={4} />
                <Habilidade nome={'React'} nivel={4} />
                <Habilidade nome={'HTML'} nivel={3} />
                <Habilidade nome={'CSS'} nivel={3} />
            </Flex>

            <Flex direction={'column'} paddingBottom={'5'}>
                <Heading
                    as={'h2'}
                    fontFamily={'decorativo'} fontSize={'md'}
                    color={'cinza.800'}
                    marginBottom={'3'}>
                    Qualidade
                </Heading>
                <Habilidade nome={'Selenium'} nivel={4} />
                <Habilidade nome={'Rest Assured'} nivel={4} />
                <Habilidade nome={'Cypress'} nivel={3} />
                <Habilidade nome={'Testes Unitários'} nivel={5} />
                <Habilidade nome={'Testes de Integração'} nivel={5} />
            </Flex>

            <Flex direction={'column'} paddingBottom={'5'}>
                <Heading
                    as={'h2'}
                    fontFamily={'decorativo'} fontSize={'md'}
                    color={'cinza.800'}
                    marginBottom={'3'}>
                    DevOps
                </Heading>
                <Habilidade nome={'Linux'} nivel={4} />
                <Habilidade nome={'Docker'} nivel={4} />
                <Habilidade nome={'Git'} nivel={4} />
            </Flex>
        </Flex>
    )
}

export default Habilidades;