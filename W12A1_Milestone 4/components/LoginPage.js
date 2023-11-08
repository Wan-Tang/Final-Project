import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import React from 'react';

WebBrowser.maybeCompleteAuthSession();

export default function LoginPage({ navigation }) {

  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "745904842085-h6kkimtcj2tnaiqluvht2kpod3hpq2e8.apps.googleusercontent.com",

    iosClientId: "745904842085-iafacjf709tdn681te3v72etsrahlf3g.apps.googleusercontent.com",

    androidClientId: "745904842085-nvhnh56l5dntstdqgkfl2dujuakh5ddb.apps.googleusercontent.com",

  });


  React.useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken])

  //End point
  async function fetchUserInfo() {
    let response = await fetch("https://accounts.google.com/o/oauth2/v2/auth", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const userInfo = await response.json();
    setUser(userInfo);
  }

  const ShowUserInfo = () => {
    if (user) {
      return (
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 30, alignSelf: "center" }}>Welcome</Text>
          <Image source={{ uri: user.picture }} />
          <Text style={{ fontWeight: "bold" }}>{user.name}</Text>
        </View>
      )
    }
  }

  return (

    <View>

      {user && <ShowUserInfo />}
      {user === null &&

        <>
          <Text style={{ fontWeight: "bold", fontSize: 30, alignSelf: "center" }}>Welcome</Text>
          <Image style={{ width: 400, height: 150, margin: 30, alignSelf: "center" }}
            source={require('../assets/google.jpg')} />

          <TouchableOpacity
            disabled={!request}
            onPress={() => {
              promptAsync();
            }}
            style={{ backgroundColor: "white", padding: 10, borderRadius: 10 }}
          >
            <Text style={{ fontSize: 20, textAlign: "center", color: "black", fontWeight: "bold" }}>Login with Google Account</Text>
          </TouchableOpacity>
        </>

      }


    </View>

  );
}