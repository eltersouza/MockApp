import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import React, { useState } from "react";

const Welcome = () => {
    const [loading, setLoading] = useState(false);
    const [isLogged, setIsLogged] = useState(true)

    if (!loading && isLogged) return <Redirect href="/home" />;

    return (
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
                        sm:flex-none justify-start md:justify-center md:items-center px-10">
                        <Image
                            source={images.cards}
                            className="max-w-[380px] w-full h-[298px]"
                            resizeMode="contain"
                        />

                        <View className="relative mt-5">
                            <Text className="text-3xl text-white font-bold text-center">
                                Discover Endless{"\n"}
                                Possibilities with{" "}
                                <Text className="text-secondary-200">Aora</Text>
                            </Text>

                            <Image
                                source={images.path}
                                className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                                resizeMode="contain"
                            />
                        </View>

                        <View>
                            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                                Where Creativity Meets Innovation: Embark on a Journey of Limitless
                                Exploration with Aora
                            </Text>
                        </View>


                        <CustomButton
                            title="Continue with Email"
                            handlePress={() => router.push("/sign-in")}
                            containerStyles="w-full mt-7 md:hidden"
                        />

                        <CustomButton
                            title="Continue with QR Code"
                            handlePress={() => router.push("/qr-code")}
                            containerStyles="w-full mt-7 hidden md:flex"
                        />
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
    );
};

export default Welcome;
