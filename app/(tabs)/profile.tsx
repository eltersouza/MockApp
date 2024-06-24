import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <SafeAreaView className='bg-primary w-full h-full'>
      <ScrollView>
        <View className='px-2 mt-3'>
          <Text className='text-secondary font-pmedium text-3xl'>Profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile