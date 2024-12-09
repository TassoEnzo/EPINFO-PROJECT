import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import oculos from '../../assets/oculos.png';
import { IoIosArrowRoundBack } from "react-icons/io";

function OculosInfo() {
  const [epiData, setEpiData] = useState({
    image: oculos,
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
              src={oculos}
              alt="Óculos"
              className="w-20 h-20"
            />
            <h2 className="text-lg font-bold mt-0 text-gray-700">Óculos de Proteção</h2>
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
            <li><strong>Lentes Riscadas ou Quebradas:</strong> Verifique se as lentes estão riscadas ou quebradas. Isso pode afetar a visibilidade e a proteção dos olhos.</li>
            <li><strong>Desgaste nas Hastes:</strong> Verifique se as hastes (braços) dos óculos estão quebradas ou deformadas, o que pode comprometer o ajuste e a estabilidade do EPI.</li>
            <li><strong>Trincas nas Lentes:</strong> Trincas ou rachaduras nas lentes podem comprometer a resistência do material e a segurança durante o uso. Substitua os óculos caso observe esse tipo de dano.</li>
            <li><strong>Descoloração ou Manchas nas Lentes:</strong> Mudanças de cor ou manchas podem indicar exposição a produtos químicos, raios UV ou sujeira acumulada que pode prejudicar a visibilidade e a proteção.</li>
            <li><strong>Desgaste no Antirreflexo:</strong> Se os óculos possuírem tratamento antirreflexo, verifique se este está desgastado ou danificado, o que pode interferir na qualidade da visão e na proteção ocular.</li>
          </ul>
        </div>

        {/* Dicas de conservação */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4 text-left">
          <h3 className="font-medium text-lg text-gray-700 mb-3">Dicas para Manter o Capacete de EPI Conservado</h3>

          <ul className="list-none text-sm text-gray-600 space-y-2">
            <li><strong>Limpeza Regular:</strong> Limpe as lentes regularmente com um pano macio e detergente neutro para evitar arranhões e remover sujeiras que possam prejudicar a visão.</li>
            <li><strong>Armazenamento Adequado:</strong> Guarde os óculos em um estojo rígido para protegê-los contra impactos, riscos ou deformações. Evite deixá-los expostos ao calor excessivo ou umidade.</li>
            <li><strong>Evitar Produtos Químicos:</strong> Não exponha os óculos a produtos químicos agressivos, como solventes ou óleos, que podem danificar as lentes e as hastes.</li>
            <li><strong>Inspeção Periódica:</strong> Realize inspeções regulares nas lentes, hastes e demais partes dos óculos para verificar sinais de desgaste ou danos que possam comprometer sua eficácia.</li>
            <li><strong>Ajuste Correto:</strong> Certifique-se de que os óculos estejam bem ajustados ao seu rosto para evitar desconforto e garantir máxima proteção durante o uso.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OculosInfo;
