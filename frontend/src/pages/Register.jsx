import React from 'react'
import {FaUser} from 'react-icons/fa'
function Register() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })
    const {name, email ,password, password2} = formData
  return (
    <>
    <section className='heading'>
        <FaUser /> Register
    </section>
    </>
  )
}

export default Register