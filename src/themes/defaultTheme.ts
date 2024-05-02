import fontes from "./tokens/fontes";
import cores from "./tokens/cores";
import { extendTheme, theme } from "@chakra-ui/react";
import espacamento from "./tokens/espacamento";
import tamanho from "./tokens/tamanho";
import raioDaBorda from "./tokens/raioDaBorda";
import tamanhoFonte from "./tokens/tamanhoFonte";
import pesoFonte from "./tokens/pesoFonte";
import alturaLinha from "./tokens/alturaFonte";
import espacamentoLetras from "./tokens/espacamentoLetras";
import breakpoints from "./tokens/breakpoints";

const defaultTheme = {
    breakpoints,
    colors: cores,
    fonts: fontes,
    fontSizes: tamanhoFonte,
    fontWeights: pesoFonte,
    lineHeights: alturaLinha,
    letterSpacings: espacamentoLetras,
    space: espacamento,
    sizes: {
        ...theme.space,
        tamanho
    },
    radii: raioDaBorda
}

export default extendTheme(defaultTheme)