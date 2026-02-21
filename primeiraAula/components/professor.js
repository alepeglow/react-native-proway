import { View , Text} from "react-native-web";
import Aluno from "./aluno";

export default function Professor(props) {
    return (
        <View>
            <Text>Professor {props.nome}</Text>
            <Aluno nome="Maria Fernandes" />
            <Aluno nome="João Silva" />
        </View>
    );
}