import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { GalleryPreviewData } from '~/constants/models/AffirmationGallery';
import AFFIRMATION_GALLERY from '~/constants/affirmation-gallery';

const AffirmationPractice = () => {
    const {itemId} =useLocalSearchParams();
    const [affirmation, setAffirmation]= useState<GalleryPreviewData>();
    useEffect(()=>{
        for(let idx= 0; idx<AFFIRMATION_GALLERY.length; idx++){
            const affirmationsData= AFFIRMATION_GALLERY[idx].data;
            const affirmationToStart= affirmationsData.find((a)=>a.id===Number(itemId));

            if(affirmationToStart){
                setAffirmation(affirmationToStart);
                return;
            }
        }
    },[])
  return (
    <View>
        <ImageBackground source={affirmation?.image} resizeMode='cover' className='flex-1'>
            
        </ImageBackground>
    </View>
  )
}

export default AffirmationPractice