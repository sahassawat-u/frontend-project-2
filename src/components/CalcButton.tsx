import React, { memo } from 'react';
import { StyleSheet, Text,View, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme';

type Props = {
  children: React.ReactNode;
  style: {},
  color: string,
  backgroundColor: string,
};

const CalcButton = ({ children,style,color,backgroundColor }: Props) => (
    <TouchableOpacity style={[styles.container, {backgroundColor: backgroundColor},{...style}]}>
        <Text style={[styles.text,{color:color}]}>{children}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
      fontSize:30,
      fontWeight: 'bold',
    // fontSize: 16,
    // lineHeight: 26,
    color: 'red',
    // textAlign: 'center',
    // marginBottom: 14,
  },
  container: {
      alignItems: 'center', justifyContent: 'center', 
      width: 80, height:80, borderRadius:40, margin: 5, },
});

export default memo(CalcButton);