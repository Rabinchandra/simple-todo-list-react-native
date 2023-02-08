import { FlatList, View, Text, Pressable, StyleSheet } from 'react-native'

function ItemList({ todos }) {
  return (
    <View>
        <FlatList 
            data={todos}
            keyExtractor={item => item.id} 
            renderItem={({item}) => (
              <View style={styles.listItem}>  
                <Pressable 
                  android_ripple={{color: 'rgb(52, 11, 176)'}} 
                  style={styles.listPressable}>
                  <Text style={styles.listText}>{item.title}</Text>
                </Pressable>
              </View>
            )} 
        />
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 5,
    backgroundColor: 'rgb(82, 31, 237)',
    overflow: 'hidden',
    borderRadius: 5,
  },
  listPressable: {
    padding: 10,
  },
  listText: {
    color: '#fff',
  }
})

export default ItemList