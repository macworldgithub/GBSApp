import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = () => {
    console.log('Signing up with', email, password);
  };

  return (
    <ScrollView contentContainerStyle={tw`flex-grow justify-center px-6 bg-white py-2 mb-20`}>
      {/* Heading */}
      <Text style={tw`text-2xl font-bold text-black mb-2`}>Create new{"\n"}account</Text>
      <Text style={tw`mb-4 text-sm text-gray-500`}>
        Already have an account?{' '}
        <Text style={tw`text-red-500`}>Sign In</Text>
      </Text>

      {/* Email Input */}
      <View style={tw`flex-row items-center border rounded-lg px-3 py-2 mb-4 bg-gray-100`}>
        <FontAwesome name="envelope" size={16} color="#6B7280" />
        <TextInput
          style={tw`flex-1 ml-2 text-sm text-gray-900`}
          placeholder="Enter your email"
          placeholderTextColor="#9CA3AF"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Password Input */}
      <View style={tw`flex-row items-center border border-red-300 rounded-lg px-3 py-2 mb-4 bg-gray-100`}>
        <FontAwesome name="lock" size={16} color="#6B7280" />
        <TextInput
          style={tw`flex-1 ml-2 text-sm text-gray-900`}
          placeholder="Enter your password"
          placeholderTextColor="#9CA3AF"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather name={showPassword ? 'eye-off' : 'eye'} size={16} color="#6B7280" />
        </TouchableOpacity>
      </View>

      {/* Remember me */}
     <View style={tw`flex-row justify-between items-center mb-6`}>
  <TouchableOpacity
    onPress={() => setRememberMe(!rememberMe)}
    style={tw`flex-row items-center`}
  >
    {/* ✅ Checkbox toggle with red checkmark icon */}
    <View style={tw`w-4 h-4 mr-2 border border-gray-400 rounded items-center justify-center`}>
      {rememberMe && (
        <FontAwesome name="check" size={10} color="#EF4444" />
      )}
    </View>
    <Text style={tw`text-sm text-gray-700`}>Remember me</Text>
  </TouchableOpacity>
</View>

      {/* Sign Up Button */}
      <TouchableOpacity
        onPress={handleSignUp}
        style={tw`bg-red-500 rounded-lg py-3 mb-6 items-center`}
      >
        <Text style={tw`text-white font-bold`}>Sign Up</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View style={tw`flex-row items-center mb-4`}>
        <View style={tw`flex-1 h-px bg-gray-300`} />
        <Text style={tw`px-2 text-sm text-gray-400`}>or sign up with</Text>
        <View style={tw`flex-1 h-px bg-gray-300`} />
      </View>

      {/* Social Buttons */}
      <View style={tw``}>
        <TouchableOpacity style={tw`flex-row items-center justify-center border rounded-lg py-2`}>
          <Image source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }} style={{ width: 20, height: 20, marginRight: 8 }} />
          <Text style={tw`text-sm`}>Sign up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex-row items-center justify-center border rounded-lg py-2`}>
          <Image source={{ uri: 'https://img.icons8.com/color/48/facebook-new.png' }} style={{ width: 20, height: 20, marginRight: 8 }} />
          <Text style={tw`text-sm`}>Sign up with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex-row items-center justify-center border rounded-lg py-2`}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/mac-os.png' }} style={{ width: 20, height: 20, marginRight: 8 }} />
          <Text style={tw`text-sm`}>Sign up with Apple</Text>
        </TouchableOpacity>
      </View>

      {/* Terms & Policy */}
      <Text style={tw`text-xs text-center text-gray-500 mt-6`}>
        By clicking “Sign Up” you agree to Recognotes{' '}
        <Text style={tw`text-red-500`}>Term of Use</Text> and{' '}
        <Text style={tw`text-red-500`}>Privacy Policy</Text>
      </Text>
    </ScrollView>
  );
}
