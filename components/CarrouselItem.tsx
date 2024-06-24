import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

import * as Animatable from 'react-native-animatable';

export interface CarrouselItemModel {
    id: number,
    title: string,
    image: string
}

export interface CarrouselProps {
    activeItem: CarrouselItemModel,
    item: CarrouselItemModel
}

const zoomIn: any = {
    0: {
        scale: 0.9
    },
    1: {
        scale: 1
    }
}

const zoomOut: any = {
    0: {
        scale: 1
    },
    1: {
        scale: 0.9
    }
}

const CarrouselItem = ({ activeItem, item }: CarrouselProps) => {
    return (
        <Animatable.View
            className='mr-5'
            animation={activeItem.id === item.id ? zoomIn : zoomOut}
            duration={500}
        >
            <TouchableOpacity className='relative justify-center items-center' activeOpacity={.7} onPress={() => { }}>
                <ImageBackground
                    source={{ uri: item.image }}
                    className='w-52 h-72 rounded-[35px] my-2 overflow-hidden shadow-lg shadow-black/40 border-2 border-secondary'
                    resizeMode='cover'
                />
                <Text className='text-white'>{item.title}</Text>
            </TouchableOpacity>
        </Animatable.View>
    )
}

export default CarrouselItem;