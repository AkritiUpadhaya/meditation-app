import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import Gradient from '~/components/Gradient'
import CustomButton from '~/components/CustomButton'
import { TimerContext } from '~/context/TimerContext'
const MeditationDuration = () => {
const {duration, setDuration}= useContext(TimerContext)

    const handlePress=(duration:number)=>{
        setDuration(duration)
        router.back()
    }
  return (
    <View className='flex-1'>
        <Gradient colors={['#161b12','#0a4d4a', "#766e67"]} style={{paddingLeft:10, paddingRight:10}}>
        {/* <Text className='text-white'>MeditationDuration</Text> */}
        <Pressable onPress={()=>router.back()} className='absolute top-8 left-6 z-10' >
         <AntDesign name="leftcircle" size={50} color="white" />
      </Pressable>
      <View className='justify-center h-4/5'>
      <Text className='text-white text-center text-3xl font-bold mb-10'>
        Adjust your meditation duration
        </Text>
      <View>
        <CustomButton title='10 seconds' onPress={()=> handlePress(10)} containerStyles='mb-5' />
        <CustomButton title='5 minutes' onPress={()=> handlePress(5*60)} containerStyles='mb-5'/>
        <CustomButton title='10 minutes' onPress={()=> handlePress(10*60)} containerStyles='mb-5'/>
        <CustomButton title='20 minutes' onPress={()=> handlePress(20*60)} containerStyles='mb-5'/>
      </View>
      </View>
        </Gradient>
        
    </View>
  )
}

export default MeditationDuration