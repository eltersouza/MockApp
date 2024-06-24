import { View, Text, ScrollView, LogBox } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HorizontalCarrousel from '@/components/HorizontalCarrousel';
import { CarrouselItemModel } from '@/components/CarrouselItem';
import VerticalCarrousel from '@/components/VerticalCarrousel';

const Home = () => {
  const list: CarrouselItemModel[] = [
    { id: 1, title: "Built By King", image: "https://images.pexels.com/photos/11403825/pexels-photo-11403825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, title: "Yaroslav Shuraev", image: "https://images.pexels.com/photos/4938010/pexels-photo-4938010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, title: "Mikhail Nilov", image: "https://images.pexels.com/photos/6942990/pexels-photo-6942990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, title: "Mikhail Nilov", image: "https://images.pexels.com/photos/6942978/pexels-photo-6942978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 5, title: "Mikhail Nilov", image: "https://images.pexels.com/photos/6942992/pexels-photo-6942992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, title: "Nathan J Hilton", image: "https://images.pexels.com/photos/20851473/pexels-photo-20851473/free-photo-of-preto-e-branco-p-b-cidade-meio-urbano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 7, title: "Monicaaaaa aaa", image: "https://images.pexels.com/photos/8218375/pexels-photo-8218375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 8, title: "Jess Loiterton", image: "https://images.pexels.com/photos/5008356/pexels-photo-5008356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 9, title: "Rachel Claire", image: "https://images.pexels.com/photos/6762338/pexels-photo-6762338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 10, title: "Noah Munivez", image: "https://images.pexels.com/photos/9406887/pexels-photo-9406887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  ];

  const [activeItem, setActiveItem] = useState(list[0]);

  useEffect(() =>{
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <SafeAreaView className='bg-primary flex-1'>
      <ScrollView>
        <View className='px-2 md:px-4 mt-4'>
          <Text className='text-white font-plight'>Welcome back,</Text>
          <Text className='text-secondary font-pmedium text-3xl'>Elter</Text>
        </View>

        <View className="w-full pt-5 pb-8 px-2">
          <Text className="text-lg font-pregular text-gray-100 mb-3">
            Latest Videos
          </Text>

          <HorizontalCarrousel items={list} />
        </View>
        <View className="w-full pt-5 pb-8 px-2">
          <Text className="text-lg font-pregular text-gray-100 mb-3">
            Latest Videos
          </Text>
          <VerticalCarrousel items={list} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home