import { useRecoilValue } from "recoil"
import { resultadoDoAmigoSecreto } from "../atom"

export const useResultadoSorteio = () => {
    return useRecoilValue(resultadoDoAmigoSecreto);
};
