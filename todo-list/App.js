import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])

  const handleTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }



  return (
    <View style={styles.container}>
      {/* today's task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
        {/* for items */}
        {
          taskItems.map((item, index) => {
            return <Task key={index} text={item} />
          })
        }
        
      </View>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? "padding" : "height"} 
        style={ styles.inputWrapper}
      >
        <TextInput style={styles.input} placeholder="Write a task" value={task} onChangeText = {text => setTask(text)}></TextInput>
        <TouchableOpacity onPress={() => handleTask()}>
          <View style={styles.buttonWrapper}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper : {
    paddingTop : 80,
    paddingHorizontal : 20,
  },
  sectionTitle : {
    fontSize : 24,
    fontWeight : 'bold',
  },
  items : {
    marginTop : 30
  },
  inputWrapper : {
    position : 'absolute',
    bottom : 60,
    flexDirection : "row",
    width :  "100%",
    justifyContent : "space-around",
    alignItems : 'center'
  },
  input : {
    backgroundColor : "#FFF",
    width : 300,
    height : 40,
    alignItems : 'center',
    borderRadius : 30,
    borderWidth : 1,
    borderColor : "#55BCF6",
    paddingVertical : 10,
    paddingHorizontal : 15
  },
  buttonWrapper : {
    width : 40,
    height : 40,
    borderRadius : 50,
    backgroundColor : "#FFF",
    justifyContent : 'center',
    alignItems : 'center',
    borderWidth : 1,
    borderColor : "#55BCF6",
  }

});
