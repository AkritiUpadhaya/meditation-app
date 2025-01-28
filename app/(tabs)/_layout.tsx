import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name='nature'
         options={{tabBarLabel:'meditate',
            tabBarIcon:({color})=>(
                <MaterialCommunityIcons name="flower" size={24} color={color} />
            )
         }}/>
         <Tabs.Screen name='affirmations'
         options={{tabBarLabel:'Affirmations',
            tabBarIcon:({color})=>(
                <Entypo name="open-book" size={24} color={color} />
            )
         }}/>
    </Tabs>
  )
}

export default TabsLayout