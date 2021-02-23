import React, { memo,useState } from 'react';
import Button from '../components/Button';
import { Navigation } from '../types';
import CalcButton from '../components/CalcButton';
import CalcDisplay from '../components/CalcDisplay';
import { StyleSheet,View,Text } from 'react-native';
import { logoutUser } from '../plugin/auth';

type Props = {
  navigation: Navigation;
};
 
const Dashboard = ({ navigation }: Props) => {
    
    const _onLogoutPressed = async () => {
      await logoutUser();
      navigation.navigate('LoginScreen');
    }
    const [value, setValue] = useState('0');
    const [operator, setOperator] = useState('');
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');
    const [is_1st_time_operand2, setTruth] = useState(true);
    const [after_calcalution, setAfterCalcTruth] = useState(false);
    const onDigitPress = (digit) => {
      if (operator!==''){
        setOperand2(operand2 + digit);
        if (is_1st_time_operand2){
          setOperand1(value);
          setValue(digit);
          setTruth(false);
        }
        else{
          setValue(value + digit);
        }
      }
      else if(after_calcalution){
        reset();
        setValue(digit);
      }
      else{
        if (value == '0') {
          setValue(digit);
        }else {
          setValue(value + digit);
        }
      }
    }
    const reset = () => {
      setValue('0');
      setOperator('');
      setOperand1('');
      setOperand2('');
      setTruth(true);
      setAfterCalcTruth(false);
    }
    const setEqual = () => {
      let op_tmp1 = 0;
      let op_tmp2 = 0;
      if(operand1.includes('.') || operand2.includes('.')){
        op_tmp1 = (parseFloat(operand1));
        op_tmp2 = (parseFloat(operand2));
      }
      else {
        op_tmp1 = (parseInt(operand1));
        op_tmp2 = (parseInt(operand2));
      }
      if (operator==='+') {
        setValue((op_tmp1 + op_tmp2).toString());
        }
      else if (operator==='-') {
        setValue((op_tmp1 - op_tmp2).toString());
      }
      else if (operator==='*') {
        setValue((op_tmp1 * op_tmp2).toString());
      }
      else if (operator==='/') {
        setValue((op_tmp1 / op_tmp2).toString());
      }
      setOperator('');
      setTruth(true);
      setAfterCalcTruth(true);
    }
    const setNegate = () => {
      setValue((parseInt(value)*(-1)).toString());
    }
    const plus = () => {
      if(after_calcalution) {
        setAfterCalcTruth(false);
        setTruth(true);
        setOperand2('');
      }
      setOperator('+');
      
    }
    const minus = () => {
      if(after_calcalution) {
        setAfterCalcTruth(false);
        setTruth(true);
        setOperand2('');
      }
      setOperator('-');
    }
    const divide = () => {
      if(after_calcalution) {
        setAfterCalcTruth(false);
        setTruth(true);
        setOperand2('');
      }
      setOperator('/');
    }
    const multiply = () => {
      if(after_calcalution) {
        setAfterCalcTruth(false);
        setTruth(true);
        setOperand2('');
      }
      setOperator('*');
    }
    const toPercent = () => {
      setValue((parseInt(value)/100).toString());
    }
    return (
    
    <View style={styles.container}>
      
      <View style={styles.display}>
        <CalcDisplay>{value}</CalcDisplay>
      </View>
      
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
        <CalcButton function_={() => {reset()}} style backgroundColor='#505050' color='white'>C</CalcButton>
          <CalcButton function_={() => {setNegate()}} style backgroundColor='#505050' color='white'>+/-</CalcButton>
          <CalcButton function_={() => {toPercent()}} style backgroundColor='#505050' color='white'>%</CalcButton>
          <CalcButton function_={() => {divide()}} style backgroundColor='#FF9500' color='white'>/</CalcButton>
        </View>
        <View style={styles.buttonRow}>
          <CalcButton function_={() => {onDigitPress('7')}} style backgroundColor='#D4D4D2' color='white'>7</CalcButton>
          <CalcButton function_={() => {onDigitPress('8')}} style backgroundColor='#D4D4D2' color='white'>8</CalcButton>
          <CalcButton function_={() => {onDigitPress('9')}} style backgroundColor='#D4D4D2' color='white'>9</CalcButton>
          <CalcButton function_={() => {multiply()}} style backgroundColor='#FF9500' color='white'>x</CalcButton>
        </View>
        <View style={styles.buttonRow}>
          <CalcButton function_={() => {onDigitPress('4')}} style backgroundColor='#D4D4D2' color='white'>4</CalcButton>
          <CalcButton function_={() => {onDigitPress('5')}} style backgroundColor='#D4D4D2' color='white'>5</CalcButton>
          <CalcButton function_={() => {onDigitPress('6')}} style backgroundColor='#D4D4D2' color='white'>6</CalcButton>
          <CalcButton function_={() => {minus()}} style backgroundColor='#FF9500' color='white'>-</CalcButton>
        </View>
        <View style={styles.buttonRow}>
          <CalcButton function_={() => {onDigitPress('1')}} style backgroundColor='#D4D4D2' color='white'>1</CalcButton>
          <CalcButton function_={() => {onDigitPress('2')}} style backgroundColor='#D4D4D2' color='white'>2</CalcButton>
          <CalcButton function_={() => {onDigitPress('3')}} style backgroundColor='#D4D4D2' color='white'>3</CalcButton>
          <CalcButton function_={() => {plus()}} style backgroundColor='#FF9500' color='white'>+</CalcButton>
        </View>
        <View style={styles.buttonRow}>
          <CalcButton function_={() => {onDigitPress('0')}} style={styles.flex} backgroundColor='#D4D4D2' color='white'>0</CalcButton>
          <CalcButton function_={() => {onDigitPress('.')}} style backgroundColor='#D4D4D2' color='white'>.</CalcButton>
          <CalcButton function_={() => {setEqual()}} style backgroundColor='#FF9500' color='white'>=</CalcButton>
        </View>
        <Button mode="contained" onPress={_onLogoutPressed}>
      logout
    </Button>
      </View>
      </View>
    );
};

const styles = StyleSheet.create({
  display: {flex: 1, justifyContent: 'flex-end'},
  buttonRow: {flexDirection:'row', justifyContent: 'space-between'},
  container: {flex: 1, backgroundColor: 'black'},
  flex: {flex:2},
  buttonContainer: {paddingBottom: 20},
});

export default memo(Dashboard);
