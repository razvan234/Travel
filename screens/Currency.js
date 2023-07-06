import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

const Currency = () => {
  const navigation = useNavigation();
  const BackendUrl = "http://10.0.2.2:8000";
  const [openFrom, setOpenFrom] = useState(false);
  const [valueFrom, setValueFrom] = useState(null);
  const [openTo, setOpenTo] = useState(false);
  const [valueTo, setValueTo] = useState(null);
  const [items, setItems] = useState([
    { label: "USD", value: "USD" },
    { label: "EUR", value: "EUR" },
    { label: "RON", value: "RON" },
    { label: "GBP", value: "GBP" },
    { label: "AUD", value: "AUD" },
  ]);
  const [amount, setAmount] = useState("");
  const [conversionData, setConversionData] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const getCurrency = async (fromCurrency, toCurrency, amount) => {
    try {
      const url = `${BackendUrl}/currency?from_currency=${fromCurrency}&to=${toCurrency}&amount=${amount}`;
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setConversionData(data); // Store the conversion data in state
      } else {
        console.error(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleConvert = () => {
    getCurrency(valueFrom, valueTo, amount);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="relative flex-row inset-x-0 top-12 justify-between px-5">
        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="w-10 h-10 rounded-md items-center justify-center bg-white"
        >
          <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
        </TouchableOpacity>
      </View>
      <View className="flex-2 relative mt-12">
        <Text className="text-lg font-bold mb-2 text-center">
          Currency Converter
        </Text>
      </View>

      <View className="flex-1 mt-4 px-4">
        <Text className="text-lg font-bold mb-2 px-4">From</Text>
        <DropDownPicker
          open={openFrom}
          value={valueFrom}
          items={items}
          setOpen={setOpenFrom}
          setValue={setValueFrom}
          setItems={setItems}
          className="w-80"
        />
      </View>

      <View className="flex-row  justify-center">
        <View className="px-4">
          {/* Icon 1 */}
          <FontAwesome5
            name="arrow-left"
            size={24}
            rotation={90}
            color="black"
          />
        </View>
        <View className="px-5">
          {/* Icon 2 */}
          <FontAwesome5
            name="arrow-left"
            size={24}
            rotation={270}
            color="black"
          />
        </View>
      </View>

      {!openFrom && (
        <View className="flex-1 mt-4 px-4">
          <Text className="text-lg font-bold mb-2 px-4">To</Text>
          <View className="relative">
            <DropDownPicker
              open={openTo}
              value={valueTo}
              items={items}
              setOpen={setOpenTo}
              setValue={setValueTo}
              setItems={setItems}
              className="w-80"
              style={{ position: "absolute", top: 0, zIndex: 1 }}
            />
          </View>
        </View>
      )}

      {!openFrom && !openTo && (
        <View className="flex-1 px-4">
          <Text className="text-lg font-bold mb-2">Amount</Text>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            placeholder="Enter amount"
            className="border border-gray-300 px-4 py-2 rounded-md w-80"
          />
        </View>
      )}

      {!openFrom && !openTo && (
        <TouchableOpacity
          onPress={handleConvert}
          className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
        >
          <Text className="text-lg font-bold">Convert</Text>
        </TouchableOpacity>
      )}

      {!openFrom && !openTo && conversionData && (
        <View>
          <Text className="text-lg font-bold mt-4">Conversion Result:</Text>
          <Text className="mt-2">
            Base Currency: {conversionData.base_currency_name}
          </Text>

          {Object.keys(conversionData.rates).map((currencyCode) => {
            const currency = conversionData.rates[currencyCode];

            return (
              currency && (
                <React.Fragment key={currencyCode}>
                  <Text className="mt-2">
                    Currency: {currency.currency_name}
                  </Text>
                  <Text className="mt-2">Rate: {currency.rate}</Text>
                  <Text className="mt-2">
                    Rate for Amount: {currency.rate_for_amount}
                  </Text>
                </React.Fragment>
              )
            );
          })}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Currency;
