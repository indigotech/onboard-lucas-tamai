
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {getUsers} from './getUsers'
import { Navigation } from 'react-native-navigation'


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
    const usersPerPage: number = 10
    const [data, setData] = React.useState<item[]>();
    const [offset, setOffset] = React.useState(0);

    
    const changeOffset = () => {
      setOffset(offset+usersPerPage)
    }
    
    async function getData() {
      const users = await getUsers(offset, usersPerPage);
      setData(data ? data.concat(users) : users);
    }
    
    function changePage(){
      Navigation.push("stackMain",
      {component:{
        name: "NewUserScreen"
      }
    })
    }
    
    useEffect(() => {
      getData()
    },[offset])


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
      <TouchableOpacity 
        style={styles.floatingButton}
        onPress={changePage}
        >
        <Text style={styles.icon}>＋</Text>
      </TouchableOpacity>
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
  floatingButton:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    top: 20,
    borderRadius: 100,
    backgroundColor: '#C8D6C6'
  },
  icon:{
    color: "white",
    fontSize: 28
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
