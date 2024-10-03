import { Text, SafeAreaView, StyleSheet,View,FlatList,Image,TextInput} from 'react-native';
import { useState, useEffect } from "react";
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [data,setData]= useState([]);
  useEffect(() => {
      fetch('https://66faa7eaafc569e13a9caa55.mockapi.io/data')
    .then((response) => response.json())
    .then((json) => {
              console.log(json)
              setData(json);
    });
    },[]);


  const Item = ({title}) => (
     <View style={{flex:1,
                   margin: 10,
                   padding:10
                  }}>           
      <Image source={{uri:title.anh}} style={{ height:80,width:80}}/>
      <Text style={{color:'#000000'}}>{title.title}</Text> 
      <Text style={{color:'red'}}>★ ★ ★ ★ ★ {title.danhgia} </Text>
     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{fontWeight:'bold'}}>{title.tien} </Text>
      <Text style={{color:'red'}}>-{title.discount}</Text>
     </View>
      
    </View>
);
  return (
  <View style={{flex:1,
                }}>
    <View style={{flex:0.2,
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center',
                  backgroundColor:'#1BA9FF'
                }}>  
           <Ionicons name="arrow-back" size={30} color="#000" /> 
           <TextInput style={{height:40,
                              width:'60%',
                              borderRadius:5,
                              backgroundColor:'white',
                              color:'gray'
                              }} placeholder='Dây cáp usb'/>
            <Ionicons name="cart" size={30} color="#000"/>
    </View>
    <View style={{flex:2,
                  flexDirection:'column',
                  alignItems:'center'
                }}>
     
      <FlatList
          data={data}
          numColumns ={2}
          renderItem={({item}) => <Item title={item} />}
          keyExtractor={item => item.id}
        />
    </View>
  </View>
  );
}


