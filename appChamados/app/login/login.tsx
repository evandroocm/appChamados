import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Login() {
  return (
    <View className="flex-1 justify-center items-center">
      <View style={styles.logoContainer}>

      </View>
      <Text className="text-5xl text-dark-200 font-bold">Bem vindo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    
  }
});