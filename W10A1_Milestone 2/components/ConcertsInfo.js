import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

let concertData = {
  bts: {
    title: "PERMISSION TO DANCE ON STAGE",
    description: "PERMISSION TO DANCE ON STAGE is the fourth worldwide concert tour headlined by BTS to promote their Dynamite Trilogy and BE Era, including their first English single album Butter and seventh mini album BE. The tour begins with an online-only concert in October 24, 2021 with four offline and online shows held in LA. A film of the November 28, 2022 concert titled BTS Permission to Dance on Stage - LA has been released on September 8, 2022 on Disney+.",
    imgURL: "https://image.kpopmap.com/2021/09/bts-online-concert_poster-scaled.jpg",
    reivewPoint:6,

  },
  suga: {
    title: "Suga | August D Tour",
    description: "Suga Agust D Tour (stylized as SUGA | Agust D Tour) is the first worldwide concert tour by South Korean rapper Suga, also known as Agust D, in support of his debut studio album, D-Day. The tour began on April 26, 2023, in New York City, and ended on August 6, 2023, in Seoul, South Korea.  ",
    imgURL: "https://i.scdn.co/image/ab6761610000e5eb191d43dca6f2f5a126e43e4b",
    reivewPoint:2,
  },
  taylor: {
    title: "Taylor Swift: The Eras Tour",
    description: "The Eras Tour is the ongoing sixth concert tour by American singer-songwriter Taylor Swift, who described it as a journey through all of her musical eras. An homage to her albums, the Eras Tour is her most expansive tour yet, with 146 dates across five continents. It is her second all-stadium tour after the 2018 Reputation Stadium Tour.",
    imgURL: "https://www.hawtcelebs.com/wp-content/uploads/2019/07/taylor-swift-performs-at-2019-amazon-prime-day-concert-in-new-york-07-10-2019-8.jpg",
    reivewPoint:3,
  },
  
};

export default function ConcertsInfo({concertName}) {
  let concertKey = concertName.toLowerCase();


  return (

    <SafeAreaView>

    <View style={{
            // flexDirection:"row",
            // backgroundColor:"black",
        }}>
        <View style={{
          backgroundColor:"black",

      }}>

        <Image source={{ uri: concertData[concertKey].imgURL}}  style={{ width: 400, height: 300, alignSelf:"center"}} />

        <Text style={{fontSize: 30, fontWeight: 'bold',  alignSelf: 'flex-start', color:"white" , padding:10}}>{concertData[concertKey].title}</Text>

        <Text style={{ fontSize: 24, fontWeight: 'bold',  alignSelf: 'flex-start', color:"white" , padding:10}}>{concertName}</Text>

      </View>  

      <View style={{
          backgroundColor:"pink",
      }}>
      <Text style={{alignSelf:"center", fontSize:36, fontWeight:800}}>{concertData[concertKey].reivewPoint}</Text>
      </View>

      <Text style={{alignSelf:"center", fontSize:18, fontWeight:400, margin:20}}>{concertData[concertKey].description}</Text>

      {/* <TouchableOpacity onPress={()=>{ navigation.navigate("Community")}}
        style={{backgroundColor:"black", padding:10, borderRadius:10}}>
            
        <Text style={{fontSize:20, textAlign:"center", color:"black", fontWeight:"bold"}}>
        Check Out the Concert</Text>

      </TouchableOpacity> */}


    </View>

    </SafeAreaView>


  );


}



  