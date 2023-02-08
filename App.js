import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputContainer from './components/InputContainer';
import ItemList from './components/ItemList';

export default function App() {
  const [todos, setTodos] = useState([{ id: Math.random(), title: 'Shopping' }, { id: Math.random(), title: 'Cleaning room' }]);
  const [inputValue, setInputValue] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  // To add a new item
  const addTodo = () => {
    if(inputValue.length > 0) {
      setTodos(items => [...items, { id: Math.random(), title: inputValue}]);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text 
        style={styles.headingText} 
        onPress={() => setIsModalVisible(true)}>
          Add Todo To The List
      </Text>        

      <InputContainer 
        addTodo={addTodo} 
        setInputValue={setInputValue} 
        isModalVisible={isModalVisible} 
        setIsModalVisible={setIsModalVisible}
        />

      <ItemList todos={todos} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingHorizontal: 30,
    height: '100%'
  },

  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  }
});