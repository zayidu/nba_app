import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class NewsArticleComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>News Article</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
});

export default NewsArticleComponent;
