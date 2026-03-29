import { useState } from "react";
import { PanResponder, StyleSheet, Text, View } from "react-native";

const ResizableBox = () => {
    const [size, setSize] = useState({ width: 100, height: 100 });

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
            setSize({
                width: gestureState.dx + size.width,
                height: gestureState.dy + size.height
            });
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.centerContainer}>
                <View
                    {...panResponder.panHandlers}
                    style={[styles.box, { width: size.width, height: size.height }]}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    centerContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: "center"
    },
    box: {
        backgroundColor: "blue",
        borderColor: 'white',
        borderWidth: 2
    }
});

export default ResizableBox;