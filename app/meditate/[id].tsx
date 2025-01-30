import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import MEDITATION_IMAGES from '~/constants/meditation-images'
import Gradient from '~/components/Gradient'
import { router, useLocalSearchParams } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomButton from '~/components/CustomButton'
import { Audio } from 'expo-av'
import { AUDIO_FILES, MEDITATION_DATA } from '~/constants/MeditationData'
const Meditate = () => {
  const {id}=useLocalSearchParams()
  const [secondsRemaining, setSecondsRemaining]= useState(10)
  const [isMeditating, setIsMeditating]= useState(false)
  const [audioSound, setAudioSound]= useState<Audio.Sound>()
  const [isPlaying, setIsPlaying]= useState(false)

  useEffect(()=>{
    let timerId: NodeJS.Timeout
    if(secondsRemaining===0){
      setIsMeditating(false)
      return
    }
    if(isMeditating){
      timerId= setTimeout(()=>{
        setSecondsRemaining(secondsRemaining-1)
      },1000)
    }
    return ()=>{
      clearTimeout(timerId)
    }
  },[secondsRemaining, isMeditating])
  useEffect(()=>{
    return ()=>{
      audioSound?.unloadAsync()
    }
  },[audioSound])
  const toggleMeditate= async()=>{
    if(secondsRemaining===0) setSecondsRemaining(10);
    setIsMeditating(!isMeditating)
    toggleAudio()
  }
  const toggleAudio= async()=>{
    const sound= audioSound? audioSound: await initializeAudio();
    const status= await sound?. getStatusAsync();
    if(status?.isLoaded && !isPlaying){
      await sound.playAsync()
      setIsPlaying(true)
    }
    else{
      await sound.pauseAsync()
      setIsPlaying(false)
    }
  }
  const initializeAudio= async()=>{
    const audioFileName= MEDITATION_DATA[Number(id)-1].audio;
    const {sound}= await Audio.Sound.createAsync(
      AUDIO_FILES[audioFileName]
    )
    setAudioSound(sound)
    return sound
  }
  const formattedTimeMinutes= String(Math.floor(secondsRemaining/60)).padStart(2,'0')
  const formattedTimeSeconds= String(secondsRemaining%60).padStart(2,'0')
  return (
    <View className='flex-1'>
      <ImageBackground source={MEDITATION_IMAGES[Number(id)]} resizeMode='cover' className='flex-1'>
        <Gradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
        <Pressable onPress={()=>router.back()} className='absolute top-16 left-6 z-10'>
        <AntDesign name="leftcircle" size={50} color="white" />
        </Pressable>
        <View className='flex-1 justify-center'>
          <View className='mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center'>
            <Text className='text-4xl '>
              {formattedTimeMinutes}:{formattedTimeSeconds}
            </Text>
          </View>
        </View>
        <View className='mb-5'>
          <CustomButton title='Start Meditation' onPress={()=>toggleMeditate()}/>
        </View>
        </Gradient>
      
      </ImageBackground>
    </View>
  )
}

export default Meditate