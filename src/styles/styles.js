import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Função para tornar o design responsivo
const scale = width / 375; // A largura de referência para o design responsivo (padrão 375px)

const createStyles = (colorScheme) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#e8f0ff',
    padding: 16,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: Math.min(28 * scale, 32), // Responsivo
    fontWeight: 'bold',
    color: colorScheme === 'dark' ? '#e0e0e0' : '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: Math.min(16 * scale, 20), // Responsivo
    color: colorScheme === 'dark' ? '#bbb' : '#666',
    marginBottom: 24,
  },
  input: {
    width: Platform.OS === 'web' ? '50%' : '90%', // Ajuste para telas maiores
    height: Math.min(48 * scale, 56), // Responsivo
    borderColor: colorScheme === 'dark' ? '#555' : '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: colorScheme === 'dark' ? '#2a2a2a' : '#fff',
    fontSize: Math.min(16 * scale, 18), // Responsivo
    color: colorScheme === 'dark' ? '#e0e0e0' : '#333',
  },
  button: {
    width: Platform.OS === 'web' ? '50%' : '90%', // Ajuste para telas maiores
    height: Math.min(48 * scale, 56), // Responsivo
    backgroundColor: colorScheme === 'dark' ? '#2a8bd3' : '#4a90e2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: Math.min(16 * scale, 18), // Responsivo
    fontWeight: 'bold',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: Platform.OS === 'web' ? '50%' : '90%', // Ajuste para desktop
  },
  inputPassword: {
    width: '100%',
    paddingRight: 40, // Adiciona espaço para o ícone
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -20 }],
  },
});

export default createStyles;
