import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function LoadingPage({navigation}) {

  return (
    <View style={{
      backgroundColor:"#111111",
      flex:1,
      padding:50,
      gap:30

    }}>
      <Image style={{ width: 300, height: 300, margin: 30, alignSelf:"center"}}
      source={require('../assets/AppLogo.jpg')} />

      <Text style={{
        fontSize:24,
        color:"white",
        fontWeight:"bold",
        alignSelf:"center"
        }}> A space for fan and artist</Text>

      <TouchableOpacity 
        onPress={()=>{ navigation.navigate("Home")}}
        style={{backgroundColor:"white", padding:10, borderRadius:10}}>
        <Text style={{fontSize:20, textAlign:"center", color:"black", fontWeight:"bold"}}>Check Out the Concert</Text>
      </TouchableOpacity>

    </View>
  );
}
