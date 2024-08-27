import { View, Text, FlatList } from 'react-native'
import React from 'react'
import RideLayout from '@/components/RideLayout'
import DriverCard from '@/components/DriverCard'
import CustomButton from '@/components/CustomButton'
import { useDriverStore } from '@/store'
import { router } from 'expo-router'


const ConfirmRide = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();

  return (
    <RideLayout title='Choose a Driver'>
      <FlatList 
        data={drivers}
        renderItem={({item}) => (
          <DriverCard item={item} selected={selectedDriver!} setSelected={() => setSelectedDriver(Number(item.id))}/>
        )}
        ListFooterComponent={() => (
          <View className='mx-5 mt-10'>
            <CustomButton title='Select Ride' onPress={() => router.push('/(root)/book-ride')} />
          </View>
        )}
      />
    </RideLayout>
  )
}

export default ConfirmRide