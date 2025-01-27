import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Content from './Content';

const Gradient = ({
    children, colors,
}:{
    children:any;
    colors: readonly [string, string, ...string[]];
    }) => {
  return (
    <LinearGradient colors={colors} className='flex-1'>
        <Content>{children}</Content>
    </LinearGradient>
  )
}

export default Gradient