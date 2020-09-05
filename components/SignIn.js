import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import COLORS from "../shared/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.lightGreen,
  },
  positiveValue: {
    color: COLORS.green,
    fontSize: 36,
  },
  input: {
    borderBottomColor: COLORS.green,
    height: 20,
    borderBottomWidth: 3,
    width: "50%",
  },
  button: {
    backgroundColor: COLORS.darkGreen,
    width: 140,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  signUp: {
      display: 'flex',
      flexDirection: 'row',
  }
});

const SignIn = () => {
  const [email, setEmail] = useState("E-mail");
  const [password, setPassword] = useState("Password");

  return (
    <View style={styles.container}>
      <Text style={styles.positiveValue}>Sign In</Text>
      <TextInput value={email} style={styles.input} />
      <TextInput value={password} style={styles.input} />
      <TouchableOpacity style={styles.button}>
          <Text style={{ color: COLORS.green }}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.signUp}>
        <Text style={{ color: COLORS.white, marginRight: 5 }}>First time here ?</Text>
        <Text style={{ color: COLORS.green }}>Sign up</Text>
      </View>
      <Text style={{ color: COLORS.green }}>Sheet without shit</Text>
    </View>
  );
};

export default SignIn;
