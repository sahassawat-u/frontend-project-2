import React, { memo } from 'react';
import { StyleSheet, Text,View, TouchableOpacity } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const CalcDisplay = ({ children }: Props) => (
    <View style={styles.container}>
        <Text style={styles.display}>{children}</Text>
    </View>
);

const styles = StyleSheet.create({
  display: {fontSize:70, color:'white', textAlign: 'right',},  
  container: {padding:20},
});

export default memo(CalcDisplay);