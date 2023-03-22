import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'

const CategoryCard = ({title, imgUrl}) => {
  return (
    <TouchableOpacity className='relative mx-2'>
        <Image source={{
            uri: imgUrl
        }}
        className='h-20 w-20 rounded'
        />
      <Text className='absolute  bottom-1 left-1 text-white font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard