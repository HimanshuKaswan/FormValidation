import React from 'react'

const User = (props) => {
  return (
    <div className='flex flex-col items-center justify-center bg-gradient-to-br from-purple-600/20 via-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mt-4  hover:from-purple-600/30 hover:via-blue-600/30 hover:to-purple-600/30 transition-colors duration-500 ease-in-out'>
        <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2'>Name: {props.user.name}</h1>
        <p className='text-lg text-white/80'>Email: {props.user.email}</p>
    </div>
  )
}

export default User