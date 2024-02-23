

import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link, Outlet, useLocation } from 'react-router-native';

export default function index() {
    const insets = useSafeAreaInsets();

    const {state, pathname} = useLocation()

    useEffect(() => {
        console.log('first111 ', state)
        // alert(pathname)
    }, [])
    console.log(insets)
    return (
        <View style={{
            ...styles.container, 
            ...{
                position: 'absolute',
                top: insets.top,
                bottom: insets.bottom,
                left: insets.left,
                right: insets.right
            }
        }}>
            <Text style={{
                color: '#10a5fc',
            }}>{pathname}Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
            <Link to="/404">
                <Text>404</Text>
            </Link>
            {/* 渲染子路由 */}
            {/* <Outlet /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },  
});
