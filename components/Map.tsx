import { View, Text } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps'
import { useLocationStore } from '@/store'

const Map = () => {
  const { userLongitude, userLatitude, destinationLatitude, destinationLongitude } = useLocationStore();

  
  return (
    <MapView 
    provider={PROVIDER_DEFAULT} 
    className='w-full h-full rounded-2xl' 
    tintColor='black' 
    mapType='mutedStandard' 
    showsPointsOfInterest={false}
    showsUserLocation={true}
    userInterfaceStyle='light'
    >

    </MapView>
  )
}

export default Map