import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Gradient from '~/components/Gradient'
import AFFIRMATION_GALLERY from '~/constants/affirmation-gallery'
import GuidedAffirmations from '~/components/GuidedAffirmations'

const Affirmations = () => {
  return (
    <View className='flex-1'>
        <Gradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text className='text-white text-2xl font-bold'>Change your belief with affirmations</Text>
            <View>
              {AFFIRMATION_GALLERY.map((g)=>(
                <GuidedAffirmations
                key={g.title}
                title={g.title}
                previews={g.data}
                />
              ))}
            </View>
        </ScrollView> 
        </Gradient>
      
    </View>
  )
}

export default Affirmations