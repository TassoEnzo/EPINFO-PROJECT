import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoIosArrowRoundBack } from "react-icons/io";

const profileImages = [
  'pp1.png',
  'pp2.png',
  'pp3.png',
  'pp4.png',
  'pp5.png',
  'pp6.png',
  'pp7.png',
  'pp8.png'
];

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    departamento: '',
    senha: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.departamento || !formData.senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Email inválido. Por favor, insira um email válido.');
      return;
    }
    const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];
    try {
      const response = await axios.post('/api/funcionarios', { ...formData, profileImage: randomImage });
      console.log(response.data);
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError('Email já cadastrado. Por favor, use outro email.');
      } else {
        console.error('Erro ao cadastrar funcionário:', error);
        setError('Erro ao cadastrar funcionário. Tente novamente.');
      }
    }
  };

  const BackToLogin = () => {
    navigate('/');
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-800 to-blue-900">
      <div className="bg-gradient-to-b from-cyan-300 to-cyan-600 relative w-full h-full sm:h-auto sm:w-full sm:max-w-md sm:rounded-lg p-8 shadow-lg text-center">
        <button
          onClick={BackToLogin}
          className=" px-2 py-0 text-white font-semibold text-6xl rounded-lg transition-colors absolute top-0 left-0"
        >
          <IoIosArrowRoundBack />
        </button>
        <h1 className="text-white text-2xl font-bold mb-4">Cadastro de Funcionário</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="bg-red-100 text-red-500 border-2 border-red-500 rounded-lg p-0.1 mb-2">{error}</p>}
          <div>
            <label htmlFor="nome" className="block text-white text-lg font-medium mb-2">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="w-full outline-none border-none text-gray-700 rounded-lg px-4 py-2 shadow-inner"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full outline-none border-none text-gray-700 rounded-lg px-4 py-2 shadow-inner"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="departamento" className="block text-white text-lg font-medium mb-2">Departamento</label>
            <input
              type="text"
              id="departamento"
              name="departamento"
              placeholder="Departamento"
              className="w-full outline-none border-none text-gray-700 rounded-lg px-4 py-2 shadow-inner"
              value={formData.departamento}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="senha" className="block text-white text-lg font-medium mb-2">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="w-full outline-none border-none text-gray-700 rounded-lg px-4 py-2 shadow-inner"
              value={formData.senha}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-semibold transition-colors"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
