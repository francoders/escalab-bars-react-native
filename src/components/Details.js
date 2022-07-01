import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './../screens/Ingredient/IngredientScreen/IngredientScreen.style';

export function Details(props) {
  const {title, description, URL} = props;
  return (
    <View style={styles.content}>
      <View style={styles.card}>
        <View style={styles.detail}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.cardDetail}>
            <Image style={styles.img} source={{uri: URL}} />
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
