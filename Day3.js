import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from "react-native";
import * as Animatable from "react-native-animatable";
import Day3Styles from "./Day3Styles";
import categories from "./CategoryData";
import pokemons from "./PokemonData";

class Day3 extends Component {
  render() {
    return (
      <View style={Day3Styles.day1Container}>
        <StatusBar barStyle="light-content" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: "100%" }}
        >
          <View style={Day3Styles.day3HeaderContainer}>
            <View style={Day3Styles.day3HeaderTopContainer}>
              <View style={Day3Styles.day3HeaderTopProfileContainer}>
                <View style={{ paddingRight: 4 }}>
                  <TouchableOpacity
                    onPress={() => console.log("Profile")}
                    activeOpacity={0.6}
                  >
                    <Image
                      source={require("./images/avatar.png")}
                      style={{ width: 40, height: 40 }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ paddingLeft: 4 }}>
                  <Text style={Day3Styles.day3HeaderTopProfileText}>
                    Olá, Renato Lucena
                  </Text>
                  <Text style={Day3Styles.day3HeaderTopHeaderLabel}>
                    Level 100
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ paddingRight: 8 }}>
                  <TouchableOpacity
                    onPress={() => console.log("Location")}
                    activeOpacity={0.6}
                  >
                    <Image
                      source={require("./images/ic_location.png")}
                      style={{ width: 32, height: 32 }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ paddingLeft: 8 }}>
                  <TouchableOpacity
                    onPress={() => console.log("Notification")}
                    activeOpacity={0.6}
                  >
                    <Image
                      source={require("./images/ic_notification.png")}
                      style={{ width: 32, height: 32 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={Day3Styles.day3SearchBoxContainer}>
              <Image
                source={require("./images/ic_search.png")}
                style={Day3Styles.day3SeachBoxIcon}
              />
              <TextInput
                style={Day3Styles.day3SearchBoxInput}
                placeholder="Search pokemon name or id"
                placeholderTextColor="#8b8997"
                autoCorrect={false}
              />
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 8 }}
            >
              <View style={Day3Styles.day3CategoryContainer}>
                {categories.map((category, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => console.log(category.name)}
                    activeOpacity={0.6}
                  >
                    <View
                      style={[
                        Day3Styles.day3ChipContainer,
                        {
                          backgroundColor: category.active
                            ? "#e8e7ea"
                            : "#2d2c44"
                        }
                      ]}
                    >
                      <Text
                        style={[
                          Day3Styles.day3ChipText,
                          { color: category.active ? "#16142f" : "#ffffff" }
                        ]}
                      >
                        {category.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          <View
            style={{
              backgroundColor: "#16142f"
            }}
          >
            <View style={Day3Styles.day3ContentContainer}>
              <View style={Day3Styles.day3CardContainer}>
                {pokemons.map((pokemon, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => console.log(pokemon.name)}
                    activeOpacity={0.9}
                  >
                    <View style={Day3Styles.day3Card}>
                      <Animatable.View
                        animation="zoomIn"
                        easing="ease-in-out"
                        iterationCount="1"
                      >
                        <View
                          style={{
                            flexDirection: "column",
                            justifyContent: "space-between"
                          }}
                        >
                          <View style={{ paddingBottom: 25 }}>
                            <Text
                              style={[
                                Day3Styles.day3CardTitle,
                                {
                                  paddingBottom: 4
                                }
                              ]}
                            >
                              {pokemon.name}
                            </Text>
                            <Text style={Day3Styles.day3CardLabel}>
                              {pokemon.type}
                            </Text>
                          </View>
                          <View style={{ paddingTop: 25 }}>
                            <Text style={Day3Styles.day3CardTitle}>
                              #{pokemon.number}
                            </Text>
                          </View>
                        </View>
                      </Animatable.View>
                      <Animatable.View
                        animation="fadeInUp"
                        easing="ease-in-out"
                        iterationCount="1"
                      >
                        <Image
                          source={pokemon.image}
                          style={Day3Styles.day3CardImage}
                        />
                      </Animatable.View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Day3;
