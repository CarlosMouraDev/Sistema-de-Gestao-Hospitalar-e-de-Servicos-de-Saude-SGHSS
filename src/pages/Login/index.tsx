import { useEffect, useState } from 'react';
import InputText from '../../components/InputText';
import clsx from 'clsx';
import { useNavigate } from 'react-router';
import Button from '../../components/Button';

function Login() {
  useEffect(() => {
    document.title = 'Sistema De Saúde | Login';
  }, []);

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (usuario === 'admin' && senha === '123') {
      navigate('/admin');
    } else if (usuario === 'medico' && senha === '123') {
      navigate('/doctor');
    } else if (usuario === 'paciente' && senha === '123') {
      navigate('/patient');
    } else {
      setErro('Usuário ou senha incorretos.');
    }
  };

  return (
    <div>
      <h1 className='flex items-center justify-center mt-16 text-5xl'>Login</h1>
      <div
        className={clsx(
          'flex items-center justify-center',
          'text-center max-w-sm mt-12 mb-32 mx-auto',
        )}
      >
        <form onSubmit={handleLogin} className='flex-1 flex flex-col gap-6'>
          <InputText
            type='text'
            name='username'
            labelText='Usuário'
            placeholder='Seu usuário'
            disabled={false}
            value={usuario}
            onChange={e => setUsuario(e.target.value)}
          />

          <InputText
            type='password'
            name='password'
            labelText='Senha'
            placeholder='Sua senha'
            disabled={false}
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />

          {erro && <p className='text-red-500 text-sm'>{erro}</p>}

          <Button disabled={false} type='submit' className='mt-4'>
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
