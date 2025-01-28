import { View, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

interface ContentProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Content = ({ children, style }: ContentProps) => {
  return (
    <SafeAreaView className='flex-1 px-1' style={style}>
      {children}
    </SafeAreaView>
  )
}

export default Content