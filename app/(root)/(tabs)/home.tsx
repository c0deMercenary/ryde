import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Text className='text-blue-300'>Leaving home is cool</Text>
      <Text>Development is fun</Text>
    </SafeAreaView> 
  )
}

export default Home

const styles = StyleSheet.create({})