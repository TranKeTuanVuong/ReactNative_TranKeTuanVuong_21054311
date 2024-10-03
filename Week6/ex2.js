import { Text, SafeAreaView, StyleSheet,View,FlatList,Image,TextInput} from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  const DATA = [
{
    "anh":"https://s3-alpha-sig.figma.com/img/4400/39b8/47a25e463563954abcba9a885fd06c1a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=neVdCLXTvXQBd-6Y8cl3DWh951yz3GE1pQKliANsNAQcfo2f3SeWwZcfx3H3JMVIRXaEgoTIfsZ4oVpEJswj2-qniozbdbWWSROegHqsIGwLILgcUA-7DwJ8yTwExRhquMUdOyswqtNMBFGjR2GL9BSaGPlroYJy8ENG2MU-wjXMfgVJk6w7scAoo6fwUr4aLbwPwUno4UcXowemTq~m5yliEzvkE58aZgAMSoYfOC1Lymrol3i8Aq8Ve2EOqPBSU4k~Htqaa3ZdvDSD1MHpxEM2Ir-pbP8hS75tG56456W73SK-en~CR94zLwyPZJG6sls7MHJt2~PRJwVmXzwMiA__",
    "title":"Cáp chuyển từ Cổng USB sang PS2...",
    "danhgia":"(15)",
    "tien":"69.000 đ",
    "discount": '39%'
},
{
    "anh":"https://s3-alpha-sig.figma.com/img/e7a9/6613/19b8bd78c56e1818b8e5c5cac103b98a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jrrExTgi2WZuNP146WxG8rsXRrNMoWWFbnvx9vuoWv3D4Nh5VMx6md2e38KXAUf74XXQAPJk4w7K3c25feEuUSTehI-Uo5EY3Pp9A4WbhQKFUjFde~LhPMAoicllWUul3gf8REXojMPmuCE6xkFqp-mirONQLHwt1ChlaXG3-Sycj0l8oMfHvyKPgXMupLBso59Y4E~IRJF2mnvhiFkgyXW~wbb84DPLT~bwRQ3xCbxzeGHBM3e8Nabhhj7fjXfKQrA7NBAlihTPOOe6EEnjTM0WHYEo~tvlckBeMdpMCW7VDNJhNrkyb6Z0DX1Q6koAHEmKEumUFJ7kutYa6L-Ksg__",
    "title":"Cáp chuyển từ Cổng USB sang PS2...",
    "danhgia":"(15)",
    "tien":"69.000 đ",
    "discount": '39%'
},
{
    "anh":"https://s3-alpha-sig.figma.com/img/affd/f93f/aa4f39be8f379f8535c243245368ffad?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K4uKo1F4NUKmNb2djNBg0BmBEeHs-d~41X0JqyCFHc3wDvVvKZuw9zc2vtU2rUp~lJZnGUFhsNsETC0PnH4aTpKk97bxBAW2xr6QghGnHK1ldVEKFSapLeKJ2zImEJMyZEPM0neIHYaZOO6gWvIwa5m2SlkC3K1Ec7~D8oYJhzFn3vY7LKiwE2K2fZrcG8-w25ZUFIrs8Gup9etBOJVVEBckxPrXnVsjn1agHHtPr14uCjY1yukwAy171S~VsslSNh8TrBvPjz7k2ZTBSHIH~6kBH6z7tmCHl686bb4Q6pqjTaR-pWeJndsRMcJpu2XcUENc4l4mZiSemVbI11vLSg__",
    "title":"Cáp chuyển từ Cổng USB sang PS2...",
    "danhgia":"(15)",
    "tien":"69.000 đ",
    "discount": '39%'

},
{
    "anh":"https://s3-alpha-sig.figma.com/img/4400/39b8/47a25e463563954abcba9a885fd06c1a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=neVdCLXTvXQBd-6Y8cl3DWh951yz3GE1pQKliANsNAQcfo2f3SeWwZcfx3H3JMVIRXaEgoTIfsZ4oVpEJswj2-qniozbdbWWSROegHqsIGwLILgcUA-7DwJ8yTwExRhquMUdOyswqtNMBFGjR2GL9BSaGPlroYJy8ENG2MU-wjXMfgVJk6w7scAoo6fwUr4aLbwPwUno4UcXowemTq~m5yliEzvkE58aZgAMSoYfOC1Lymrol3i8Aq8Ve2EOqPBSU4k~Htqaa3ZdvDSD1MHpxEM2Ir-pbP8hS75tG56456W73SK-en~CR94zLwyPZJG6sls7MHJt2~PRJwVmXzwMiA__",
    "title":"Cáp chuyển từ Cổng USB sang PS2...",
    "danhgia":"(15)",
    "tien":"69.000 đ",
    "discount": '39%'
},
{
    "anh":"https://s3-alpha-sig.figma.com/img/e7a9/6613/19b8bd78c56e1818b8e5c5cac103b98a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jrrExTgi2WZuNP146WxG8rsXRrNMoWWFbnvx9vuoWv3D4Nh5VMx6md2e38KXAUf74XXQAPJk4w7K3c25feEuUSTehI-Uo5EY3Pp9A4WbhQKFUjFde~LhPMAoicllWUul3gf8REXojMPmuCE6xkFqp-mirONQLHwt1ChlaXG3-Sycj0l8oMfHvyKPgXMupLBso59Y4E~IRJF2mnvhiFkgyXW~wbb84DPLT~bwRQ3xCbxzeGHBM3e8Nabhhj7fjXfKQrA7NBAlihTPOOe6EEnjTM0WHYEo~tvlckBeMdpMCW7VDNJhNrkyb6Z0DX1Q6koAHEmKEumUFJ7kutYa6L-Ksg__",
    "title":"Cáp chuyển từ Cổng USB sang PS2...",
    "danhgia":"(15)",
    "tien":"69.000 đ",
    "discount": '39%'
},
{
    "anh":"https://s3-alpha-sig.figma.com/img/affd/f93f/aa4f39be8f379f8535c243245368ffad?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K4uKo1F4NUKmNb2djNBg0BmBEeHs-d~41X0JqyCFHc3wDvVvKZuw9zc2vtU2rUp~lJZnGUFhsNsETC0PnH4aTpKk97bxBAW2xr6QghGnHK1ldVEKFSapLeKJ2zImEJMyZEPM0neIHYaZOO6gWvIwa5m2SlkC3K1Ec7~D8oYJhzFn3vY7LKiwE2K2fZrcG8-w25ZUFIrs8Gup9etBOJVVEBckxPrXnVsjn1agHHtPr14uCjY1yukwAy171S~VsslSNh8TrBvPjz7k2ZTBSHIH~6kBH6z7tmCHl686bb4Q6pqjTaR-pWeJndsRMcJpu2XcUENc4l4mZiSemVbI11vLSg__",
    "title":"Cáp chuyển từ Cổng USB sang PS2...",
    "danhgia":"(15)",
    "tien":"69.000 đ",
    "discount": '39%'
},
{
    "anh":"https://s3-alpha-sig.figma.com/img/4400/39b8/47a25e463563954abcba9a885fd06c1a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=neVdCLXTvXQBd-6Y8cl3DWh951yz3GE1pQKliANsNAQcfo2f3SeWwZcfx3H3JMVIRXaEgoTIfsZ4oVpEJswj2-qniozbdbWWSROegHqsIGwLILgcUA-7DwJ8yTwExRhquMUdOyswqtNMBFGjR2GL9BSaGPlroYJy8ENG2MU-wjXMfgVJk6w7scAoo6fwUr4aLbwPwUno4UcXowemTq~m5yliEzvkE58aZgAMSoYfOC1Lymrol3i8Aq8Ve2EOqPBSU4k~Htqaa3ZdvDSD1MHpxEM2Ir-pbP8hS75tG56456W73SK-en~CR94zLwyPZJG6sls7MHJt2~PRJwVmXzwMiA__",
    "title":"Cáp chuyển từ Cổng USB sang PS2...",
    "danhgia":"(15)",
    "tien":"69.000 đ",
    "discount": '39%'
},
{
    "anh":"https://s3-alpha-sig.figma.com/img/e7a9/6613/19b8bd78c56e1818b8e5c5cac103b98a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jrrExTgi2WZuNP146WxG8rsXRrNMoWWFbnvx9vuoWv3D4Nh5VMx6md2e38KXAUf74XXQAPJk4w7K3c25feEuUSTehI-Uo5EY3Pp9A4WbhQKFUjFde~LhPMAoicllWUul3gf8REXojMPmuCE6xkFqp-mirONQLHwt1ChlaXG3-Sycj0l8oMfHvyKPgXMupLBso59Y4E~IRJF2mnvhiFkgyXW~wbb84DPLT~bwRQ3xCbxzeGHBM3e8Nabhhj7fjXfKQrA7NBAlihTPOOe6EEnjTM0WHYEo~tvlckBeMdpMCW7VDNJhNrkyb6Z0DX1Q6koAHEmKEumUFJ7kutYa6L-Ksg__",
    "title":"Cáp chuyển từ Cổng USB sang PS2...",
    "danhgia":"(15)",
    "tien":"69.000 đ",
    "discount": '39%'
},
{
    "anh":"https://s3-alpha-sig.figma.com/img/affd/f93f/aa4f39be8f379f8535c243245368ffad?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K4uKo1F4NUKmNb2djNBg0BmBEeHs-d~41X0JqyCFHc3wDvVvKZuw9zc2vtU2rUp~lJZnGUFhsNsETC0PnH4aTpKk97bxBAW2xr6QghGnHK1ldVEKFSapLeKJ2zImEJMyZEPM0neIHYaZOO6gWvIwa5m2SlkC3K1Ec7~D8oYJhzFn3vY7LKiwE2K2fZrcG8-w25ZUFIrs8Gup9etBOJVVEBckxPrXnVsjn1agHHtPr14uCjY1yukwAy171S~VsslSNh8TrBvPjz7k2ZTBSHIH~6kBH6z7tmCHl686bb4Q6pqjTaR-pWeJndsRMcJpu2XcUENc4l4mZiSemVbI11vLSg__",
    "title":"Cáp chuyển từ Cổng USB sang PS2...",
    "danhgia":"(15)",
    "tien":"69.000 đ",
    "discount": '39%'
},
{
    "anh":"https://s3-alpha-sig.figma.com/img/affd/f93f/aa4f39be8f379f8535c243245368ffad?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K4uKo1F4NUKmNb2djNBg0BmBEeHs-d~41X0JqyCFHc3wDvVvKZuw9zc2vtU2rUp~lJZnGUFhsNsETC0PnH4aTpKk97bxBAW2xr6QghGnHK1ldVEKFSapLeKJ2zImEJMyZEPM0neIHYaZOO6gWvIwa5m2SlkC3K1Ec7~D8oYJhzFn3vY7LKiwE2K2fZrcG8-w25ZUFIrs8Gup9etBOJVVEBckxPrXnVsjn1agHHtPr14uCjY1yukwAy171S~VsslSNh8TrBvPjz7k2ZTBSHIH~6kBH6z7tmCHl686bb4Q6pqjTaR-pWeJndsRMcJpu2XcUENc4l4mZiSemVbI11vLSg__",
    "title":"Cáp chuyển từ Cổng USB sang PS2...",
    "danhgia":"(15)",
    "tien":"69.000 đ",
    "discount": '39%'
}
];
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
          data={DATA}
          numColumns ={2}
          renderItem={({item}) => <Item title={item} />}
          keyExtractor={item => item.id}
        />
    </View>
  </View>
  );
}


