import React from 'react'
import { Button } from 'react-native';
import { NativeRouter, Routes, Route, useNavigate } from 'react-router-native'


export default function index() {
    const navigate = useNavigate();
    return (
        <>
            <div>404404404404</div>
            <Button title='路由返回' onPress={() => {
                navigate(-1);
            }} />
        </>
    )
}
