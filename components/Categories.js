import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop:10,
    }} 
    horizontal 
    showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl = "https://t.ly/sCwn" title ='testing'/>
      <CategoryCard imgUrl = "https://t.ly/sCwn" title ='testing' />
      <CategoryCard imgUrl = "https://t.ly/sCwn" title ='testing'/>
      <CategoryCard imgUrl = "https://t.ly/sCwn" title ='testing'/>
      <CategoryCard imgUrl = "https://t.ly/sCwn" title ='testing' />
      <CategoryCard imgUrl = "https://t.ly/sCwn" title ='testing'/>
    </ScrollView>
  );
};

export default Categories;
