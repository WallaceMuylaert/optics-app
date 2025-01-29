import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, useColorScheme, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createStyles from '../../src/styles/profile/style';

const ProfileScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Função para carregar os dados do usuário
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userToken = await AsyncStorage.getItem('@user_token');
        if (userToken) {
          // Aqui você poderia fazer uma requisição à API para pegar dados do usuário
          // No exemplo, estamos mockando um objeto de usuário
          setUser({
            name: 'João Silva',
            email: 'joao@exemplo.com',
            profilePicture: 'https://randomuser.me/api/portraits/men/98.jpg', // Mock de foto de perfil
            createdAt: '2021-05-10', // Data de cadastro
          });
        } else {
          navigation.navigate('Login');
        }
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os dados do usuário.');
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('@user_token');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível sair. Tente novamente.');
    }
  };

  const handleEditProfile = () => {
    // Navegar para uma tela de edição de perfil
    Alert.alert('Editar Perfil', 'Aqui você pode editar as informações do perfil.');
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colorScheme === 'dark' ? '#fff' : '#000'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de {user ? user.name : 'Usuário'}</Text>

      {user ? (
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: user.profilePicture }}
            style={styles.profilePicture}
          />
          <Text style={styles.subtitle}>E-mail: {user.email}</Text>
          <Text style={styles.subtitle}>Data de Cadastro: {user.createdAt}</Text>

          <TouchableOpacity 
            style={styles.button} 
            onPress={handleEditProfile}>
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, { backgroundColor: '#f44336' }]} 
            onPress={handleLogout}>
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.subtitle}>Carregando...</Text>
      )}
    </View>
  );
};

export default ProfileScreen;
