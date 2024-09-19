import { Text, SafeAreaView, StyleSheet, Image, View,Button,TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function App() {
  
  const [count,setCount] = useState(1);
  const [giamgia,setGG] = useState(0);
  const [tien,setTien] = useState(141800);
  const [tt,setTT] = useState(141800);
  const [tong,setTong]= useState(141800);
  function tinhgiamgia (){
    const a =[10,20,30,40,50];
    const randomIndex = Math.floor(Math.random() * a.length);
    const selectedDiscount =a[randomIndex];
    setGG(selectedDiscount);
    tinhtien(selectedDiscount);
  }
  function tinhtien (discount){
    const updatedTien = tien * ((100 - discount) / 100); 
    setTT(updatedTien); 
    if (count == 1) {
      setTong(updatedTien);
    } else {
      setTong(tong);
    }
    
  }
  function tangSL (){
    setCount(count+1);
    tongtien1(count)
  }
  function giamSL (){
    if (count >0) {
      setCount(count-1);
      tongtien2(count);
    }
    else{
      setCount(0);
      setTong(0);
    }
  }
  function tongtien1 (i){
    setTong(tong+ tt);
  }
  function tongtien2 (i){
    setTong(tong- tt);
  }
  return (
    <View style={{flex:1}}>
      <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
          }}>
          <Image source={{uri:'https://salt.tikicdn.com/cache/750x750/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg.webp'}}
                          style={{width: 104, height: 127}} 
          />
          <View style={{flex:1,
                    marginLeft: 20,
                    alignItems:'stretch'
          }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold',color:'red'}}>
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text style={{ fontSize: 10, fontWeight: 'bold',marginTop:10}}>
           Cung cấp bởi Tiki Trading
          </Text>
          <Text style={{ fontSize: 13, fontWeight: 'bold',marginTop:10,color:'red'}}>
          {tt} đ
          </Text>
          <Text style={{ fontSize: 12,textDecorationLine: 'line-through',color: '#999',}}>
          {tien} đ
          </Text>
            <View style={{
                      flexDirection:'row',
                      justifyContent:'space-between'
            }}>
              <View style={{flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop:10
              }}>
                          <Button title='-' onPress={giamSL}/>
                          <Text style={{textAlign:'center', 
                          fontSize: 10, fontWeight: 'bold', 
                          marginHorizontal: 10,
                          margin:10}}  
                          >
                          {count}
                          </Text>
                          <Button  title='+' onPress={tangSL}/>
                </View>
                  <TouchableOpacity>
                  <Text style={{textAlign:'center', fontSize: 12,color: '#1e88e5',margin:15}}>Mua sau</Text>
                  </TouchableOpacity>
              </View>
            </View>
      </View>
      <View style={{flex:1}}>
      <View style={{padding:20,
                   justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 30, 
      }}>
        <Text style={{fontSize:15,fontWeight:'bold'}}>
         Mã giảm giá
        </Text>
           <Button  title='Áp dụng' onPress={tinhgiamgia}/>
      </View>
       <View style={{padding:20,
                   justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 30, 
      }}>
        <Text style={{fontSize:15,fontWeight:'bold'}}>
         Tạm tính
        </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold',marginTop:10,color:'red'}}>{tong} đ</Text>
      </View>
       <View style={{padding:20,
                   justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 30, 
      }}>
        <Text style={{fontSize:15,fontWeight:'bold'}}>
         Thành tiền
        </Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold',marginTop:10,color:'red'}}>{tong} đ</Text>
      </View>
      </View>
      <View style={{flex:1,
      justifyContent:'center',
      alignItems:'center'}}>
        <Button style={{height:40,with:'90%'}} title='TIẾN HÀNH ĐẶT HÀNG'/>
      </View>
    </View>
  );
}
