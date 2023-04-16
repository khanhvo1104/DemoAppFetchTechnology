import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

const Card = ({children}: PropsWithChildren): JSX.Element => {
  return <View style={[styles.card, styles.shadowProp]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    width: '100%',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default Card;
