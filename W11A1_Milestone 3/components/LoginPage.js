import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function LoginPage({navigation}) {

  return (
 
    <View>

        <Image style={{ width: 400, height: 150, margin: 30, alignSelf:"center"}}
         source={require('../assets/google.jpg')} />

        <TouchableOpacity
        onPress={()=>{ navigation.navigate("Home")}}
        style={{backgroundColor:"white", padding:10, borderRadius:10}}
        >
            <Text style={{fontSize:20, textAlign:"center", color:"black", fontWeight:"bold"}}>Login with Google Account</Text>
        </TouchableOpacity>
    </View>
 
  );
}