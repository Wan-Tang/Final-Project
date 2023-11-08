import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useState, useContext } from "react";
import StarRating from 'react-native-star-rating-widget';
import { CommentContext } from "./Comment";

let concertData = {
  bts: {
    title: "PERMISSION TO DANCE ON STAGE",
    description: "PERMISSION TO DANCE ON STAGE is the fourth worldwide concert tour headlined by BTS to promote their Dynamite Trilogy and BE Era, including their first English single album Butter and seventh mini album BE. The tour begins with an online-only concert in October 24, 2021 with four offline and online shows held in LA. A film of the November 28, 2022 concert titled BTS Permission to Dance on Stage - LA has been released on September 8, 2022 on Disney+.",
    imgURL: "https://image.kpopmap.com/2021/09/bts-online-concert_poster-scaled.jpg",
    reivewPoint: 4.8,

  },
  suga: {
    title: "Suga | August D Tour",
    description: "Suga Agust D Tour (stylized as SUGA | Agust D Tour) is the first worldwide concert tour by South Korean rapper Suga, also known as Agust D, in support of his debut studio album, D-Day. The tour began on April 26, 2023, in New York City, and ended on August 6, 2023, in Seoul, South Korea.  ",
    imgURL: "https://i.scdn.co/image/ab6761610000e5eb191d43dca6f2f5a126e43e4b",
    reivewPoint: 4.6,
  },
  taylor: {
    title: "Taylor Swift: The Eras Tour",
    description: "The Eras Tour is the ongoing sixth concert tour by American singer-songwriter Taylor Swift, who described it as a journey through all of her musical eras. An homage to her albums, the Eras Tour is her most expansive tour yet, with 146 dates across five continents. It is her second all-stadium tour after the 2018 Reputation Stadium Tour.",
    imgURL: "https://www.hawtcelebs.com/wp-content/uploads/2019/07/taylor-swift-performs-at-2019-amazon-prime-day-concert-in-new-york-07-10-2019-8.jpg",
    reivewPoint: 4.7,
  },

};

const Rating = () => {
  const [rating, setRating] = useState(0);
  return (
    <StarRating
      rating={rating}
      onChange={setRating}
    />
  );
};

export default function ConcertsInfo({ concertName, navigation }) {
  let concertKey = concertName.toLowerCase();


  return (

    <ScrollView>

      <View style={{
        backgroundColor: "white",
        gap: 5
      }}>
        <View style={{
          backgroundColor: "black",

        }}>

          <Image source={{ uri: concertData[concertKey].imgURL }} style={{ width: 400, height: 300, alignSelf: "center" }} />

          <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'flex-start', color: "white", padding: 10 }}>{concertData[concertKey].title}</Text>

          <Text style={{ fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-start', color: "white", padding: 10 }}>{concertName}</Text>

        </View>

        <View style={{
          backgroundColor: "white",
          flexDirection: "row",
          gap: 180
        }}>
          <Text style={{ alignSelf: "stretch", fontSize: 30, fontWeight: 800, padding: 5 }}> ⭐ {concertData[concertKey].reivewPoint}</Text>

          <TouchableOpacity onPress={() => { navigation.navigate("Community") }}
            style={{ width: 100, height: 30, backgroundColor: "blue", margin: 10, borderRadius: 10, alignSelf: "flex-end" }}>

            <Text style={{ fontSize: 18, textAlign: "center", color: "white", fontWeight: "bold", alignSelf: "center", margin: 1 }}>
              + Join </Text>

          </TouchableOpacity>

        </View>

        <View style={{ width: 500, height: 1, backgroundColor: "lightgray", alignSelf: "center" }}></View>

        <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: 400, margin: 20 }}>{concertData[concertKey].description}</Text>

        <ReviewComment />

        <ReviewList/>

      </View>

    </ScrollView>


  );
}

function ReviewComment() {

  const { comment, setComment } = useContext(CommentContext);

  return (
    <View style={{ width: 380, height: 200, padding: 10, borderColor: "lightgray", borderWidth: 1, alignSelf: "center", borderRadius: 10, margin: 20 }}>

      <View>

        <Text style={{
          fontSize: 16,
          color: "black",
          fontWeight: "500",
          padding: 5
        }}>Rating</Text>

        <Rating style={{ alignSelf: "center" }} />

        <Text style={{
          fontSize: 16,
          color: "black",
          fontWeight: "500",
          padding: 5
        }}>Your Review</Text>

        <TextInput
          placeholder="Your review"
          value={String(comment)}
          onChangeText={text => setComment(Number(text))}
          style={{ height:80, borderColor: "white", borderWidth: 2, color: "white", fontSize: 18, borderRadius: 8, padding: 8, backgroundColor:"lightgray" }}
        />
      </View>

    </View>
  )
}

function ReviewList(){


  return(

    <View style={{
      height:600,
      backgroundColor:"fff",
    }}>
      <View style={{
        height:200,
        width:380,
        borderColor:"lightgray",
        borderWidth:1,
        alignSelf:"center",
        borderRadius:10,
      }}>
        <View style={{
          height:60,
          width:60,
          borderWidth:1,
          alignSelf:"flex-start",
          borderRadius:60,
          margin:10,
          flexDirection:"row",
          gap:20
        }}>         

        </View>

      </View>

    </View>
  )
}








