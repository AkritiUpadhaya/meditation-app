import { View, Text, ImageBackground, Pressable, ScrollViewComponent, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { GalleryPreviewData } from '~/constants/models/AffirmationGallery';
import AFFIRMATION_GALLERY from '~/constants/affirmation-gallery';
import Gradient from '~/components/Gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
// import { ScrollView } from 'react-native-gesture-handler';

const AffirmationPractice = () => {
    const {itemId} =useLocalSearchParams();
    const [affirmation, setAffirmation]= useState<GalleryPreviewData>();
    useEffect(()=>{
        for(let idx= 0; idx<AFFIRMATION_GALLERY.length; idx++){
            const affirmationsData= AFFIRMATION_GALLERY[idx].data;
            const affirmationToStart= affirmationsData.find((a)=>a.id===Number(itemId));

            if(affirmationToStart){
                setAffirmation(affirmationToStart);
                const affirmationsArray= affirmationToStart.text.split(".")
                return;
            }
        }
    },[])
  return (
    <View className='flex-1'>
        <ImageBackground source={affirmation?.image} resizeMode='cover' className='flex-1'>
            <Gradient colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0,0.9)'] }>
                <Pressable onPress={()=>router.back()} className='absolute top-16 left-6 z-10'>
                <AntDesign name="leftcircle" size={50} color="white" />
                </Pressable>
                <ScrollView className='m-20' showsVerticalScrollIndicator={false}>
                    <View className='h-full justify-center'>
                        <View className='h-4/5 justify-center'>
                        <Text className='text-white text-3xl font-bold'>
                        {affirmation?.text}
                        </Text>
                           
                        </View>
                    </View>
                </ScrollView>
                
            </Gradient>
        </ImageBackground>
    </View>
  )
}

export default AffirmationPractice