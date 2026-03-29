import { useState } from "react";
import { PanResponder, StyleSheet, Text, View } from "react-native"

const DragAndDrop = () => {
    const [position, setPosition] = useState({x: 100, y: 100})

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
            setPosition({
                x : gestureState.moveX -25,
                y: gestureState.moveY -25,
            })
        }
    })
    return(
        <View style={styles.container}>
            <View
            {...panResponder.panHandlers}
                style={[styles.box, {top: position.y, left: position.x}]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        position: 'absolute'
    }
});

export default DragAndDrop;