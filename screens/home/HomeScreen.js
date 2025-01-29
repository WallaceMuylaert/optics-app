import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, BackHandler, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createStyles from '../../src/styles/styles';

const HomeScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('@user_token');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível sair. Tente novamente.');
    }
  };

  // Prevenir o comportamento padrão do botão de voltar
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      Alert.alert('Atenção', 'Você não pode voltar para a tela de login.');
      return true; // Impede a ação de voltar
    });

    return () => backHandler.remove(); // Remove o listener ao desmontar
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home!</Text>
      <Text style={styles.subtitle}>Você está na página inicial</Text>
    </View>
  );
};

export default HomeScreen;
