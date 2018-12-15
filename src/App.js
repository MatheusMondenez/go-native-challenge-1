import React, { Component } from "react";
import { Platform, View, Text, ScrollView, StyleSheet } from "react-native";
import Post from "./components/Post";
import "config/Reactotron";
import "config/DevTools";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Aprendendo React Native",
        author: "Matheus Mondenez",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 2,
        title: "Aprendendo React Native",
        author: "Matheus Mondenez",
        content:
          "Auctor urna nunc id cursus. Blandit turpis cursus in hac. Viverra aliquet eget sit amet tellus cras adipiscing enim."
      },
      {
        id: 3,
        title: "Aprendendo React Native",
        author: "Matheus Mondenez",
        content:
          "Egestas maecenas pharetra convallis posuere. Tristique magna sit amet purus gravida quis."
      },
      {
        id: 4,
        title: "Aprendendo React Native",
        author: "Matheus Mondenez",
        content:
          "At imperdiet dui accumsan sit amet nulla facilisi. Et netus et malesuada fames ac turpis egestas integer."
      },
      {
        id: 5,
        title: "Aprendendo React Native",
        author: "Matheus Mondenez",
        content:
          "In vitae turpis massa sed elementum. In nibh mauris cursus mattis molestie a iaculis. Arcu cursus vitae congue mauris rhoncus aenean vel elit."
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative App</Text>
        </View>
        <ScrollView>
          {this.state.posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EE7777"
  },
  header: {
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    // No iOS precisamos aplicar 20px de padding superior
    // já que a Status Bar não joga o conteúdo do App
    // pra baixo automaticamente
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20
      },
      android: {
        height: 56,
        paddingTop: 0
      }
    })
  },
  headerTitle: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold"
  }
});
