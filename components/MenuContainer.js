import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const MenuContainer = ({ title, imageSrc, selected, setType }) => {
  const handlePress = () => {
    setType(selected ? "" : title.toLowerCase()); // Toggle the selected type
  };

  return (
    <TouchableOpacity
      className="items-center justify-between space-y-2 px-4"
      onPress={handlePress}
    >
      <View
        className={`w-20 h-20 p-2 shadow-sm  items-center justify-center rounded-md ${
          selected ? "bg-blue-400" : ""
        }`}
      >
        <Image
          source={imageSrc}
          className="w-full h-full object-contain  items-center"
        />
      </View>
      <Text className="text-gray-700 text-[20px] font-semibold items-center justify-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
