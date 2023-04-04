import { View, SafeAreaView, Text, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "../assets/index";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Discover = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center  justify-between px-5 mt-10">
        <View>
          <Text className="text-[30px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[20px]">the next adventure</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-2 px-4 mt-4 shadow-lg">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyAUEmPIUedXVc_ayXckicgc2p91i2TkseI",
            language: "en",
          }}
        />
      </View>
      {/* Menu Container */}
      <ScrollView>
        <View className="flex-row justify-center items-center px-8 mt-8"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
