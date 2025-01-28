import { View, Text, FlatList, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import Gradient from '~/components/Gradient'
import { MEDITATION_DATA } from '~/constants/MeditationData'
import MEDITATION_IMAGES from '~/constants/meditation-images'

const Nature = () => {
  return (
    <View className='flex-1'>
      <Gradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className='mb-6 '>
        <Text className='text-white mb-3 font-bold text-4xl text-left'>Welcome Akriti</Text>
        <Text className='text-white font-medium text-xl'>Start your meditation practice today</Text>
        </View>
        <View>
          <FlatList 
          data={MEDITATION_DATA}
          className='mb-20'
          keyExtractor={(item)=> item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item})=>(
            <Pressable onPress={()=>console.log('pressed')}
            className='h-48 my-3 rounded-md overflow-hidden'>
              <ImageBackground source={MEDITATION_IMAGES[item.id-1]}
              resizeMode='cover'
              className='flex-1 rounded-lg justify-center'>
                <Text className='text-white text-3xl font-bold text-center'>{item.title}</Text>
              </ImageBackground>
            </Pressable>
          )} />
        </View>
      </Gradient>
    </View>
  )
}

export default Nature