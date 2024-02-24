import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import HomePage from "./components/Home/homePage";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <SafeAreaView>
        <HomePage />
      </SafeAreaView>
    </>
  );
};

export default Home;
