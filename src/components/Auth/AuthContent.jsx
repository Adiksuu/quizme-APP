import React, { useState } from 'react'
import LoginAuthForm from './LoginAuthForm'
import RegisterAuthForm from './RegisterAuthForm'

export default function AuthContent() {
    const [authState, setAuthState] = useState('login')

  return (
    <section className="auth">
        {authState === 'login' ? <LoginAuthForm setAuthState={setAuthState} /> : <RegisterAuthForm setAuthState={setAuthState} />}
    </section>
  )
}
