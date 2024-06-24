import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { CustomButton, Loader } from '@/components';
import { router } from 'expo-router';

const QrCodeSignIn = () => {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <SafeAreaView className="bg-primary h-full w-full">
                <Loader isLoading={loading} />
                <ScrollView>
                    <View className="flex flex-1 h-[100vh] flex-col md:flex-row">
                        <View className="w-full md:w-1/3 flex  grow items-center justify-end 
                        md:justify-center">
                            <Image
                                source={images.logo}
                                className="w-[130px] h-[84px] md:w-[250px] md:h-[130px]"
                                resizeMode="contain"
                            />
                        </View>

                        <View className="w-full md:w-2/3 h-[80vh] md:h-full md:grow flex 
                        sm:flex-none justify-start md:justify-center items-center px-10">
                            <View className="relative mt-5">
                                <Text className="text-3xl text-white font-bold text-center">
                                    To get signed in, just scan the QR Code below. Then, just sign in into our organization on your mobile device.
                                </Text>
                            </View>

                            <Image source={images.qrCode} resizeMode='contain' className='my-5 w-[200px] md:w-[300px] h-[200px] md:h-[300px]' />

                            <View>
                                <Text className="font-pregular text-gray-100 md:mt-7 text-center text-lg">
                                    This screen will automatically change once you get signed in on your mobile device and give allowance for this device to be assigned to your account.
                                </Text>
                            </View>
                            <View>
                                <CustomButton
                                    title="Go to Home"
                                    handlePress={() => router.replace("/home")}
                                    containerStyles='w-[50vw] mt-7'
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <StatusBar backgroundColor="#161622" style="light" />
            </SafeAreaView>
        </>
    )
}

export default QrCodeSignIn