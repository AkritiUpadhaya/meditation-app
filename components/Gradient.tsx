import { View, Text, ViewStyle, StyleProp} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Content from './Content';

const Gradient = ({
    children, colors, style, contentStyle
}:{
    children:any;
    colors: readonly [string, string, ...string[]];
    style?: StyleProp<ViewStyle>
    contentStyle?: StyleProp<ViewStyle>;
    }) => {
  return (
    <LinearGradient colors={colors} style={[{flex:1}, style]} className='flex-1'>
        <Content style={contentStyle}>{children}</Content>
    </LinearGradient>
  )
}

export default Gradient