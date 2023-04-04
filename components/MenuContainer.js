import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const MenuContainer = ({ title, imageSrc, type, setype }) => {
  const handlePress = () => {
    setype(title.toLowerCase());
  };
  return (
    <TouchableOpacity
      className="items-center justify-center space-y-2 px-1 "
      onPress={handlePress}
    >
      <View
        className={`w-20 h-20 shadow-sm p-2 rounded-full items-center justify-center ${
          type === title.toLowerCase() ? " bg-gray-200" : " "
        }`}
      >
        <Image source={imageSrc} className="w-20 h-20 object-contain" />
      </View>
      <Text className="text-[#00BCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
