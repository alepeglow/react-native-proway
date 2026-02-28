import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f172a',
        paddingHorizontal: 16,
        paddingTop: 24
    },
    title: {
       color: 'white',
       fontSize: 22,
       fontWeight: '700', 
    },
    subtitle: {
        color: '#a1a1aa',
        marginTop: 4,
        marginBottom: 16
    },
    card: {
        backgroundColor: '#0f2555',
        borderRadius: 14,
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
       
        // Sombra pra android
        elevation: 4,

        // Sombra pra iOS
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: {width: 0, height: 6},
        shadowRadius: 12,
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 27,
        marginRight: 12
    },
    cardContent: {
        flex: 1
    },
    cardHeaderRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 8,
        marginBottom: 2
    },
    name: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    },
    username: {
        color: '#a1a1aa',
        fontSize: 13
    },
    email: {
        color: '#a1a1aa',
        fontSize: 13,
        marginBottom: 6
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    metaPill: {
        backgroundColor: '#1f2937',
        color: 'white',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 999,
        fontSize: 12
    },
    metaText: {
        color: '#a1a1aa',
        fontSize: 12
    },
    dot: {
        color: '#a1a1aa'
    },
    listContent: {
        paddingBottom: 32,
        gap: 12
    }
});