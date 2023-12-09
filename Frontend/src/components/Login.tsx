import React, { useState, ChangeEvent } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      onLogin();
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2 bg-[#ADD1B9]">

					<div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
						<h1 className='text-5xl font-semibold'>Gestión Comunitaria</h1>
						<p className='font-medium text-lg text-gray-500 mt-4'>Bienvenid@! Ingrese sus credenciales.</p>
						<div className='mt-8'>
							<div>
								<label className='text-lg font-medium'>Usuario</label>
								<input
									className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
									placeholder='Ingrese su usuario'
									value={username}
									onChange={handleUsernameChange}
								/>
							</div>
							<div>
								<label className='text-lg font-medium'>Contraseña</label>
								<input
									className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
									placeholder='Ingrese su contraseña'
									type='password'
									value={password}
									onChange={handlePasswordChange}
								/>
							</div>
							<div className='mt-8 flex flex-col'>
								<button
									className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-emerald-600 text-white text-lg font-bold'
									onClick={handleLogin}
								>
									Entrar
								</button>
							</div>
						</div>
					</div>
          
        </div>
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
            <div className="w-60 h-60 bg-gradient-to-tr from-emerald-400 to-emerald-950 rounded-full animate-spin"/>
            <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/>
        </div>
    </div>
  )
}

export default Login