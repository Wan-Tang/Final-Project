import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import ConcertsInfo from './ConcertsInfo';

export default function SelectedConcertPage({ route, navigation }) {
  const { concertSelect } = route.params;
  return (

    <ScrollView>

      <View>
        <View style={{ height: 0 }}></View>
        <ConcertsInfo concertName={concertSelect} />
{/* 
        <TouchableOpacity onPress={() => { navigation.navigate("Community") }}
          style={{ width: 250, height: 30, backgroundColor: "black", margin: 30, borderRadius: 10, alignSelf: "center" }}>

          <Text style={{ fontSize: 18, textAlign: "center", color: "white", fontWeight: "bold", alignSelf: "center" }}>
            Join the community</Text>

        </TouchableOpacity> */}

      </View>

    </ScrollView>



  );
}