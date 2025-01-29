import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, Animated, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import createStyles from '../../src/styles/styles';
import Constants from 'expo-constants';
import { Image } from 'react-native'; // Importe o Image para carregar a logo

const API_URL = Constants.expoConfig.extra.API_URL;

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado para controle de carregamento
  const [logoPosition] = useState(new Animated.Value(-100)); // Inicia logo fora da tela
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);

  useEffect(() => {
    // Animação da logo de cima para baixo
    Animated.timing(logoPosition, {
      toValue: 0, // Faz a logo descer para a posição original
      duration: 1000, // Duração da animação (1 segundo)
      useNativeDriver: true, // Usar o driver nativo para melhor performance
    }).start();
  }, [logoPosition]);

  const handleLogin = async () => {
    if (email && password) {
      setIsLoading(true); // Inicia o carregamento
      try {
        const response = await fetch(`${API_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        const data = await response.json();
        setIsLoading(false); // Finaliza o carregamento

        if (response.ok) {
          await AsyncStorage.setItem('@user_token', data.token);
          if (data.user_type === 'user') {
            navigation.navigate('HomeStack');
          } else if (data.user_type === 'supplier') {
            navigation.navigate('SupplierHome');
          }
        } else {
          Alert.alert('Erro', 'Credenciais inválidas');
        }
      } catch (error) {
        setIsLoading(false); // Finaliza o carregamento mesmo em caso de erro
        Alert.alert('Erro', 'Não foi possível realizar o login. Tente novamente.');
      }
    } else {
      Alert.alert('Erro', 'Preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Animação para a logo */}
      <Animated.View style={{ transform: [{ translateY: logoPosition }] }}>
        <Image
          source={require('../../src/img/logo.jpg')} // Caminho para a logo
          style={{
            width: 150, // Ajuste o tamanho da logo
            height: 150, // Ajuste o tamanho da logo
            borderRadius: 75, // Metade do tamanho para tornar a logo arredondada
          }}
        />
      </Animated.View>
      
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>
      <TextInput 
        style={styles.input} 
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput 
          style={[styles.input, { flex: 1 }]} 
          placeholder="Senha"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={handleLogin}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <Ionicons 
            name={showPassword ? 'eye-off' : 'eye'} 
            size={24} 
            color="gray" 
          />
        </TouchableOpacity>
      </View>

      {/* Exibe o indicador de carregamento caso isLoading seja true */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
