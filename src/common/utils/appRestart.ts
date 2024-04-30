import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import RNRestart from 'react-native-restart';

export function restartApp() {
  RNRestart.Restart();
}

export async function clearDataAndRestartApp() {
  await EncryptedStorage.clear();
  await AsyncStorage.clear();
  RNRestart.Restart();
}
