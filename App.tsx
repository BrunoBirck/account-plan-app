import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import AppNavigator from './src/navigation';
import { store, persistor } from './src/store/store';
import { Theme } from './src/theme/theme';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <AppNavigator />
          <StatusBar backgroundColor={Theme.primary200} style='light' />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};
