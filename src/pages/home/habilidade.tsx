import { Flex, Image, Text } from "@chakra-ui/react";

type HabilidadeProps = {
    nome: string;
    nivel: number;
};

const Habilidade: React.FC<HabilidadeProps> = ({ nome, nivel }) => {
    if (nivel < 0 || nivel > 5) {
        throw new Error("Nível deve estar entre 0 e 5");
    }

    return (
    <Flex 
        direction={'row'} 
        paddingBottom={'2'} 
        justifyContent={'space-between'} 
        alignItems={'center'}>
            <Text 
                fontFamily={'sans_serif'} 
                fontSize={'lg'} 
                paddingBottom={'2'}>
                    {nome}
            </Text>

            <Flex>
                {Array(nivel).fill(null).map((_, i) => 
                    <Image paddingRight={'0.5'} key={i} src="/estrela_preenchida.svg"/>
                )}
                {Array( 5 - nivel).fill(null).map((_, i) => 
                    <Image paddingRight={'0.5'} key={i} src="/estrela_vazia.svg"/>
                )}
            </Flex>
    </Flex>
    )
}

export default Habilidade;