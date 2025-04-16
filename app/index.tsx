import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, ImageBackground, Image, Dimensions, Text, Pressable} from 'react-native'
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";

const { width } = Dimensions.get('window');

export default function home(){
  const [text, onChangeText] = React.useState('');
    const [fontsLoaded] = useFonts({
        'Poppins_Regular': require('@/assets/fonts/poppins/Poppins-Regular.ttf'),
        'Poppins_Bold': require('@/assets/fonts/poppins/Poppins-Bold.ttf')
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    const router = useRouter();
    

  return(
    <SafeAreaView style={styles.screenFull}>
      <View style={styles.containerHeader}>
       <View style={styles.containerImg}>
       <ImageBackground 
        source={require('@/assets/images/imgBck.svg')}
        style={styles.imgBack}
        />
       </View>
      </View>
      <View style={styles.containerContent}>
          <Text style={{textAlign:'center', fontFamily:'Poppins_Bold', fontSize:20}}>Bem Vindo! <br /> Veja suas provas</Text>

          <Pressable onPress={() => router.push('./content')} >
            <View style={styles.button}>
              <Text style={{fontFamily:'Poppins_Bold'}}>
                Provas
              </Text>
            </View>
          </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screenFull:{
    flex:1,
    width:"100%",
    backgroundColor:"#183257",
  },
  containerHeader:{
    width:'100%',
    height:200,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  containerImg:{
    
  },
  imgBack:{
    width: width, 
    height: width * 0.3,
  },
  containerContent:{
    flex:1,
    width:"100%",
    backgroundColor:"#fff",
    borderTopLeftRadius:50,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:50
  },
  button:{
    padding:10,
    width:100,
    backgroundColor:"#60AEBA",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    shadowColor: '#000', 
        shadowOffset: { width: 0, height: 10 }, 
        shadowOpacity: 0.25, 
        shadowRadius: 5, 
        elevation: 5, 
  }
})