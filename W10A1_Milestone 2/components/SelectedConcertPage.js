import { StyleSheet, Text, View } from 'react-native';
import ConcertsInfo from './ConcertsInfo';

export default function SelectedConcertPage({route, navigation}) {
    const { concertSelect } = route.params;
  return (
 
    <View>
        <View style={{height:0}}></View>
        <ConcertsInfo concertName={concertSelect}/> 
    </View>
 
  );
}