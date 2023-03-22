import { View, Text, SafeAreaView, TextInput, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    AdjustmentsVerticalIcon,
    MapPinIcon,
    UserIcon,
    MagnifyingGlassIcon,
  } from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";

 const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/*  Header */}
      <View className="flex-row mx-4 pb-2 space-x-2  mt-2 items-center px-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="w-7 h-7 bg-gray-300 p-4 rounded-full item-end"
        />
        <View className="flex-1 pb-2">
          <Text className="font-bold text-gray-400 text-xs">Travel Now</Text>
          <Text className="font-bold text-gray-400 text-xl">
            Discover
            <MapPinIcon size={30} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB"/>
      </View>
      {/*  Search*/}
      <View className='flex-row items-center space-x-2 pb-2 mx-4 px-2'>
        <View className='flex-row  flex-1 space-x-2 bg-gray-200 p-3'>
          <MagnifyingGlassIcon  color="gray" />
          <TextInput placeholder="Next adventure" keyboardType="default" />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView className='bg-blue-100'
       contentContainerStyle={{
        paddingBottom:100,
       }}
      >
        {/* Categories */}
        <Categories/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen