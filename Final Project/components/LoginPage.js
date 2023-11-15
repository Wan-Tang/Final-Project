// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';


// GoogleSignin.configure({
//   scopes: ['https://accounts.google.com/o/oauth2/v2/auth'], // what API you want to access on behalf of the user, default is email and profile
//   webClientId: '745904842085-h6kkimtcj2tnaiqluvht2kpod3hpq2e8.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   hostedDomain: '', // specifies a hosted domain restriction
//   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//   accountName: '', // [Android] specifies an account name on the device that should be used
//   iosClientId: '745904842085-iafacjf709tdn681te3v72etsrahlf3g.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//   googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
//   openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
//   profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
// });

// export default function LoginPage({ }) {
//   const [accessToken, setAccessToken] = React.useState(null);
//   const [user, setUser] = React.useState(null);
//   const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
//     clientId: "745904842085-h6kkimtcj2tnaiqluvht2kpod3hpq2e8.apps.googleusercontent.com",
//     iosClientId: "745904842085-iafacjf709tdn681te3v72etsrahlf3g.apps.googleusercontent.com",
//     androidClientId: "745904842085-nvhnh56l5dntstdqgkfl2dujuakh5ddb.apps.googleusercontent.com",
//   });

//   const navigation = useNavigation(); // Add this line to get the navigation object

//   const signIn = async () => {
//     try {
//       const userInfo = await GoogleSignin.signIn();
//       setUser(userInfo);
//       getCurrentUser(); // Automatically fetch user details after sign-in
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         console.log('User cancelled the sign-in');
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         console.log('Sign-in in progress');
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         console.log('Play services not available');
//       } else {
//         console.error('Google Sign-In Error:', error);
//       }
//     }
//   };
  

//   const getCurrentUser = async () => {
//     try {
//       const currentUser = await GoogleSignin.getCurrentUser();
//       setUser(currentUser);
//       if (currentUser) {
//         // Navigate to the homepage after successful sign-in
//         navigation.navigate('Homepage');
//       }
//     } catch (error) {
//       console.error('Error fetching current user:', error);
//     }
//   };

//   React.useEffect(() => {
//     console.log('response:', response); // Add this line for debugging
//     if (response?.type === "success" && response?.authentication?.accessToken) {
//       setAccessToken(response.authentication.accessToken);
//       accessToken && fetchUserInfo();
//     }
//   }, [response, accessToken]);
  

//   async function fetchUserInfo() {
//     try {
//       const userInfo = await GoogleSignin.getCurrentUser();
//       setUser(userInfo);
//     } catch (error) {
//       // Handle errors
//     }
//   }

//   const ShowUserInfo = () => {
//     if (user) {
//       return (
//         <View>
//           <Text style={{ fontWeight: "bold", fontSize: 30, alignSelf: "center" }}>Welcome</Text>
//           <Image source={{ uri: user.photo }} style={{ width: 100, height: 100 }} />
//           <Text style={{ fontWeight: "bold" }}>{user.name}</Text>
//         </View>
//       );
//     }
//     return null; // Return null if user is null
//   };

//   return (
//     <View>
//       <ShowUserInfo />
//       {user === null && (
//         <>
//           <Text style={{ fontWeight: 'bold', fontSize: 30, alignSelf: 'center' }}>Welcome</Text>
//           <Image style={{ width: 400, height: 150, margin: 30, alignSelf: 'center' }} source={require('../assets/google.jpg')} />
//           <GoogleSigninButton
//             disabled={!request}
//             onPress={signIn}
//             style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }}
//           >
//             <Text style={{ fontSize: 20, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Login with Google Account</Text>
//           </GoogleSigninButton>
//         </>
//       )}
//     </View>
  
//   );
// }