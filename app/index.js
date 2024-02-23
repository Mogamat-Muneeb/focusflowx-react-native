import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Hello Adrian</Text>
          <Text>Find your perfect job</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
