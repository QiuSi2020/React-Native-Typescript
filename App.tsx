import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './common/Main';
import NotFound from './common/404';
import { NativeRouter, Routes, Route, useNavigate, useRoutes, Navigate, RouteProps, Router } from 'react-router-native'
import { useEffect } from 'react';
import { APIGetIndexData } from './request/api';
import { Provider } from 'react-redux'
import store from './redux'
import { useSelector } from 'react-redux'
// import { NavigationContainer } from '@react-navigation/native';

import RouterGuard from '@/routes/RouterGuard'

import registerRootComponent from 'expo/build/launch/registerRootComponent';
import router from "react-router-native";

function App(): React.JSX.Element {
  // const navigate = useNavigate();

  useEffect(() => {
    getData();
    // console.log('redux中的值', useSelector((state: any) => state.count))
    // console.log('Constants', Constants)
    // console.log('navigate', )
    // router.currentRoute.value.name
  }, [])

  const getData = async () => {
    // let res = await APIGetIndexData();
    // console.log('请求的', res);
  }

  return (
      <SafeAreaProvider>
        <Provider store={store}>
          {/* <NavigationContainer> */}
            <NativeRouter>
              <RouterGuard />
            </NativeRouter>
          {/* </NavigationContainer> */}
        {/* <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
        <Main /> */}
        {/* <Text onPress={() => {
          console.log('点击事件');
          navigate("/404")
        }}>点击事件</Text> */}
        </Provider>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(App);
