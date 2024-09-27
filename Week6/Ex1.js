import { Text, SafeAreaView, StyleSheet,View,FlatList,Image,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  const DATA = [
  {
    anh: 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgGD0l3l5bCYMalk17jVouahjfKK29YabBO9g1XUReGzeWD-u3M9x1XlJwPr738OQ6UI9KMRMdkJwEZbh7cK69FnrCPVwEuz0ErO-VcV6BEs1X2xl0lKN~MsL8S4c7MS70agIqZdtCRw55GSMPG93eHBlRobEPWcxLxTmDv2OGE6WNpd4LvbMb82y3Q9q-Aqys7gqCfyaR4EISWqr1RCmDxVgr2dcaYOypGEkAl6hGZgJgegudueLxWF0tjxvdg5NGuPO97Tx1usEbY44o6xesRQC1iNATrz2U0hGRCmDNbM5ZQl8Yl39067yWm~2N339L3gwtho1Hjj79lDnrvzEg__',
    title: 'Ca nấu lẩu, nấu mì mini...',
    nhaCC:'Shop Devang'
  },
  {
    anh: 'https://s3-alpha-sig.figma.com/img/9949/f5a2/338eb97e0752d7d1bd66b35ca4e36b72?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HGSVCRBM-OyR5ykjE0~Jz6EwVb65SzPI9Yzn6LEgzHCOThAvjOOfReEgYW1hiv0MzzYMpYm3m~KURCx0OdveAsj2mhnnOz1C-yuSNAz-JFpaAHvAOiFMy7oil98VudQWNR60YvwOaJBmnaQEepxcUwCC4efWXypp5YldhE8RzeIWUlr4MgrcSADBtEmjxFcQvAMTP18o7MNQenlfK9aSryPmm1tg0kqgDUFXq~VSl5QX1hLx5pVSM4Rja9X7Q22lhpEo832yWox~M6C6Y2j8PN6BEmsvtWQ~TTb0eE0TwKw2FtrsVu6CL5NljJ0WgLvqt394jxGCSH92~zAfYcSUUg__',
    title: '1 KG khô gà bơ tỏi...',
    nhaCC:'Shop LTD Food'
  },
  {
    anh: 'https://s3-alpha-sig.figma.com/img/57ef/f7ae/0ff9ff2dc335c0af424deccb31ed6ba6?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ngVv61KvYLuwfDqXVB~9pWl3vzTyjSk5qqO9BW73xl-zTYkL7d73C1-QF5bw5zQqU0d-MJGpt7iXezrH0sgqWVRXYN-RtR5ELhWh5DzdC8xkvMFJ7ReNyyNeU-xwfF3r-x-tQ-8NkI9nBDeqrKcQUuTwpyJODimt6Eyd-jyp9M9cew92UjtBNmXH85t1zbNX~HPfHTr643qx6KT1IPRtQH-Q1kGOQdFjjML71A9EKqKR3ncFmK-JrPXANbkP9Itn9laAg0qm8oUUqGPuvXWYZbbLSCoG~EeObFOSSzbxl5S3QMqb0Lnuv2TtFWmT7pC-hg2D-4ZoTiCqoqJdAR97vQ__',
    title: 'Xe cần cẩu đa năng',
    nhaCC:'Shop Thế giới đồ chơi'
  },
  {
    anh:'https://s3-alpha-sig.figma.com/img/43af/dbc7/1b8ba3fabe412c960fafda92f944bc99?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1vzvKjBJRPkyPrN~d7yaEUl~XfmwH4SFswQm0XlPNmVE77MOQ~ZVJUf3QJzq6F6elJFtXf6GjQUdjFeYJA0PS4XdfkIfdxcKj5zSt-Isf6JItVjMbZzP0OEuk9Yk4TpYRN-tsrKk6VmT8mQ0I7ywPb2HSoVOrR4X-3SFzhuxc2Rz0egnk~CAZRdKBuE5QqYGdbNNL3-g8WhxZvZGwg99Jj9AcpiiglSgfy~FXZCBGNPSq-QGMTr5ndu1jSscTYmpIqs3rvFrOUsVjI~KIeiquMkBxlMN9hU-m7abQ4Of5c8Pi1VExqwQpqhlBbja~dBq47-Ku~Qrb0p6-nQhPnpQw__',
    title:'Đồ chơi dạng mô hình',
    nhaCC:'Shop Thế giới đồ chơi'
  },
  {
    anh:'https://s3-alpha-sig.figma.com/img/8556/8487/dc854fa829d1b54315dd99bec7b2d68b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XXbqaFt2pvUo5DNAia~PINg5s8BE2xrLD6p~zeMjjD8zvAw-eo~B71pJ1ToMIsHdcSwpmGFetI2FgvbVGZEjZrd~FQ2ePhkWzHloW5G2HE8f3vW6s6TeTo~ZbHIf8ElbQr2H~4-MOutqwmYfz9zPnHKLtnNiJEipmN9KYo1b9rIlK3o3cc16k9wm-FaRWHHPrSzyAkQ-DFwOdOVAfi~gfpvSnr6hkywxrP9De~Oux9EPmlyU9RcvqPE9uO8O6RVgxg02Y4I4PkEowXW0xJWQpeUGDRuBeH~YDZe9BVC~TODvuG3lVMiTVLfP8l9cPArA0YNZVzhtfHnAY1NsCk6pPA__',
    title:'Lãnh đạo đơn giản',
    nhaCC:'Shop Minh long Book'
  },
];
  const Item = ({title}) => (
  <View style={{flex:1,
                flexDirection:'column',
                }}>
     <View style={{flex:1,
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center'
                  }}>           
      <Image source={{uri:title.anh}} style={{ height:80,width:80}}/>
      <View style={{flex:1,
                    flexDirection:'column',
                    alignItems:'center'
                  }}>
        <Text style={{color:'#000000',
                      margin:10

                    }}>{title.title}</Text>
        <Text style={{ color:'#E83030',


                    }}>{title.nhaCC}</Text>
      </View>  
      <TouchableOpacity style={{ backgroundColor:'#F31111', 
                                width:80,
                                height:40
                              }}>
        <Text style={{ textAlign:'center',
                      margin:10,
                      color:'white'
                    }}>
        CHAT</Text>
      </TouchableOpacity>
    </View>
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
      }}
    />
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
           <Text style={{textAlign:'center',
                         fontSize:20,
                         }}>Chat</Text>  
            <Ionicons name="cart" size={30} color="#000"/>
    </View>
    <View style={{flex:2,
                  flexDirection:'column',
                  alignItems:'center'
                }}>
      <Text>Bạn có thể thắc mắc với sản phẩm vừa xem. Đừng ngại chat với Shop!</Text>
      <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item} />}
          keyExtractor={item => item.id}
        />
    </View>
  </View>
  );
}


