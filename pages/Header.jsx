import React from 'react'
import NavBer from './NavBer'

function Header() {
  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-fixed bg-center h-screen ">
        <NavBer/>
    </div>
  )
}

export default Header