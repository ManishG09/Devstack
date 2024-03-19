import React from 'react'

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    
    <main className='flex min-h-screen w-full item-center jusitfy-center'>{children}</main>
  )
}

export default Layout