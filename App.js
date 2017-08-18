import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Question } from './src/utilities/requests';
import QuestionsIndexScreen from './src/components/screens/QuestionsIndexScreen.js'

export default class App extends React.Component {
  componentDidMount() {
    Question
      .getAll()
      .then(questions =>  console.log(questions))
  }

  render() {
    return (
      <View style={styles.container}>
      <QuestionsIndexScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
