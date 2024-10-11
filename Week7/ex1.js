import React, { useState,useEffect} from 'react';
import { View, Text,Image,Button,TouchableOpacity,TextInput,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation,route}) {

  return (
    <View style={{ flex: 1}}>
       <View style={{flex:3,
                  flexDirection:'column',
                  alignItems:'center',
                  justifyContent:'space-around'}} >
       <Text style={{fontSize:25,color:'blue',fontWeight:'bold'}}>MANAGE YOUR TASK</Text>
    </View>
    <View style={{flex:1}}>
     <View style={{flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  padding: 10,
                  marginBottom: 20,}}>
        <Icon name="envelope" size={20} color="#000" />
        <TextInput
          style={{marginLeft: 10,
                  fontSize: 16,
                  flex: 1,}}
          placeholder="Enter your name"
        />
      </View>
      </View>
    <View style={{flex:2,
                  alignItems:'center'}}>
        <TouchableOpacity style={{height:40,
                                  width:'80%',
                                  backgroundColor:'#00BDD6',
                                  borderRadius:10}} onPress={()=>navigation.navigate('man1')}>
        <View style={{flex:1,
                      flexDirection:'row',
                      justifyContent:'center',
                      margin:10,
                      }}>
        <Text style={{color:'white'}}>GET START </Text>
        <Icon name="arrow-right" size={20} color="#000" style={{}} />
        </View>
        </TouchableOpacity>
    </View>
    </View>  
  );
}

function Man1Screen({ navigation,route}) {
  const [data,setData] = useState([]);
  const getDuLieu=()=>{
      fetch('https://66faa7eaafc569e13a9caa55.mockapi.io/dulieu')
    .then((response) => response.json())
    .then((json) => {
              console.log(json);
              setData(json);
    });
  }
useEffect(() => {
    getDuLieu();
    // Cập nhật lại danh sách khi quay lại màn hình này
    const unsubscribe = navigation.addListener('focus', () => {
      getDuLieu();
    });
    return unsubscribe;
  },[navigation]);


  const handleDelete = (id) => {
  fetch(`https://66faa7eaafc569e13a9caa55.mockapi.io/dulieu/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      getDuLieu();
    })
    .catch((error) => {
      console.error(error);
    });
};

 
const Item = ({title}) => (
  <View style={{ flex:1, 
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#DEE1E6',
                borderRadius: 10,
                padding: 15,
                marginVertical: 5,
                }}>
    <Text style={{flex: 1,
                  fontSize: 18,}}>{title.title}</Text>
    <TouchableOpacity style={{ marginLeft: 10,}} >
      <Icon name="trash" size={20} color="#FF6347" onPress={()=>handleDelete(title.id)} />
    </TouchableOpacity>
    <TouchableOpacity style={{ marginLeft: 10,}} onPress={()=>{
                                                               navigation.navigate('man3',{
                                                                     title
                                                              });
                                                             }}>
      <Icon name="pencil" size={20} color="#FF6347" />
    </TouchableOpacity>
  </View>
);
  return (
    <View style={{flex:1}}>
      <View style={{
                    alignItems:'flex-end'}}>
        <Text style={{fontSize: 24,
                      fontWeight: 'bold',}}>Hi Twinkle</Text>
        <Text style={{fontSize: 16,
                      color: 'gray',}}>Have a great day ahead</Text>
      </View>

    <View style={{flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  padding: 10,
                  marginBottom: 20,}}>
        <Icon name="search" size={20} color="#000" />
        <TextInput
          style={{marginLeft: 10,
                  fontSize: 16,
                  flex: 1,}}
          placeholder="Search"
        />
      </View>
    <View style={{flex:1}}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View> 
    <View style={{flex:1,alignItems:'center'}}>
    <TouchableOpacity style={{position: 'absolute',
                              backgroundColor: '#9095A0',
                              width: 60,
                              height: 60,
                              borderRadius: 30,
                              justifyContent: 'center',
                              alignItems: 'center',}} onPress={()=>navigation.navigate('man2')}>
        <Icon name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
    </View> 
  );
  
}

function Man2Screen({ navigation,route}) {
  const [data,setData] = useState('');
  const [dulieu,setDulieu] = useState([]);
  const getDuLieu=()=>{
      fetch('https://66faa7eaafc569e13a9caa55.mockapi.io/dulieu')
    .then((response) => response.json())
    .then((json) => {
              console.log(json);
              setDulieu(json)
    });
  }
  const postDuLieu = () => {
    fetch('https://66faa7eaafc569e13a9caa55.mockapi.io/dulieu', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: data,
        id: dulieu.length,
      }),
    })
      .then((response) => response.json()) // Đợi phản hồi từ API
      .then(() => {
        navigation.navigate('man1'); // Điều hướng sau khi thêm thành công
      });
  };
  return (
    <View style={{flex:1}}>
      <View style={{flex:0.8}}>
        <Text style={{fontSize: 24,
                      fontWeight: 'bold',}}>Hi Twinkle</Text>
        <Text style={{fontSize: 16,
                      color: 'gray',}}>Have a great day ahead</Text>
      </View>
    <View style={{flex:0.3,alignItems:'center'}}>
        <Text style={{fontSize:25,
                      fontWeight:'bold',
                      }}>ADD YOUR JOB</Text>
    </View>
    <View style={{flex:1}}>
    <View style={{flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  padding: 10,
                  marginBottom: 20,}}>
        <Icon name="list-alt" size={20} color="#000" />
        <TextInput
          style={{marginLeft: 10,
                  fontSize: 16,
                  flex: 1,}}
          placeholder="input your job"
          value={data}
          onChangeText={(text)=>setData(text)}
        />
      </View>
    </View>
    <View style={{flex:1,alignItems:'center'}}>
    <TouchableOpacity style={{position: 'absolute',
                              backgroundColor: '#9095A0',
                              width: '60%',
                              height: 40,
                              borderRadius: 30,
                              justifyContent: 'center',
                              alignItems: 'center',}} 
                      onPress={()=>postDuLieu()
                      }>
        <Text style={{fontSize:19,
                      color:'white'}}>FINSH</Text>
      </TouchableOpacity>
    </View>
    </View> 
  );
}

function Man3Screen ({navigation,route}){
  const {title} =route.params;
  const [data,setData] = useState(title.title);
const updateAPI = (id, updatedData) => {
    fetch(`https://66faa7eaafc569e13a9caa55.mockapi.io/dulieu/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: updatedData }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Error ${response.status}: ${text}`);
          });
        }
        return response.json();
      })
      .then(() => {
        navigation.navigate('man1'); // Điều hướng sau khi cập nhật thành công
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  };


  return(
     <View style={{flex:1}}>
      <View style={{flex:0.8}}>
        <Text style={{fontSize: 24,
                      fontWeight: 'bold',}}>Hi Twinkle</Text>
        <Text style={{fontSize: 16,
                      color: 'gray',}}>Have a great day ahead</Text>
      </View>
    <View style={{flex:0.3,alignItems:'center'}}>
        <Text style={{fontSize:25,
                      fontWeight:'bold',
                      }}>EDIT YOUR JOB</Text>
    </View>
    <View style={{flex:1}}>
    <View style={{flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  padding: 10,
                  marginBottom: 20,}}>
        <Icon name="list-alt" size={20} color="#000" />
        <TextInput
          style={{marginLeft: 10,
                  fontSize: 16,
                  flex: 1,}}
          placeholder="input your job"
          value={data}
          onChangeText={(text)=>setData(text)}
        />
      </View>
    </View>
    <View style={{flex:1,alignItems:'center'}}>
    <TouchableOpacity style={{position: 'absolute',
                              backgroundColor: '#9095A0',
                              width: '60%',
                              height: 40,
                              borderRadius: 30,
                              justifyContent: 'center',
                              alignItems: 'center',}} 
                      onPress={()=>updateAPI(title.id,data)}>
        <Text style={{fontSize:19,
                      color:'white'}}>FINSH</Text>
      </TouchableOpacity>
    </View>
    </View> 
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="man1" component={Man1Screen} />
        <Stack.Screen name="man2" component={Man2Screen} />
        <Stack.Screen name="man3" component={Man3Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
