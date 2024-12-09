import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import botas from '../../assets/botas.png';
import { IoIosArrowRoundBack } from "react-icons/io";

function BotasInfo() {
  const [epiData, setEpiData] = useState({
    image: botas,
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
              src={botas}
              alt="Botas"
              className="w-20 h-20"
            />
            <h2 className="text-lg font-bold mt-0 text-gray-700">Botas</h2>
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
            <li><strong>Desgaste da Sola:</strong> Verifique se a sola da bota está excessivamente desgastada ou danificada. Uma sola desgastada pode comprometer a aderência e a segurança durante o uso.</li>
            <li><strong>Fissuras ou Rachaduras:</strong> Inspecione a parte superior e as laterais das botas para fissuras ou rachaduras. Danos no material podem reduzir a proteção contra impactos e perfurações.</li>
            <li><strong>Fivelas ou Fechos Quebrados:</strong> Verifique se os fechos, fivelas ou zíperes estão funcionando corretamente. Um fecho quebrado pode impedir que a bota se ajuste adequadamente ao pé.</li>
            <li><strong>Perda de Impermeabilidade:</strong> Se a bota for impermeável, verifique se ela está perdendo essa capacidade, permitindo a entrada de água. Botas danificadas podem comprometer a proteção contra ambientes úmidos ou molhados.</li>
            <li><strong>Desgaste no Forro Interno:</strong> O desgaste do forro interno pode causar desconforto e dificultar a proteção ao pé. Inspecione o interior da bota regularmente para verificar se há danos.</li>
          </ul>
        </div>

        {/* Dicas de conservação */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4 text-left">
          <h3 className="font-medium text-lg text-gray-700 mb-3">Dicas para Manter o Capacete de EPI Conservado</h3>

          <ul className="list-none text-sm text-gray-600 space-y-2">
            <li><strong>Limpeza Regular:</strong> Limpe as botas após o uso para remover sujeira, lama ou produtos químicos. Use uma escova macia e sabão neutro para evitar danos ao material.</li>
            <li><strong>Secagem Adequada:</strong> Após o uso, seque as botas em local arejado e à sombra. Evite expô-las diretamente ao sol ou fontes de calor, pois isso pode ressecar o material.</li>
            <li><strong>Armazenamento Correto:</strong> Guarde as botas em um local seco e ventilado, longe de fontes de calor excessivo. Use formas ou enchimentos para manter a forma das botas e evitar deformações.</li>
            <li><strong>Ajuste Adequado:</strong> Certifique-se de que as botas estejam bem ajustadas ao seu pé e tornozelo. Botas que não se ajustam corretamente podem causar desconforto e diminuir sua eficácia de proteção.</li>
            <li><strong>Inspeção Periódica:</strong> Realize inspeções regulares nas botas para verificar se há desgastes ou danos. Isso ajudará a garantir que o EPI esteja sempre em boas condições para o trabalho.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BotasInfo;
