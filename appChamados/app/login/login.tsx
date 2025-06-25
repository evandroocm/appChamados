import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Login() {
  return (
    <View className="flex-1 justify-center items-center">
      <Image style={styles.image} source={require('../../assets/images/background.png')}/>
      <View style={styles.containerPai}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <Text className="text-5xl text-dark-200 font-bold">Bem vindo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    
});