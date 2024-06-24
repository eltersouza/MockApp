import { FlatList } from 'react-native'
import React, { useState } from 'react'
import CarrouselItem, { CarrouselItemModel } from './CarrouselItem';

interface VerticalCarrouselProps {
    items: CarrouselItemModel[]
}

const VerticalCarrousel = ({ items }: VerticalCarrouselProps) => {
    const [activeItem, setActiveItem] = useState(items[0]);
    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <CarrouselItem activeItem={activeItem} item={item} />
            )}
        />
    )
}

export default VerticalCarrousel