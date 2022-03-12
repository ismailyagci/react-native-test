import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 10,
        width: "100%",
    },
    input: {
        borderColor: '#088F8F',
        paddingHorizontal: 8,
        borderRadius: 5,
        marginRight: 10,
        borderWidth: 1,
        fontSize: 12,
        padding: 4,
        flex: 1
    },
    inputDisabled: {
        borderColor: "#B4B4B4",
    },
    button: {
        backgroundColor: '#088F8F',
        paddingHorizontal: 18,
        borderRadius: 5,
        padding: 8
    },
    buttonTitle: {
        color: "#ffffff"
    },
    buttonDisabled: {
        backgroundColor: "#B4B4B4"
    }
});