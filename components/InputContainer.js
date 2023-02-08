import { View, Text, TextInput, StyleSheet, Modal, Pressable, Image } from 'react-native'

function InputContainer({ addTodo, setInputValue, isModalVisible, setIsModalVisible }) {
  const addTodoPressHandler = () => {
    addTodo();
    setIsModalVisible(false);
    setInputValue('');
  }

  return (
    <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.wrapper}>
            <Image source={require('../assets/goal.png')} style={styles.image}/>

            <TextInput 
                placeholder='Enter your todo here...' 
                onChangeText={value => setInputValue(value) }
                style={styles.input}
                />


            <View style={styles.buttonContainer}>
              
              <Pressable 
                style={{...styles.button, backgroundColor: 'rgb(66, 141, 245)'}}
                android_ripple={{color: 'rgb(38, 116, 224)'}} 
                onPress={addTodoPressHandler}>
                <Text style={styles.buttonText}>Add Todo</Text>
              </Pressable>

              <Pressable 
                style={{...styles.button, backgroundColor: 'rgb(235, 47, 106)'}}
                android_ripple={{color: 'rgb(235, 91, 136)'}} 
                onPress={() => setIsModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: 'rgb(82, 31, 237)',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '48%',
    backgroundColor: 'rgb(58, 31, 237)',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
  },

  input: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: '#333',
    backgroundColor: '#fff',
    borderRadius: 15,
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
    alignSelf: 'center'
  }
})

export default InputContainer