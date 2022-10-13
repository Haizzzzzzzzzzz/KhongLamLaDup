import React, { Component, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
const windownWidth = Dimensions.get("window").width;
const windownHeight = Dimensions.get("window").height;

export default Login = () => {
  return (
    <ImageBackground
      style={{ height: "100%", width: "100%" }}
      source={require("../Image/pexels-cliford-mervil-2469122.jpg")}
      resizeMode="stretch"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: "100%", width: "100%" }}>
          {/*Email vs password*/}
          <View
            style={{
              width: "100%",
              height: "20%",
              //backgroundColor: "green",
              marginTop: 0.3 * windownHeight,
              alignItems: "center",
            }}
          >
            {/*Email*/}
            <View
              style={{
                width: "70%",
                height: 30,
                flexDirection: "row",
                // borderWidth: 1,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "white" }}>Email</Text>
              <TextInput
                style={{
                  height: "100%",
                  width: "70%",
                  borderBottomColor: "white",
                  borderBottomWidth: 1,
                  paddingLeft: 3,
                  color: "white",
                }}
                autoCapitalize="none"
              />
            </View>

            {/*Password*/}
            <View
              style={{
                width: "70%",
                height: 30,
                flexDirection: "row",
                // borderWidth: 1,
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 15,
              }}
            >
              <Text style={{ color: "white" }}>Password</Text>
              <TextInput
                style={{
                  height: "100%",
                  width: "70%",
                  borderBottomColor: "white",
                  borderBottomWidth: 1,
                  paddingLeft: 3,
                  paddingRight: 33,
                  color: "white",
                }}
                autoCapitalize="none"
                secureTextEntry={true}
              />

              {/*hien thi mat khau*/}
              <TouchableOpacity
                style={{
                  height: "100%",
                  width: 30,
                  position: "absolute",
                  right: 0,
                }}
                onPress={() => {}}
              >
                <Image
                  source={require("../Image/Mat-removebg-preview.png")}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/*Button Login and register*/}

          <View
            style={{
              width: "100%",
              height: "20%",
              // borderWidth: 2,
              marginTop: 0.15 * windownHeight,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/*Dang Nhap*/}
            <TouchableOpacity
              style={{
                height: "30%",
                width: "60%",
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 100,
                backgroundColor: "#222222",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>Đăng Nhập</Text>
            </TouchableOpacity>

            {/*Dang Ky*/}
            <TouchableOpacity
              style={{
                height: "30%",
                width: "60%",
                borderWidth: 1,
                borderColor: "white",
                marginTop: 20,
                borderRadius: 100,
                backgroundColor: "#222222",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>Đăng Ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
