import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Task = (props) => {
    return (
        <View>
            <View style={styles.item} >
                <View style={styles.itemLeft} >
                    <TouchableOpacity style = { styles.square} ></TouchableOpacity>
                    <Text style = { styles.itemText }>{ props.text }</Text>
                </View>
                <View style={styles.circular} >

                </View>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    item : {
        backgroundColor : "#FFF",
        padding : 15,
        borderRadius : 10,
        flexDirection : "row",
        marginBottom : 20,
        alignItems : "center",
        justifyContent : "space-between"

    },
    itemLeft : {
        flexDirection : "row",
        flexWrap : "wrap",
        alignItems : "center",
    },
    square : {
        width : 24,
        height : 24,
        backgroundColor : "#55BCF6",
        opacity : 0.4,
        borderRadius : 5,
        marginRight : 15
    },
    circular : {
        width : 12,
        height : 12,
        borderRadius : 10,
        borderColor : "#55BCF6",
        borderWidth : 2
    }
})

export default Task;