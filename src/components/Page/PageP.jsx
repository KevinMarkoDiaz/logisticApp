import React from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'
import RegisterForm from '../auth/RegisterForm'

export const PageP = () => {
    return (
        <>
            <Header />
            <main>
                <Home />
            </main>
            {/* <RegisterForm /> */}
        </>
    )
}
