import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Gradient from '~/components/Gradient'

const Affirmations = () => {
  return (
    <View className='flex-1'>
        <Gradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text className='text-white text-2xl font-bold'>Change your belief with affirmations</Text>
        </ScrollView> 
        </Gradient>
      
    </View>
  )
}

export default Affirmations