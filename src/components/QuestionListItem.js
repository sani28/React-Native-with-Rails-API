import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window'); //grab the actual value of width and height of the phone device

function QuestionListItem (props) {
  const {title, author_name} = props;
  return (
    <View style={{flexDirection:'row', paddingTop: 5, paddingBottom: 5}}>
      <View style={{marginRight: 5}}>
        <Image style={{width: 50, height: 50, borderRadius: 5}} source={{uri: 'https://i.imgur.com/e9wMaRx.jpg'}} />
      </View>

      <View style ={{flex: 0}}>
        <Text style={{ fontWeight: 'bold', width: width * 0.8}} ellipsizeMode='tail' numberOfLines={1}>{title}</Text>
        <Text>{author_name}</Text>
      </View>
    </View>
  );
}

export default QuestionListItem;
