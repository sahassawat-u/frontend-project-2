import React, { memo } from 'react';
import { StyleSheet, Text,View, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme';
import PropTypes from 'prop-types';

type Props = {
  function_: () => void,
  children: React.ReactNode;
  style: {},
  color: string,
  backgroundColor: string,
};

const CalcButton = ({ children,style,color,backgroundColor,function_ }: Props) => (
    <TouchableOpacity onPress = {function_}
     style={[styles.container, {backgroundColor: backgroundColor},{...style}]}>
        <Text style={[styles.text,{color:color}]}>{children}</Text>
    </TouchableOpacity>
);
// export default class CalcButton extends React.Component {
//   static defaultProps = {
//     onPress: function() { },
//     text: "",
//     color: "white",
//     backgroundColor: "black",
//     style: {},
//   }

//   render() {
//     return (
//       <TouchableOpacity onPress={CalcButton.defaultProps.onPress}
//         style = {[styles.container, { backgroundColor: CalcButton.defaultProps.backgroundColor}]}>
//           <Text style={styles.text}>{CalcButton.defaultProps.text}</Text>
//       </TouchableOpacity>
//     );
//   }
// }

const styles = StyleSheet.create({
  text: {
      fontSize:30,
      fontWeight: 'bold',
    // fontSize: 16,
    // lineHeight: 26,
    // color: 'red',
    // textAlign: 'center',
    // marginBottom: 14,
  },
  container: {
      alignItems: 'center', justifyContent: 'center', 
      width: 80, height:80, borderRadius:40, margin: 5, },
});

export default memo(CalcButton);