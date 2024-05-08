import { Flex, Heading } from "@chakra-ui/react";
import Habilidade from "./habilidade";

const Habilidades = () => {
    return (
        <Flex direction={'column'} width={'86%'}>
            <Heading
                as={'h2'}
                fontFamily={'decorativo'} fontSize={'2xl'}
                color={'cinza.800'}
                marginBottom={'5'}>
                Habilidades
            </Heading>

            <Flex direction={'column'} paddingBottom={'5'}>
                <Heading
                    as={'h2'}
                    fontFamily={'decorativo'} fontSize={'lg'}
                    color={'cinza.800'}
                    marginBottom={'3'}>
                    Back-End
                </Heading>
                <Habilidade nome={'Java'} nivel={4} />
                <Habilidade nome={'Spring Boot'} nivel={4} />
                <Habilidade nome={'Spring Security'} nivel={3} />
                <Habilidade nome={'Flyway'} nivel={3} />
            </Flex>

            <Flex direction={'column'} paddingBottom={'5'}>
                <Heading
                    as={'h2'}
                    fontFamily={'decorativo'} fontSize={'lg'}
                    color={'cinza.800'}
                    marginBottom={'3'}>
                    Front-End
                </Heading>
                <Habilidade nome={'Javascript'} nivel={3} />
                <Habilidade nome={'Typescript'} nivel={3} />
                <Habilidade nome={'React'} nivel={3} />
                <Habilidade nome={'HTML'} nivel={2} />
                <Habilidade nome={'CSS'} nivel={2} />
            </Flex>

            <Flex direction={'column'} paddingBottom={'5'}>
                <Heading
                    as={'h2'}
                    fontFamily={'decorativo'} fontSize={'lg'}
                    color={'cinza.800'}
                    marginBottom={'3'}>
                    Qualidade
                </Heading>
                <Habilidade nome={'Selenium'} nivel={3} />
                <Habilidade nome={'Rest Assured'} nivel={3} />
                <Habilidade nome={'Cypress'} nivel={2} />
                <Habilidade nome={'Testes Unitários'} nivel={4} />
                <Habilidade nome={'Testes de Integração'} nivel={4} />
            </Flex>

            <Flex direction={'column'} paddingBottom={'5'}>
                <Heading
                    as={'h2'}
                    fontFamily={'decorativo'} fontSize={'lg'}
                    color={'cinza.800'}
                    marginBottom={'3'}>
                    DevOps
                </Heading>
                <Habilidade nome={'Linux'} nivel={3} />
                <Habilidade nome={'Docker'} nivel={3} />
                <Habilidade nome={'Git'} nivel={3} />
            </Flex>
        </Flex>
    )
}

export default Habilidades;