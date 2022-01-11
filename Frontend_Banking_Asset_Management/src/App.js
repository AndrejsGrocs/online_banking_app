import React from 'react'
import MainRouter from './hoc/MainRouter'
import { createContext, useEffect, useState } from 'react'


export const AppContext = createContext({
    username:'',
    loggedIn: false,
    handleLogin: ()=>{},
})

export default function App() {
    return (
        <div>
            <MainRouter />
        </div>
    )
}
