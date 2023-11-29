import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SignupForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const userData = {
      username,
      password,
    };
    onSubmit(userData);
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign Up" onPress={handleSubmit} />
    </View>
  );
};

export default SignupForm;
