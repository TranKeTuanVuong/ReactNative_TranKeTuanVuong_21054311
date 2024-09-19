import React from 'react';
import {Text, View, Button,TextInput,CheckBox} from 'react-native';
import {useState} from 'react';


const YourApp = () => {
  const [isSelected1,setSelection1] = useState(false);
  const [isSelected2,setSelection2] = useState(false);
  const [isSelected3,setSelection3] = useState(false);
  const [isSelected4,setSelection4] = useState(false);
  const [inputValue,setinputValue] = useState('');
  const [number,setNumberText] = useState(0);
   const demtu = (text) => {
    setinputValue(text);
    setNumberText(text.length);
  };
  const xuly = (isSelected1,isSelected2,isSelected3,isSelected4,length)=>{
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}:\"<>?|[];',./";
    let pass ='';
    let password='';
    if (isSelected1){
        pass +=lowerCase;
    }
    if (isSelected2){
      pass +=upperCase;
    }
    if (isSelected3){
      pass +=numbers;
    }
    if (isSelected4){
      pass += symbols;
    }
    if (length ===0) {
      return password+'NaN'
    }
    for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * length);
    password += pass[randomIndex];
    }

  return password;
  };
  const taomatkhau =()=>{
    const mk = xuly(isSelected1,isSelected2,isSelected3,isSelected4,number);
    setinputValue(mk);
  };
  return (
  <View style={{flex:1,backgroundColor:'blue'}}>
    <View style={{flex:1,
                  justifyContent:'center'
    }}>
      <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',color:'white'}}>PASSWORD GENERATOR</Text>
    </View>
    <View style={{flex:1,
                  justifyContent:'space-around',
                  alignItems:'center'
    }}>
      <TextInput style={{height:50,
                        width:'80%',
                        backgroundColor:'gray',
                        borderColor:'gray',
                        borderRadius:5
                        }} 
                        value={inputValue}           
                   >
      </TextInput>
    </View>
    <View style={{flex: 1,
                   justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 30, 
                  }}>
        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold' }}>
            Password length
        </Text>
        <TextInput style={{
                        height: 40,
                        width: '38%',
                        backgroundColor: 'gray',
                        borderColor: 'gray',
                        borderRadius: 5,
                        textAlign: 'center'}}
                        value={number.toString()}
                        onChangeText = {(text)=> setNumberText(parseInt(text)||0)}
              >
        </TextInput>
    </View>
      <View style={{flex: 1,
                   justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 30, 
      }}>
        <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>
          Include lower case letters
        </Text>
        <CheckBox value={isSelected1} onValueChange={setSelection1} />
      </View>
      <View style={{flex: 1,
                   justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 30, 
      }}>
        <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>
          Include upcase letters</Text>
        <CheckBox value={isSelected2} onValueChange={setSelection2} />
      </View>
      <View style={{flex: 1,
                   justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 30, 
      }}>
        <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>
          Include number</Text>
        <CheckBox value={isSelected3} onValueChange={setSelection3} />
      </View>
      <View style={{flex: 1,
                   justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 30, 
      }}>
        <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>
          Include special symbol</Text>
        <CheckBox value={isSelected4} onValueChange={setSelection4} />
      </View>
    <View style={{flex:1,
                  justifyContent:'center',
                  alignItems:'center'
        
    }}>
      <Button  style={{height:50,with:'80%'}} title='GENERATE PASSWORD' onPress={taomatkhau} />
    </View>
  </View>
  );
};

export default YourApp;