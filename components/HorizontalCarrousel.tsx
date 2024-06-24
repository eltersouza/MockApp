import { FlatList } from 'react-native'
import React, { useState } from 'react'
import CarrouselItem, { CarrouselItemModel } from './CarrouselItem';

interface HorizontalCarrouselProps {
    items: CarrouselItemModel[]
}

const HorizontalCarrousel = ({items}: HorizontalCarrouselProps) => {
    const [activeItem, setActiveItem] = useState(items[0]);
    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            renderItem={({ item }) => (
                <CarrouselItem activeItem={activeItem} item={item} />
            )}
        />
    )
}

export default HorizontalCarrousel