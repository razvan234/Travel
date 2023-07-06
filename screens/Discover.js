import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { Attractions, Hotels, NotFound, Restaurant, Venice } from "../assets";
import MenuContainer from "../components/MenuContainer";

import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";

const Discover = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Discover");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    // Navigate to the respective screen based on the selected tab
    navigation.navigate(tab);
  };

  const [type, setType] = useState("restaurants");
  const [mainData, setMainData] = useState([]);
  const [coordinates, setCoordinates] = useState(null);
  const BackendUrl = "http://10.0.2.2:8000";
  const [placesData, setPlacesData] = useState([]);

  const getPlaces = async () => {
    try {
      if (coordinates && type) {
        const { latitude, longitude } = coordinates;
        const url = `${BackendUrl}/?type=${type}&latitude=${latitude}&longitude=${longitude}&lang=${"en_US"}`;
        const response = await fetch(url);
        let { data } = await response.json();
        if (response.ok) {
          return data; // Return the data
        } else {
          console.error(data);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const fetchData = async () => {
    const data = await getPlaces();
    setPlacesData(data); // Set placesData with the received data
    setMainData(data);
  };

  useEffect(() => {
    fetchData();
  }, [coordinates, type]);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row flex-2 items-center justify-between mt-8 relative">
        <View className="flex-1 flex-row items-center">
          <Image
            source={Venice}
            className="w-full h-[200px] rounded-br-[65px]"
          />
        </View>
        <View className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-3 shadow-lg mt-3">
            <GooglePlacesAutocomplete
              GooglePlacesDetailsQuery={{ fields: "geometry" }}
              placeholder="Search destination..."
              fetchDetails={true}
              onPress={(data, details = null) => {
                const { lat, lng } = details?.geometry?.location;
                console.log("Latitude:", lat);
                console.log("Longitude:", lng);
                setCoordinates({ latitude: lat, longitude: lng });
              }}
              query={{
                key: "AIzaSyDO5_8WqGXCoStWwkqv8JGlZuQRDIfL1h8",
                language: "en",
              }}
            />
          </View>
        </View>
      </View>
      <ScrollView>
        <View className="flex-row items-center justify-between px-3 mt-8">
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <MenuContainer
              key={"hotels"}
              title="Hotels"
              imageSrc={Hotels}
              selected={type === "hotels"}
              setType={() => setType("hotels")} // Update the type directly
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              selected={type === "attractions"}
              setType={() => setType("attractions")} // Update the type directly
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurant}
              selected={type === "restaurants"}
              setType={() => setType("restaurants")} // Update the type directly
            />
          </ScrollView>
        </View>
        <View className="flex-row items-center justify-between px-5 mt-12">
          <View className="flex-row items-center">
            <Text className="text-lg font-semibold text-gray-700 ml-4">
              Recommended
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-[#77C3EC] text-sm font-semibold">
              Explore
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-evenly flex-wrap px-5 mt-3">
          {placesData && placesData.length > 0 ? (
            <ScrollView showsHorizontalScrollIndicator={false}>
              {placesData.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <View key={index} className="flex-row space-x-4">
                      <ItemCardContainer
                        imageSrc={
                          item?.photo?.images?.medium?.url ||
                          "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                        }
                        title={item?.name}
                        location={item?.location_string}
                        data={item}
                      />
                      {index + 1 < placesData.length && (
                        <ItemCardContainer
                          imageSrc={
                            placesData[index + 1]?.photo?.images?.medium?.url ||
                            "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                          }
                          title={placesData[index + 1]?.name}
                          location={placesData[index + 1]?.location_string}
                          data={placesData[index + 1]}
                        />
                      )}
                    </View>
                  );
                }
                return null; // Skip rendering for odd-indexed items
              })}
            </ScrollView>
          ) : (
            <View className="w-full h-[200px] items-center space-y-8 justify-center">
              <Image source={NotFound} className="w-10 h-10 object-cover" />
              <Text className="text-2xl text-[#428288] font-semibold">
                Oops... No Data Found
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <View
        className="fixed bottom-0 left-0 right-0 flex-row bg-white shadow-lg"
        style={{ paddingBottom: 16 }}
      >
        <TouchableOpacity
          className={`flex-1 items-center py-2 ${
            activeTab === "Discover" ? "bg-blue-500" : "bg-gray-300"
          }`}
          onPress={() => handleTabPress("Discover")}
        >
          <FontAwesome5 name="search" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 items-center py-2 ${
            activeTab === "currency" ? "bg-blue-500" : "bg-gray-300"
          }`}
          onPress={() => handleTabPress("Currency")}
        >
          <FontAwesome5 name="money-bill" size={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Discover;
