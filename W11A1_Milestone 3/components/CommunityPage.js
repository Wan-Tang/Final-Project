import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView, FlatList} from "react-native";


export default function CommunityPage({}) {
//   let concertKey = concertName.toLowerCase();

let users={
   user1: {
    imgURL:"https://image.kpopmap.com/2021/09/bts-online-concert_poster-scaled.jpg",

   },
   user2:{
    imgURL:"https://image.kpopmap.com/2021/09/bts-online-concert_poster-scaled.jpg",
   }

};


  return (

    <ScrollView>

    <View>

        <ProfileList/>

        <View style={{ flex: 1 }}>
        <FlatList
          data={users}
          renderItem={({ item }) => <Profile fan={item} navigation={navigation} />}
          keyExtractor={(item) => item}
        /> 
        </View>

        <View style={{height:200, width:360, backgroundColor:"lightgray", alignSelf:"center", borderRadius:20, margin:30}}>
          <Text style={{margin:30}}>Chat with artist</Text>
        </View>

        <View style={{height:100, width:360, backgroundColor:"lightgray", alignSelf:"center", borderRadius:20, margin:30}}>
          <Text style={{margin:30}}>User post</Text>
        </View>

          <View style={{height:100, width:360, backgroundColor:"lightgray", alignSelf:"center", borderRadius:20, margin:30}}>
          <Text style={{margin:30}}>User post</Text>
        </View>


          <View style={{height:100, width:360, backgroundColor:"lightgray", alignSelf:"center", borderRadius:20, margin:30}}>
          <Text style={{margin:30}}>User post</Text>
        </View>
 
        
    </View>

    </ScrollView>


  );

  function ProfileList(){
    return(

    
        <ScrollView>
          <View style={{flexDirection:"row"}}>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
         </View>
        </ScrollView>

        // <View style={{ flex: 1 }}>
        // <FlatList
        //   data={users}
        //   renderItem={({ item }) => <Profile fan={item} navigation={navigation} />}
        //   keyExtractor={(item) => item}
        // /> 
        // </View>

    );

    
  }

  function Profile({fan}){
 
    return(
        <View style={{height:50, width:50, borderRadius:50, backgroundColor:"gray", margin:15}}>
        </View>
    );
  }
}



  