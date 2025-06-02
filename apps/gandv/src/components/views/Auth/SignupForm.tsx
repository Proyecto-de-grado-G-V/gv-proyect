'use client'

import { useState } from 'react';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/firebase'; 
import { setDoc, doc } from 'firebase/firestore'; 
import { useRouter } from 'next/navigation'; 
import '../../../styles/authSection.css';

export default function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const router = useRouter();  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
      }
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await setDoc(doc(db, 'users', user.uid), {
        username: username,
        email: email
      });
  
      router.push('/dashboard'); 
      alert('¡Usuario registrado con éxito!');
    } catch (error: unknown) {
      console.error(error);
  
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Ocurrió un error desconocido');
      }
    }
  };

  return (
    <div className='container-auth'>
      <div className='auth-right'>
        <form className='auth-form' onSubmit={handleSignup}>
          <h2 className='auth-title'>Registro</h2>
          <input
            className='auth-input'
            type='text'
            placeholder='Nombre de usuario'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            className='auth-input'
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div className="password-container">
            <input
              className='auth-input'
              type={passwordVisible ? 'text' : 'password'}
              placeholder='Contraseña'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
              aria-label="Mostrar/Ocultar contraseña"
            >
              {passwordVisible ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <div className='checkbox'>
            <input
              type='checkbox'
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
            />
            <label>Acepto los términos y condiciones</label>
          </div>

          <button className='auth-button' disabled={!accepted}>
            Registrarse
          </button>
          <div className='auth-footer'>
            <span>¿Ya tienes una cuenta? </span>
            <Link href='/login'>Inicia Sesión</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
