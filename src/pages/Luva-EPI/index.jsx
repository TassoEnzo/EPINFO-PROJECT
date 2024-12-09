import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import luvas from '../../assets/luvas-de-protecao.png';
import { IoIosArrowRoundBack } from "react-icons/io";

function LuvasInfo() {
  const [epiData, setEpiData] = useState({
    image: luvas,
    exchangeDate: "",
    quantity: 0
  });

  const navigate = useNavigate();

  const BackToHome = () => {
    navigate('/home');
  }

  const fetchData = async () => {
    try {
      const response = await fetch("/api/epis"); // Flask API
      const data = await response.json();
      setEpiData(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-800 to-blue-900">
      <div className="bg-gradient-to-b from-cyan-300 to-cyan-600 relative w-full h-full sm:h-auto sm:w-full sm:max-w-md sm:rounded-lg p-8 shadow-lg text-center">
        <button
          onClick={BackToHome}
          className=" px-2 py-0 text-gray-700 font-semibold text-6xl rounded-lg transition-colors absolute top-0 left-0"
        >
          <IoIosArrowRoundBack />
        </button>
        <div className="flex justify-between items-start mb-6">
          {/* Lado esquerdo (Imagem e Nome) */}
          <div className="flex flex-col items-center mt-8 gap-4">
            <img
              src={luvas}
              alt="Luvas"
              className="w-20 h-20"
            />
            <h2 className="text-lg font-bold mt-0 text-gray-700">Luvas</h2>
          </div>

          {/* Lado direito (Data de Troca e Quantidade) */}
          <div className="flex flex-col items-end absolute mt-8 right-4">
            <p className="text-base text-gray-700">
              <strong>Troca prevista em:</strong> {epiData.exchangeDate || "DD/MM/YYYY"}
            </p>
            <p className="text-base text-gray-700">
              <strong>Quantidade:</strong> {epiData.quantity || 0}
            </p>
          </div>
        </div>

        {/* Texto de EPI avariado */}
        <div className="bg-gray-100 p-3 rounded-lg mb-4 text-left">
          <h3 className="font-medium text-lg text-gray-700 mb-2">Como saber quando o EPI está avariado?</h3>
          <ul className="list-none text-sm text-gray-600 space-y-2">
            <li><strong>Desgaste do Material:</strong> Verifique se há buracos, rasgos ou desgaste excessivo nas luvas. Se o material estiver comprometido, a proteção será afetada.</li>
            <li><strong>Fivelas e Fechos:</strong> Avalie se os fechos ou fivelas das luvas estão quebrados ou danificados, comprometendo o ajuste correto.</li>
            <li><strong>Perda de Elasticidade:</strong> Se as luvas perderem a elasticidade ou o ajuste adequado, elas podem não oferecer a proteção necessária.</li>
            <li><strong>Descoloração ou Deformação:</strong> Mudanças na cor ou deformações nas luvas podem indicar exposição a produtos químicos ou condições extremas de uso.</li>
            <li><strong>Perfurações ou Danos Invisíveis:</strong> Se você sentir que a luva não está oferecendo a proteção devida, mesmo sem danos visíveis, ela pode estar comprometida e deve ser substituída.</li>
          </ul>
        </div>

        {/* Dicas de conservação */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4 text-left">
          <h3 className="font-medium text-lg text-gray-700 mb-3">Dicas para Manter o Capacete de EPI Conservado</h3>

          <ul className="list-none text-sm text-gray-600 space-y-2">
            <li><strong>Limpeza Regular:</strong> Lave as luvas regularmente, seguindo as instruções do fabricante, para remover sujeiras e produtos químicos que possam danificar o material.</li>
            <li><strong>Armazenamento Correto:</strong> Guarde as luvas em um local seco e ventilado, evitando exposição ao calor excessivo ou umidade, que podem comprometer a durabilidade.</li>
            <li><strong>Evite Contato com Substâncias Químicas:</strong> Sempre que possível, evite que as luvas entrem em contato com substâncias químicas agressivas, pois elas podem degradar o material rapidamente.</li>
            <li><strong>Inspeção Periódica:</strong> Realize inspeções frequentes nas luvas para verificar se há danos ou sinais de desgaste que possam comprometer a proteção.</li>
            <li><strong>Ajuste Correto:</strong> Certifique-se de que as luvas estejam bem ajustadas às mãos, mas sem apertar, garantindo conforto e máxima proteção durante o uso.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LuvasInfo;

