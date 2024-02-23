
import { APIGetIndexData } from '@/request/api';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';
import http from '@/request/new'
// import http from '@/request'

export default function index() {

    useEffect(() => {
        // const currentRouteName = navigation.getCurrentRoute().name;
        // console.log(pathname)

        http({
            url: '/dataOne',
            method: 'get',
            data: {},
            headers: {}
            // params: {
            //     id: '001'
            // }
        }).then((res: any) => {
            console.log('我是数据', res)
        })

        getData()
    }, [])

    const getData = async () => {
        let res = await APIGetIndexData();
        console.log('请求的', res);
    }

    const navigate = useNavigate();
    // const {pathname} = useLocation()

    const stateRouting = () => {
        const news = {
            id: '001',
            name: '关羽'
        }
        navigate(`/main`, {
            // replace: false,
            state: {
                id: news.id,
                name: news.name,
            }
        })
    }

    return (
        <View style={{
            padding: 100
        }}>
            <Text>登录页</Text>
            <Text onPress={stateRouting}>点击事件</Text>
        </View>
    )
}
