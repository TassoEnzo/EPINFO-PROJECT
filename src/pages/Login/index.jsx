import React, { useState } from "react";
import logo from '../../assets/epinfoLogo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [registro, setRegistro] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Hook de navegação

  const handleLogin = async (e) => {
    e.preventDefault();  // Evita que a página seja recarregada

    if (!registro || !senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await axios.post('/api/login', { registro, senha });
      if (response.status === 200) {
        setError('');
        const usuario = response.data.usuario;
        localStorage.setItem('usuario', JSON.stringify(usuario));
        navigate('/home');
      } else {
        setError('Registro ou senha incorretos.');
      }
    } catch (error) {
      setError('Erro ao fazer login. Tente novamente.');
      console.error('Erro ao fazer login:', error);
    }
  };

  const handleCadastro = () => {
    navigate('/cadastro');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-800 to-blue-900">
      <div className="bg-gradient-to-b from-cyan-300 to-cyan-600 w-full h-screen sm:h-auto sm:w-full sm:max-w-md sm:rounded-lg p-8 shadow-lg text-center">
        <img
          src={logo}
          alt="Logo EPINFO"
          className="mx-auto mb-6 sm:w-32 sm:h-32 md:w-80 md:h-80 hover:scale-110 transition-transform duration-200"
        />
        <h1 className="text-white text-2xl font-bold mb-4">Bem-vindo(a)</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          {error && <p className="bg-red-100 text-red-500 border-2 border-red-500 rounded-lg p-0.1 mb-2">{error}</p>}
          <div>
            <label htmlFor="registro" className="block text-white text-lg font-medium mb-2">Nome ou Email</label>
            <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-inner">
              <i className="fas fa-user text-gray-500 mr-2"></i>
              <input
                type="text"
                id="registro"
                placeholder="Nome ou Email"
                className="w-full outline-none border-none text-gray-700"
                value={registro}
                onChange={(e) => setRegistro(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="senha" className="block text-white text-lg font-medium mb-2">Senha</label>
            <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-inner">
              <i className="fas fa-lock text-gray-500 mr-2"></i>
              <input
                type="password"
                id="senha"
                placeholder="Senha"
                className="w-full outline-none border-none text-gray-700"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-semibold transition-colors"
          >
            ENTRAR
          </button>
        </form>
        <button
          onClick={handleCadastro}
          className="w-full bg-white hover:bg-gray-200 text-blue-700 py-2 rounded-lg font-semibold transition-colors mt-4"
        >
          CADASTRE-SE
        </button>
      </div>
    </div>
  );
}

export default Login;

