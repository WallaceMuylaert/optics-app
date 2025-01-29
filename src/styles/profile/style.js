import { StyleSheet } from 'react-native';

const createStyles = (colorScheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? '#121212' : '#fff',
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      color: colorScheme === 'dark' ? '#fff' : '#000',
    },
    subtitle: {
      fontSize: 16,
      color: colorScheme === 'dark' ? '#ccc' : '#555',
      marginBottom: 10,
    },
    profileContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    profilePicture: {
      width: 120,
      height: 120,
      borderRadius: 60, // Foto redonda
      marginBottom: 20,
      borderWidth: 3,
      borderColor: colorScheme === 'dark' ? '#fff' : '#000', // Borda que se adapta ao tema
    },
    button: {
      backgroundColor: colorScheme === 'dark' ? '#0066cc' : '#0066cc', // Cor do botão
      padding: 12,
      borderRadius: 6,
      width: '80%',
      marginVertical: 12,
      alignItems: 'center',
      elevation: 3, // Sombras para destacar no modo claro
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    logoutButton: {
      backgroundColor: '#f44336', // Botão vermelho para logout
    },
    activityIndicator: {
      marginTop: 50,
    },
  });
};

export default createStyles;
