import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";

let userData = {
  user1: {
    grade: "80",
    absence: "5",
    imgURL: "https://i.pinimg.com/736x/00/30/63/0030639f930cf93e4d2f8c0b33d34032.jpg",
    bonusPoint: 6,

  },
  user2: {
    grade: "78",
    absence: "0",
    imgURL: "https://i.pinimg.com/originals/f5/84/69/f584690fe2d5eabe7f52abfd6cedfb3b.jpg",
    bonusPoint: 2,
  },
  user3: {
    grade: "65",
    absence: "2",
    imgURL: "https://i.pinimg.com/736x/a1/68/b1/a168b1e9ed4eb76365b6ebcc2e7b9a3d.jpg",
    bonusPoint: 3,
  },
  user4: {
    grade: "90",
    absence: "1",
    imgURL: "https://bts-kpop.fr/wp-content/uploads/2020/06/1591095809_44_J-Hope-de-Dangerous-Sexy-Times-BTS-portait-des-lunettes-et.jpeg",
    bonusPoint: 0,

  }
}



export default function CommunityPage({ userName }) {
  let cardlist = [
    <UserPost userName="user1" />,
    <UserPost userName="user2" />,
    <UserPost userName="user3" />,
    <UserPost userName="user4" />,
  ];



  // let userKey = userName.toLowerCase();



  return (

    <ScrollView>

      <View>

        <ProfileList />
        <UserPost userName={userName} userInfo={cardlist}/>

        <View style={{ flex: 1 }}>
          <FlatList
            data={userData}
            renderItem={({ item }) => <Profile fan={item} navigation={navigation} />}
            // keyExtractor={(item) => item}
          />
        </View>

        <View style={{ height: 200, width: 360, backgroundColor: "lightgray", alignSelf: "center", borderRadius: 20, margin: 30 }}>
          <Text style={{ margin: 30 }}>Chat with artist</Text>
        </View>

        <View style={{ height: 100, width: 360, backgroundColor: "lightgray", alignSelf: "center", borderRadius: 20, margin: 30 }}>
          <Text style={{ margin: 30 }}>User post</Text>
        </View>

        <View style={{ height: 100, width: 360, backgroundColor: "lightgray", alignSelf: "center", borderRadius: 20, margin: 30 }}>
          <Text style={{ margin: 30 }}>User post</Text>
        </View>


        <View style={{ height: 100, width: 360, backgroundColor: "lightgray", alignSelf: "center", borderRadius: 20, margin: 30 }}>
          <Text style={{ margin: 30 }}>User post</Text>
        </View>

        <FlatList data={userData} renderItem={
          ({ item }) => <UserPost userName={item} />
        } />


      </View>

    </ScrollView>


  );

  function ProfileList() {
    return (


      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />

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

  function Profile({ fan }) {

    return (
      <View style={{ height: 50, width: 50, borderRadius: 50, backgroundColor: "gray", margin: 15 }}>
      </View>
    );
  }

  function UserPost({ userName }) {


    return (

      <View style={{
        flexDirection: "row",
        backgroundColor: "lightgray",
        margin: 10,
        borderRadius: 20
      }}>
        <View style={{
          flex: 3,
          backgroundColor: "darkred",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20
        }}>

          <Text style={{ fontSize: 22, fontWeight: 'bold', alignSelf: 'center', color: "white" }}>
            {"\n\n"}{userName}</Text>

          <Image source={{ uri: userData.imgURL }} style={{ width: 100, height: 100, borderRadius: 10, alignSelf: "center", margin: 30, borderWidth: 1, borderColor: "white" }} />

        </View>

        <View style={{
          flex: 6,
        }}>
          <View style={{
            height: 100,
            backgroundColor: "lightgray",
            borderTopRightRadius: 20,
          }}>

            <Text style={{ alignSelf: "center", fontSize: 14, padding: 20, fontWeight: 800 }}>{"\n"}Grade {userData.grade}</Text>

          </View>

          <View style={{
            flexDirection: "row",

          }}>

            <View style={{
              width: 124.5,
              height: 150,
              backgroundColor: "lightyellow",
            }}>

              <Text style={{ alignSelf: "center", fontSize: 14, padding: 20, fontWeight: 800 }}>Absence </Text>
              <Text style={{ alignSelf: "center", fontSize: 36, fontWeight: 800 }}>{userData.absence}</Text>

            </View>

            <View style={{
              width: 124.5,
              height: 150,
              backgroundColor: "cornsilk",
              borderBottomRightRadius: 20
            }}>
              <Text style={{ alignSelf: "center", fontSize: 14, padding: 20, fontWeight: 800 }}>Bonus Point </Text>
              <Text style={{ alignSelf: "center", fontSize: 36, fontWeight: 800 }}>{userData.bonusPoint}</Text>
            </View>

          </View>

        </View>

      </View>

    );

  }
}



