import { useState, useEffect, useRef, Fragment } from 'react'
import { useRoutes, useNavigate, useLocation } from 'react-router-native'

import { connect } from 'react-redux'

import { routes } from './index'

import { getToken } from '@/routes'

import { AnyKey } from '@/types'

import { routerGuardBus } from '@/utils/bus'

// import {message} from "antd"

function FrontendAuth(prosp: AnyKey) {

    const {loginFlag} = prosp

    const element = useRoutes(routes)

    // const {pathname} = useLocation()

    // const flag: React.MutableRefObject<null | true> = useRef(null)
    // useEffect(() => {
    //     if(!flag.current){
    //         flag.current = true
    //     } else {
    //         console.log("页面更新")
    //     }
    // })

    // 路由守卫
    // useEffect(() => {
    //     if (window.location.pathname != '/login' && !getToken()) {
    //         // routerGuardBus.emit("clearLoginInfo")
    //         // message.info('请登录')
    //     }
    // }, [pathname])

    // useEffect(() => {
    //     setKey(nanoid())
    //     console.log('促使路由更新', loginFlag)
    // }, [loginFlag])

    // return (
    //     // <Fragment key={loginFlag}>
    //     <Fragment key={key}>
    //         {element}
    //     </Fragment>
    // )

    return element
}

export default connect(
    (state: AnyKey) => ({
        loginFlag: state.loginFlag
    }),
) (FrontendAuth)
