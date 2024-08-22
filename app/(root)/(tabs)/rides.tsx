import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Rides = () => {
  return (
    <SafeAreaView>
      <Text>Rides</Text>
      <Text className='text-blue-300'>Leaving Rides is cool</Text>
      <Text>Development is fun</Text>
    </SafeAreaView> 
  )
}

export default Rides

const styles = StyleSheet.create({})