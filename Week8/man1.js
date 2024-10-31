import { Text, SafeAreaView, StyleSheet,View,Image,TouchableOpacity} from'react-native';
import { Card } from 'react-native-paper';


export default function Man1 ({navigation}){
  return(
    <View style={{flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#FFFF',}}>
      <View style={{flex:0.5,
                    alignItems:'center',
                    justifyContent:'center',
                    width:351,
                    height:87}}>
        <Text style={{fontSize: 16,
                      fontWeight: '400',
                      marginBottom: 20,
                      textAlign: 'center',
                      color: '#333',}}>
                      A premium online store for sporter and their stylish choice</Text>
      </View>
      <View style={{width: 250,
                    height: 250,
                    borderRadius: 20,
                    backgroundColor: 'gray',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 20,}}>
        <Image source={{uri:'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffBKVxcHy15mVMq7OEP3o5hFHCJWxypoIz0H2ESLy-4mPStipA-AYPsiCTlQ4yOvkI6l2ZE2ZmhSRODPwqreye3Xt1rTP5UI-xRnCrcDzf92w1UkN2AJrbv4N8em6Ugi~bSArHE6icqM7XCIbkuLofZJX~lI6IgkscUqGAkUGYBZTQgAaMU~sM8W2WLGsxdklUbkVmTIODLQDDZtAOoKaPhULcxg64F3vf2-houa-vw2XoIqWI5xBcL26x9xJiLD1ylWlmK~0OAwlboimHTt599QF5H0HpYzln9WMKcDqlntVTZQegSIZm-xBZa6-Jsdwi4kpOh4KK~35aZRM3jhag__'}} style={{width: '100%',height: '100%',resizeMode: 'contain',}}/>
      </View>
      <View style={{flex:1,
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'space-around'}}>
        <Text style={{fontSize:20,
                      fontWeight:'bold'}} >POWER BIKE SHOP</Text>
        <TouchableOpacity style={{backgroundColor: '#FF4C4C',
                                  paddingVertical: 12,
                                  paddingHorizontal: 30,
                                  borderRadius: 10,}} onPress={()=>{navigation.navigate('Man2')}}>
        <Text style={{textAlign:'center',
                      margin:10,
                      color:'white',
                      fontSize:19,
                      fontWeight:'bold'}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}