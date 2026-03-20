import { StyleSheet } from "react-native";
import colors from "../theme/colors";
import spacing from "../theme/space";

export default StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8
    },

    label: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    }
})