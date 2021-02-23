import React, { memo,useState } from 'react'
import { StyleSheet, Text, View ,TouchableOpacity, Image} from 'react-native';
import Background from '../components/Background'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../core/utils'
import { sendEmailWithPassword } from '../plugin/auth'
import Toast from '../components/Toast'

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ value: '', type: '' })
  // const BackButton = (
  //   <TouchableOpacity onPress={() => navigation.goBack()} >
  //   {/* <Image style={styles.image} source={require('../assets/arrow_back.png')} /> */}
  //   <Text>go back</Text>
  //   </TouchableOpacity>
  // )
  const sendResetPasswordEmail = async () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    setLoading(true)
    const response = await sendEmailWithPassword(email.value)
    if (response.error) {
      setToast({ type: 'error', message: response.error })
    } else {
      setToast({
        type: 'success',
        message: 'Email with password has been sent.',
      })
    }
    setLoading(false)
  }

  return (
    <Background>
      {/* <BackButton /> */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text>go back</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.container}>
        <Image style={styles.image} source={require('../assets/arrow_back.png')} />
      {/* <Text>go back</Text> */}
      </TouchableOpacity>
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        loading={loading}
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
      <Toast {...toast} onDismiss={() => setToast({ value: '', type: '' })} />
    </Background>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
})
export default memo(ForgotPasswordScreen)
