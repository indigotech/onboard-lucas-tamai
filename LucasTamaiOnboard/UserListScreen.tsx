
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getUsers} from './getUsers'


interface item{
    id:string,
    name:string,
    email:string
}

function Item({id, name, email}) {
  return (
      <View style={styles.row}>
        <Text style={styles.title}>{"Nome: "+ name}</Text>
        <Text style={styles.title}>{"Email: "+ email}</Text>
      </View>
  );
}


export const UserListScreen = () => {

    const [data,SetData] = React.useState<item[]>();
    const [offset,SetOffset] = React.useState(10);

    const changeOffset = async () => {
      SetOffset(offset+10)
      await getData()
  }

    async function getData(){
        SetData(data ? data.concat(await getUsers(offset)) : await getUsers(0))
    }

    useEffect(() => {
        getData()
    },[])

    const renderItem = ({ item }: { item: Item }) => (
      <Item
          id={item.id}
          name={item.name}
          email={item.email}
       />
    );

  return (
      
    <SafeAreaView style={styles.container}>
      <Text style={styles.Header}>User List:</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={changeOffset}
        onEndReachedThreshold={0.01}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  row:{
    backgroundColor: '#C8D6C6',
    margin: 4,
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: '#C8D6C6',
    shadowOpacity: .5,
    borderRadius: 4,
  },
  Header:{
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    margin: 30    
 },
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    backgroundColor: '#C8D6C6',
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});
