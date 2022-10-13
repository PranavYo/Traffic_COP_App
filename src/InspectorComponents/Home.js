import React from 'react'
import {useAuth} from '../LoginComponents/AuthProvider'


function Home() {
  let auth = useAuth();

  return (
    <div>Home {auth.user}</div>
  )
}

export default Home