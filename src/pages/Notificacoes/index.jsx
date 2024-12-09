import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import imgProfile from '../../assets/pp1.png';
import { IoIosArrowRoundBack } from "react-icons/io";

function Notificacoes() {
  const [epiData, setEpiData] = useState({
    image: imgProfile,
    exchangeDate: "",
    quantity: 0
  });
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  const BackToHome = () => {
    navigate('/home');
  }

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5173/"); 
      const data = await response.json();
      setEpiData(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const usuarioLogado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioLogado) {
      const nomeFormatado = usuarioLogado.nome.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      setUsuario({ ...usuarioLogado, nome: nomeFormatado });
    } else {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-800 to-blue-900">
      <div className="bg-gradient-to-b from-cyan-300 to-cyan-600 relative w-full h-full sm:h-auto sm:w-full sm:max-w-md sm:rounded-lg p-8 shadow-lg text-center">
        <button
          onClick={BackToHome}
          className=" px-2 py-0 text-gray-700 font-semibold text-6xl rounded-lg transition-colors absolute top-0 left-0"
        >
          <IoIosArrowRoundBack />
        </button>
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col items-center mt-8 left-1 gap-4">
            {epiData.image ? (
              <img
                src={epiData.image}
                alt={epiData.name}
                className="w-20 h-20"
              />
            ) : (
              <div className="w-20 h-20 rounded-lg bg-gray-200"></div>
            )}
            <h2 className="text-lg font-bold mt0 text-gray-700">Notificações</h2>
          </div>
          <div className="flex flex-col items-start ml-4">
            <p className="text-xl text-gray-700">
              <strong>{usuario ? usuario.nome : 'Carregando...'}</strong>
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg mb-4 text-left">
          <h3 className="font-medium text-lg text-gray-700 mb-2">Datas de troca programadas para os EPIs</h3>
          <ul className="list-none text-sm text-gray-600 space-y-2">
            <li>
              <strong>Troca de capacete em:</strong> DD/MM/YYYY
            </li>
            <li>
              <strong>Troca de luvas em:</strong> DD/MM/YYYY
            </li>
            <li>
              <strong>Troca de botas em:</strong> DD/MM/YYYY
            </li>
            <li>
              <strong>Troca de óculos em:</strong> DD/MM/YYYY
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Notificacoes;