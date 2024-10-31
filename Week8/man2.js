import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Man2({ navigation,route}) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
 
  const getDuLieu = () => {
    fetch('https://66faa7eaafc569e13a9caa55.mockapi.io/data')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    getDuLieu();
    // Cập nhật lại danh sách khi quay lại màn hình này
    const unsubscribe = navigation.addListener('focus', () => {
      getDuLieu();
    });
    return unsubscribe;
  },[navigation]);
  const filterData = (type) => {
  if (type === 'ALL') {
    setFilteredData(data); // Đặt lại toàn bộ dữ liệu
  } else {
    // Lọc dữ liệu theo loại
    const filtered = data.filter(item => item.type === type);
    setFilteredData(filtered); // Cập nhật dữ liệu đã lọc
  }
};

  const Item = ({ title }) => (
    <TouchableOpacity style={{ width: '50%',padding:5}} onPress={() => {navigation.navigate('Man3',{ product:title })}}>
      <View style={{flex: 2,
                    flexDirection: 'column',
                    backgroundColor: '#FFFFE0',
                    alignItems: 'center',
                    margin: 5 }}>
         <Icon name={title.liked ? 'heart' : 'heart-o'} size={15} color="red"  
               style={{position: 'absolute',
                       top: 10,
                       left: 10}}/>
        <Image source={{ uri: title.image }} 
               style={{height: 80,
                       width: 100,
                       resizeMode: 'contain',
                       marginBottom: 10,}} />
        <Text style={{fontSize: 16,
                      textAlign: 'center',
                      marginBottom: 5,
                      color: '#333',}}>{title.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <Icon name="dollar" size={16} color="green" />
          <Text style={{marginLeft: 5,
                        fontSize: 16,
                        fontWeight: 'bold',}}>{title.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: '#FFF' }}>
      <View style={{flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10,}}>
        <Text style={{fontSize: 20,
                      fontWeight: 'bold',
                      color: 'red', }}>
          The world’s Best Bike
        </Text>
      </View>
      <View style={{flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 15,}}>
        {['ALL', 'Roadbike', 'Mountain'].map(type => (
          <TouchableOpacity key={type} style={{borderWidth: 1,
                                               borderColor: 'red',
                                               padding: 8,
                                               borderRadius: 20,}} onPress={() => filterData(type)}>
            <Text style={{color: 'red',
                          fontWeight: 'bold',}}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredData}
        numColumns={2}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item.id.toString()}
       // contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
