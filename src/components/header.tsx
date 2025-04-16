import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, ImageBackground, Image, Dimensions, Text, Pressable} from 'react-native'
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";

export default function header(){
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
        return(
            <View>
                <Text 
                style={{fontFamily:'Poppins_Bold'}}
                >
                    Minhas Provas
                    </Text>
            </View>
        )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        
    }
})