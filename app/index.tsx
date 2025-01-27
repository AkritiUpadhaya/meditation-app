import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '~/components/CustomButton'
const App = () => {
  return (
    
    <View className="flex-1" >
        <ImageBackground source={require("../assets/meditation-images/beach.webp")} 
        resizeMode='cover' 
        className="flex-1">
         <LinearGradient 
          colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.7)"]}
          style={{ 
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <SafeAreaView className='flex-1 justify-between px-1'>
            <View>
            <Text className=' text-center text-white text-4xl'>
            Meditation
            </Text>
            <Text className='text-center text-white mt-3 text-2xl'>Simplifying Text For Everyone</Text>
            </View>
            <View>
              <CustomButton onPress={()=>console.log("Pressed")} title="Get Started"/>
            </View>
            <StatusBar style='light'/>
          </SafeAreaView>
         
         </LinearGradient>
         </ImageBackground>
    </View>
    
    
  )
}

export default App