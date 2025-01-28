import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '~/components/CustomButton'
import { useRouter } from 'expo-router'
import Gradient from '~/components/Gradient'
const App = () => {
  const router= useRouter();

  return (
    <View className="flex-1" >
        <ImageBackground source={require("../assets/meditation-images/beach.webp")} 
        resizeMode='cover' 
        className="flex-1">
          <Gradient colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.7)"]}
           style={{ 
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          contentStyle={{
            justifyContent:'space-between',
            alignItems:'center'
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
              <CustomButton onPress={()=>router.push("/nature")} title="Get Started"/>
            </View>
            <StatusBar style='light'/>
          </SafeAreaView>
         
         </Gradient>
         </ImageBackground>
    </View>
  )
}
export default App