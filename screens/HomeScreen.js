import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets/index";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First section */}
      <View className="flex-row px-6 mt-9 items-center space-x-3">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#4DABB7] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>
      {/* Subtext section */}
      <View className="px-6 mt-8 space-y-4">
        <Text className="text-[#3C6072] text-[36px]">Are you ready for a</Text>
        <Text className="text-[#4DABB7] text-[32px] font-bold">
          New Adventure?
        </Text>

        <Text className="text-base"> Work in Progress</Text>
      </View>
      {/* 3rd section */}
      <View className="w-[300px] h-[300px] absolute bg-[#4DABB7] rounded-full bottom-20 -right-36"></View>
      <View className="w-[300px] h-[300px] absolute bg-[#E99265] rounded-full -bottom-12 -left-20"></View>
      {/* Image section */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-7"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-21 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#4DABB7] rounded-full items-center justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing={"ease-in-out"}
            iterationCount={"infinite"}
            className="w-20 h-20  items-center justify-center rounded-full bg-[#4DABB7]"
          >
            <Text className="text-gray-50 text-[38px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
