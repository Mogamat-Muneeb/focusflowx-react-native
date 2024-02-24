import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./home.style";
const HomePage = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.userName}>FFx</Text>
            <Text style={styles.userName}>Setting</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
