import * as React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

const HellixFont = {
  normal: 'Regular',
  bold: 'Bold',
  '100': 'Thin',
  '200': 'Thin',
  '300': 'Light',
  '400': 'Light',
  '500': 'Medium',
  '600': 'SemiBold',
  '700': 'SemiBold',
  '800': 'ExtraBold',
  '900': 'ExtraBold',
};

const CustomText = (props: TextProps) => {
  const {fontWeight = '400', fontStyle} = StyleSheet.flatten(props.style || {});

  const fontFamily = `Hellix-${HellixFont[fontWeight]}${
    fontStyle === 'italic' ? 'MediumItalic' : ''
  }`;

  return <Text {...props} style={[props.style, {fontFamily}]} />;
};

export default CustomText;
