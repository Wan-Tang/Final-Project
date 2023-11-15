import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import ConcertsInfo from './ConcertsInfo';

export default function HomePage({ navigation }) {

  let concerts=[
    "BTS",
    "Suga",
    "Taylor",
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFF" }}>
      <View style={{ flexDirection: "row", justifyContent: 'center' }}>
        <Heading />
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={concerts}
          renderItem={({ item }) => <ConcertList concertSelect={item} navigation={navigation} />}
          keyExtractor={(item) => item}
        /> 
      </View>
    </View>
  );
}

function ConcertList({ concertSelect, navigation }) {

  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate("Concert", { 'concertSelect': concertSelect });
    }}>
      <View style={{  flexDirection:"row", backgroundColor:"lightgray", margin:10,borderRadius:20 }}>
       

        <Text style={{ fontSize: 22, color: "black", fontWeight: "bold", padding: 20 }}>
          {concertSelect}
        </Text>

        
      </View>
    </TouchableOpacity>
  );
}

function Heading() {
  return (

    <View style={{
      flexDirection:"row",
      alignItems: "center",
      height:120,
      flex:1,
      backgroundColor:"#111111",
      padding:10,
     }}>
      <Image style={{width:100,height:100}}source={require('../assets/AppLogo.jpg')} />

      <View style={{
        width:250,
        height:40,
        backgroundColor:"white",
        borderRadius:8,
        
      }}>
        <Text style={{
         fontSize:18,
         color:"gray",
         margin:8, 
      }}>Search</Text>

      </View>
   
  </View>
  );
}
