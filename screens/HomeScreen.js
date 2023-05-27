import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Munti } from "../assets/index";
import * as Animatable from "react-native-animatable";
import { SliderBox } from "react-native-image-slider-box";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      {/* Image section */}
      <View className="flex-1">
        <Image source={Munti} className="w-full h-full" />
      </View>
      <View className=" absolute align-middle justify-center items-center mt-[30%] ml-[20%]">
        <Text className="text-[#ac9090] text-[40px] font-light tracking-wide">
          Experience
        </Text>
        <View className="relative align-middle justify-center items-center ">
          <Text className="text-[#ac9090] text-[20px] font-light tracking-wide">
            the unfamiliar
          </Text>
        </View>
      </View>
      <View className="absolute bottom-0 left-0 right-0 mb-8">
        <TouchableOpacity
          className="w-[90%] border   left-5 items-center justify-center border-gray-300 bg-white  rounded-3xl p-2"
          onPress={() => navigation.navigate("Discover")}
        >
          <Text className="text-[20px] text-center text-black  font-light tracking-wide">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
