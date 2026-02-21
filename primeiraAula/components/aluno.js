import { TextInput } from "react-native-web";
import Aprovado from "./aprovado";
import Reprovado from "./reprovado";

export default function Aluno() {
    const [nota, setNota] = useState(0);
    const [situacao, setSituacao] = useState("");

    const atualizarNota = (texto) => {
        if (texto==='') {
            setSituacao("Sem Nota");
            return;
        }
            setNota(texto)
        
        
        if(nota >= 7 )
            setSituacao("Aluno Aprovado");
        else 
            setSituacao("Aluno Reprovado");
        }
    

    return (
        <View>
            <Text>Aluno(a): {props.nome}</Text>
            <TextInput
                placeholder="Digite a nota do aluno"
                value={nota}
                onChangeText={atualizarNota}
            />
            <Text>Situação: {situacao}</Text>

            {
                nota >= 7 ? (
                    <Aprovado />
                ) : (
                    <Reprovado />
                )
            }
        </View>
    );
}