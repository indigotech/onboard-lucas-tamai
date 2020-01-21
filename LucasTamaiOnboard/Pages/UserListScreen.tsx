
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
import {getUsers} from '../utils/getUsers'
import { Navigation } from 'react-native-navigation'
import { Header } from '../atoms/h1';
import {FloatingButton} from '../atoms/atm.buttons/floatingButton'


interface item{
    id:string,
    name:string,
    email:string
}

function Item({id, name, email}:item) {

  function changeToDetailsPage(){
    Navigation.push("stackMain",
      {component: {
        name: "UserDetails",
        passProps: {
          id: id
        }
      }     
    }
    )
  }

  return (
      <TouchableOpacity 
        style={styles.row}
        onPress={changeToDetailsPage}
      >
        <Text style={styles.title}>{"Nome: "+ name}</Text>
        <Text style={styles.title}>{"Email: "+ email}</Text>
      </TouchableOpacity>
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
    
    function changeToNewUserPage(){
      Navigation.push("stackMain",
        {component: {
          name: "NewUserScreen"
        }
      }
      )
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
      <Header>User List:</Header>
      <FloatingButton
        onPress={changeToNewUserPage}
        >
        <Text style={styles.icon}>＋</Text>
      </FloatingButton>
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
  icon:{
    color: "white",
    fontSize: 28
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    backgroundColor: '#C8D6C6',
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});
