import React, { useState } from 'react';
import { View, Text,Image,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation,route}) {

  return (
    <View style={{ flex: 1}}>
      <View style={{flex: 1,
                    flexDirection: 'column',
                    alignContent:'center'}}>
        <Image source={{uri: route.params?.anh}}
          style={{height: 220,
                  width: 180,
                  flexDirection: 'column',
                  alignItems:'center'}}
        />
        <Text style={{ textAlign: 'center',
                       fontSize: 13,
                       margin: 10 }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={{flexDirection: 'row', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: 35 }}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWBqbGsxZoOdQct2dowOggpYn6p0jIesvvg&s',
            }}
            style={{width: 80,
                    height: 20 }}
          />
          <Text style={{ color: 'red' }}>(Xem đánh giá) </Text>
        </View>
        <View style={{flexDirection:'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: 30,
                      margin: 10 }}>
          <Text style={{fontSize: 18,
                        fontWeight: 'bold'}}>
                        1.790.000 đ</Text>
          <Text
            style={{
              textDecorationLine: 'line-through',
              color: 'red',
              fontSize: 13,
              fontWeight: 'bold',
            }}
          >
            1.790.000 đ
          </Text>
        </View>
        <View style={{flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: 30,
                      margin: 10 }}>
          <Text>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        </View>
        <View style={{flex:1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent:'center'}}>
          <TouchableOpacity style={{ width: '90%', 
                                     height: 30,
                                     backgroundColor: 'white',
                                     borderRadius:10,
                                     borderWidth:1,
                                     borderColor:'balck',
                                     flexDirection: 'row',
                                     alignItems: 'center'}} 
                                     onPress={()=>navigation.navigate('chonmau')} >
          <Text style={{color: 'balck',
                        textAlign: 'center',
                        margin: 10,
                        fontWeight:'bold'}}>
                        4 MÀU-CHỌN MÀU                                </Text>
        <Icon name="angle-right" size={20}/>
        </TouchableOpacity>
        </View>
        <View style={{flex:1, 
                      flexDirection:'row',
                      alignItems: 'center',
                      justifyContent:'center',
                      margin:30}}>
         <TouchableOpacity style={{ width: '100%',
                                    height: 40, 
                                    backgroundColor: 'red',
                                     borderRadius:10}}>
          <Text style={{color: 'white',
                        textAlign: 'center',
                        margin: 10 ,
                        fontWeight:'bold',
                        fontSize:15}}>
                        CHỌN MUA</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>  
  );
}

function ChonMauScreen({ navigation,route}) {
  const [selectedColor, setSelectedColor] = useState(null); // Trạng thái lưu màu đã chọn
  const [imageUrl,setImageUrl] = useState('https://s3-alpha-sig.figma.com/img/fae2/fb74/dfc5e3d8ad7457739c07b2ee59e42744?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bWRZ~YtrBuLiBI8gQGFfdPiLGihgjfsMQetW1RgxxWX8YIucyxXvnO8AC773C04bo~8taNUfm8K530XFpasyPrvwqyeqNeZkxN5U5KABYhLcRIxnFUUnLnd5M6X932V5VEAYSrJgLeUWcxpoVLsH8G3nAmoS3xfCZrr5LNZKd1El9L5HypPoHNMjwQy~PzHcVh94Skwmg7ZTtZlaUDVA60VCvbeY8YNYa6KumgYMOhEyjaviihhdrKhMPOQGSBD18dluOxt9bITAoyxuAGh3xcsMzCuLlVpAE5v02m2Zb9-xFsLOYA7UxZdGe8e4x61liBoFH567TgDZYYMQXDx0YQ__');
  const a1 = {
              mau: 'trắng',
              anh: 'https://s3-alpha-sig.figma.com/img/f755/755a/f661a135fd86be173160b07734d5fc12?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XnNw9IPn8Omt74GnndWD8Sa~KDNn57QBpAdj2FXBSohlKw2bZEtTAk8DKUbRVXwUVDET2aMPlJZ05xSwQCB4BliUHjJTFVuZGegeSgYdH4P6~zlHH0M1MBdiC00e~~vaNILCrxRwPBIDUwsn7zC4s8mjfK5j7DVw2HuGPiTXqa5Seea~CIM9k1GZxsRZFvuHzCJqSyNfsaV7DPyQp1qyeFyuf1~RgoRiJuKWV4LHHnW-PkPbVoqH85lGbwwv~KRMdZl9MIpnl5RapSFs3SyjjTRA4uG4yk1cwlU~tVpmUWW4PtNYs6F~6D2Flraz5vujAAFilDzlYClvD1GgkLfuCQ__'};
  const a2 = {
              mau: 'đỏ',
              anh: 'https://s3-alpha-sig.figma.com/img/cc48/9fb7/38f608fb6fb887912e810af3b91e12c1?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IHBAnpbnKD~DSwKyDj0wckScZVz26Ubl6BTVQJgoh0ezYPZzrl90ycOCpcV-0hoZ~9~42tRlmzDWOu~3IQVK5rXMWsLKbUwaukMIv0aUn-Migl4pLbEE2Kd-z5DvLbR8n7LUzUeaXCNyT9d9DXC2J~B4Kag3ZvDF~FVf2Q1VzSN0-y3uQbdSKRsL9GPVzjVj1o5W1AHNl5Bg8jML3egDapqqy9r0CKhHduyBGK9bWl8Q3VxC0KmHayTy3ANvGXiVqXfTYK48RW3lu2p2TGC3XP0uZe~mwwN-9aEm9UmPsblAFRNOyGBVjQRaOzaxQ3NnZaC2LPhAyUsliorIk~LBdQ__'};
  const a3 = {
              mau: 'đen',
              anh: 'https://s3-alpha-sig.figma.com/img/542e/5500/dae29e1a09612c48758646292d3a22a2?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NFo6BstNWom3-hIwwrrzZZZaJlVrXGgNEhk0w4HaavntM1wrCtW3tahsOaFRV4ZE2krWdCBuQShkGQ28u~WTULDaqnD70IiJ4SeTZW6k40KNhk8Wo5v~pxz8B~qbaFX9nVsDtWQUsczAh2isC6LxbvR5TGmfpRL2ky9QHOlRxcu5XTsvPgjzBssp7OEhLTlW~zgnIV8BU3XqKW-ahQLy6iAKdPlfvTrmSOVsHowtiAlmRYqCPBU8x3DcP3hASSKYWlU2cCysonQ5AO~LGbeGjfk3A-e621dLVoLoY97lYhapBVcEVl7b7IHWNdfh6o4kTVGF31CTIAikyWAno8DXMQ__'};
  const a4 = {
              mau: 'xanh',
              anh: 'https://s3-alpha-sig.figma.com/img/fae2/fb74/dfc5e3d8ad7457739c07b2ee59e42744?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bWRZ~YtrBuLiBI8gQGFfdPiLGihgjfsMQetW1RgxxWX8YIucyxXvnO8AC773C04bo~8taNUfm8K530XFpasyPrvwqyeqNeZkxN5U5KABYhLcRIxnFUUnLnd5M6X932V5VEAYSrJgLeUWcxpoVLsH8G3nAmoS3xfCZrr5LNZKd1El9L5HypPoHNMjwQy~PzHcVh94Skwmg7ZTtZlaUDVA60VCvbeY8YNYa6KumgYMOhEyjaviihhdrKhMPOQGSBD18dluOxt9bITAoyxuAGh3xcsMzCuLlVpAE5v02m2Zb9-xFsLOYA7UxZdGe8e4x61liBoFH567TgDZYYMQXDx0YQ__'};

  function handleColorSelection(color) {
    setSelectedColor(color); 
    if (color===a1.mau){
        setImageUrl(a1.anh)
     } else if (color===a2.mau){
        setImageUrl(a2.anh)
     } else if (color===a3.mau){
        setImageUrl(a3.anh)
     } else {
       setImageUrl(a4.anh)
     }
  }


  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex:0.6, flexDirection: 'row',margin:30}}>
        <Image
          source={{uri: imageUrl}}
          style={{ height: 120, width: 100, alignItems: 'center' }}
        />
        <View style={{ flexDirection: 'column' }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 10,
              margin: 10,
            }}
          >
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
            <Text>Màu:</Text>
            <Text>{selectedColor ? selectedColor : 'Chưa chọn'}</Text>
          </View>

          <Text style={{ paddingHorizontal: 10 }}>Cung cấp bởi Tiki Trading</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', paddingHorizontal: 10 }}>1.790.000 đ</Text>
        </View>
      </View>
      <View style={{ flex:2, flexDirection: 'column', alignItems: 'center', backgroundColor: 'gray', justifyContent: 'center' }}>
        <View style={{ justifyContent: 'start' }}>
          <Text>Chọn một màu bên dưới:</Text>
        </View>
        <TouchableOpacity
          style={{ width: 50, height: 50, backgroundColor: 'white', margin: 10 }}
          onPress={() => handleColorSelection(a1.mau)}
        />
        <TouchableOpacity
          style={{ width: 50, height: 50, backgroundColor: 'red', margin: 10 }}
          onPress={() => handleColorSelection(a2.mau)}
        />
        <TouchableOpacity
          style={{ width: 50, height: 50, backgroundColor: 'black', margin: 10 }}
          onPress={() => handleColorSelection(a3.mau)}
        />
        <TouchableOpacity
          style={{ width: 50, height: 50, backgroundColor: 'blue', margin: 10 }}
          onPress={() => handleColorSelection(a4.mau)}
        />
        <TouchableOpacity style={{ width: '95%',
                                    height: 40, 
                                    backgroundColor: 'red',
                                     borderRadius:10}}
                                     onPress={()=>{navigation.navigate({name:'Home',
                                                                        params: { anh:imageUrl}})}}>
          <Text style={{color: 'white',
                        textAlign: 'center',
                        margin: 10 ,
                        fontWeight:'bold',
                        fontSize:15}}>
                        CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Product">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="chonmau" component={ChonMauScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
