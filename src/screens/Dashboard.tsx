import React, { memo } from 'react';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';
import Background from '../components/Background';
import CalcButton from '../components/CalcButton';
import CalcDisplay from '../components/CalcDisplay';
import { StyleSheet,View } from 'react-native';

type Props = {
  navigation: Navigation;
};
 
const Dashboard = ({ navigation }: Props) => (
  // <Background>
    /* <Logo /> */
    /* <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph> */
    <View style={styles.container}>
      <View style={styles.display}>
        <CalcDisplay>0</CalcDisplay>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <CalcButton style backgroundColor='#505050' color='white'>C</CalcButton>
          <CalcButton style backgroundColor='#505050' color='white'>+/-</CalcButton>
          <CalcButton style backgroundColor='#505050' color='white'>%</CalcButton>
          <CalcButton style backgroundColor='#FF9500' color='white'>/</CalcButton>
        </View>
        <View style={styles.buttonRow}>
          <CalcButton style backgroundColor='#D4D4D2' color='white'>7</CalcButton>
          <CalcButton style backgroundColor='#D4D4D2' color='white'>8</CalcButton>
          <CalcButton style backgroundColor='#D4D4D2' color='white'>9</CalcButton>
          <CalcButton style backgroundColor='#FF9500' color='white'>x</CalcButton>
        </View>
        <View style={styles.buttonRow}>
          <CalcButton style backgroundColor='#D4D4D2' color='white'>4</CalcButton>
          <CalcButton style backgroundColor='#D4D4D2' color='white'>5</CalcButton>
          <CalcButton style backgroundColor='#D4D4D2' color='white'>6</CalcButton>
          <CalcButton style backgroundColor='#FF9500' color='white'>-</CalcButton>
        </View>
        <View style={styles.buttonRow}>
          <CalcButton style backgroundColor='#D4D4D2' color='white'>1</CalcButton>
          <CalcButton style backgroundColor='#D4D4D2' color='white'>2</CalcButton>
          <CalcButton style backgroundColor='#D4D4D2' color='white'>3</CalcButton>
          <CalcButton style backgroundColor='#FF9500' color='white'>+</CalcButton>
        </View>
        <View style={styles.buttonRow}>
          <CalcButton style={styles.flex} backgroundColor='#D4D4D2' color='white'>0</CalcButton>
          <CalcButton style backgroundColor='#D4D4D2' color='white'>.</CalcButton>
          <CalcButton style backgroundColor='#FF9500' color='white'>=</CalcButton>
        </View>
      </View>
      </View>

);

const styles = StyleSheet.create({
  display: {flex: 1, justifyContent: 'flex-end'},
  buttonRow: {flexDirection:'row', justifyContent: 'space-between'},
  container: {flex: 1, backgroundColor: 'black'},
  flex: {flex:1},
  buttonContainer: {paddingBottom: 20},
});

export default memo(Dashboard);
