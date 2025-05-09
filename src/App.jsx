import React, { useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import User from './components/User'

const App = () => {

const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

  const [error, setError] = useState('')
  const [users, setUsers] = useState([])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long')
      return
    } else if (formData.password !== formData.confirmPassword) {
      setError('Password and confirm password must be same')
      return
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(formData.password)) {
      setError('Password must contain at least one special character')
      return
    } else if (!/[A-Z]/.test(formData.password)) {
      setError('Password must contain at least one uppercase letter')
      return
    } else if (!/[0-9]/.test(formData.password)) {
      setError('Password must contain at least one number')
      return
    }
    else {
      setError('')
    }

    setUsers([...users, {name: formData.name, email: formData.email, password: formData.password}])

    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    })

    toast.success('Sign up successful ✅', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }

  return (
    <>
      <div className='h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 overflow-hidden'>
        <div className='bg-white/10 backdrop-blur-lg w-96 rounded-2xl p-8 shadow-2xl border border-white/20'>
          <form className='flex flex-col gap-4' onSubmit={submitHandler}>
            <h2 className='text-3xl font-bold text-white text-center mb-6'>Welcome</h2>
            <input 
              className='bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition' 
              required
              name='name'
              type="text" 
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange}
            />
            <input 
              className='bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition'
              required
              name='email'
              type="email" 
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
            />
            <input 
              className='bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition'
              required
              name='password'
              type="password" 
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
            />
            <input 
              className='bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition'
              required
              name='confirmPassword'
              type="password" 
              placeholder='Confirm your password'
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            {error && <p className='text-lg'>*{error}</p>}
            <button 
              className='bg-white text-purple-600 rounded-lg mt-2 w-full px-4 py-3 text-xl font-bold hover:bg-white/90 transition-colors duration-200'
              type='submit'
            >
              Sign Up
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>      
      <div className='overflow-hidden'>
        {users.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </>
  )
}

export default App