import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { GalleryPreviewData } from '~/constants/models/AffirmationGallery'
import { Link } from 'expo-router';

interface GuidedAffirmationsProps{
    title:string,
    previews: GalleryPreviewData[];
}

const GuidedAffirmations = ({title, previews}:GuidedAffirmationsProps) => {
  return (
    <View className='flex-1 my-5'>
        <View className='mb-2 '>
        <Text className='text-white text-xl '>{title}</Text>
        </View>
        <View>
            <FlatList 
             data={previews}
             horizontal= {true}
             showsHorizontalScrollIndicator={false}
             keyExtractor={(item)=>item.id.toString()}
             renderItem={({item})=>(
                <Link href={{
                  pathname: "/affirmations",
                  params: { id: item.id }
                }} asChild >
                    <Pressable>
                        <View className='h-36 w-32 rounded-md mr-4'>
                            <Image 
                            source={item.image}
                            resizeMode='cover'
                            className='w-full h-full'/>
                            
                        </View>
                    </Pressable>
                </Link>
             )}
             /> 
        </View>
    </View>
  )
}

export default GuidedAffirmations