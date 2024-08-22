import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Text className='text-blue-300'>Leaving Profile is cool</Text>
      <Text>Development is fun</Text>
    </SafeAreaView> 
  )
}

export default Profile

const styles = StyleSheet.create({})