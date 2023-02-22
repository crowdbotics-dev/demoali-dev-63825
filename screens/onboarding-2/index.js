import { ImageBackground } from "react-native";
import React from "react";
import { Text, View, StyleSheet, ScrollView, Image, Pressable } from "react-native";

const Onboarding2 = ({
  navigation
}) => {
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/back.png")} style={styles.back} />
        <Image source={require("./assets/slide.png")} style={styles.slide} />
        <Text />
      </View>

      <View style={styles.imgContainer}>
      <ImageBackground style={styles.ebpuZnct} source={require("./photo-1596387451750-f7bfb51461ef.jpg")} resizeMode="cover"></ImageBackground></View>
      <Text style={styles.title}>Onboarding</Text>
      <View style={styles.descContainer}>
        <Text style={styles.desc}>There is no better way to go about doing this stuff!</Text>
      </View>
      <Button buttonText={"Get started"} />
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 15,
    marginBottom: 30
  },
  back: {
    width: 11.25,
    height: 20,
    resizeMode: "contain",
    marginLeft: -15
  },
  slide: {
    width: 96,
    height: 8,
    resizeMode: "contain"
  },
  title: {
    fontSize: 30,
    marginHorizontal: 25,
    marginTop: 10,
    marginBottom: 10,
    width: 293,
    height: 36
  },
  descContainer: {
    paddingHorizontal: 25
  },
  desc: {
    color: "#757575",
    marginBottom: 5,
    textAlign: "center"
  },
  imgContainer: {
    height: 163,
    width: 244,
    backgroundColor: "#15159a",
    borderRadius: 10,
    alignSelf: "center"
  },
  ebpuZnct: {
    width: 278,
    height: 173
  }
});

const Button = params => {
  const btnStyle = {
    backgroundColor: params.outline ? "#fff" : "#000",
    borderColor: params.outline ? "#000" : "#fff",
    borderWidth: 1
  };
  const btnText = {
    color: params.outline ? "#000" : "#fff",
    width: 135,
    height: 27
  };
  return <View style={buttonStyles.btnContainer}>
      <Pressable style={[buttonStyles.btn, btnStyle]} onPress={() => navigation.navigate("Camera", {})}>
        <Text style={[buttonStyles.btnText, btnText]}>{params.buttonText}</Text>
        <View style={styles.childrenContainer}>{params.children}</View>
      </Pressable>
    </View>;
};

const buttonStyles = StyleSheet.create({
  btnContainer: {
    paddingHorizontal: 40,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 40
  },
  btn: {
    backgroundColor: "#12D790",
    height: 50,
    width: "100%",
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    elevation: 10,
    flexDirection: "row"
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  childrenContainer: {
    justifyContent: "center",
    alignItems: "center"
  }
});
export default Onboarding2;