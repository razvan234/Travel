import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TM, TM2, TM3 } from "../assets/index";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1">
      {/* Image section */}
      <View className="flex-1 justify-center items-center">
        <Image source={TM3} className=" flex -1 w-[100%] h-[100%]" />
      </View>
      <View className=" absolute align-middle justify-center items-center mt-[30%] ml-[25%]">
        <Text className="text-[#eeeaea] text-[40px] font-bold tracking-wide">
          Explore
        </Text>
        <View className="align-middle justify-center items-center ">
          <Text className="text-[#eeeaea] text-[20px] font-semibold tracking-wide">
            the journey
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
