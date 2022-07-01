import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';


export function CardIngredientes(props) {
  const {title, description} = props;
  return (
    <View style={styles.content}>
      <View style={styles.card}>
        <View style={styles.detail}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.description}>dsa</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    width: '90%',
    height: '90%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.SECUNDARY_COLOR_DARK,
  },

  detail: {
    width: '90%',
    height: '90%',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    color: 'white',
  },
  description: {
    width: '90%',
    fontSize: 12,
    color: 'white',
  },
});
