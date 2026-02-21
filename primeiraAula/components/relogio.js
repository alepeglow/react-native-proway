export default function Relogio() {

    const[ hora, setHora] = useState(new Date());

     useEffect(() => {
        const timer = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.relogio}>
                <Text style={styles.texto}>
                    {hora.toLocaleTimeString()}
                </Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#282c34'        
    
    },
    relogio: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 350,

        // Sombra pra android
        elevation: 10,

        // Sombra pra iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    texto: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    }
});