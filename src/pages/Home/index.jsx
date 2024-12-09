import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgProfile from '../../assets/pp1.png';
import botas from '../../assets/botas.png';
import { IoIosNotifications } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import luvasProtecao from '../../assets/luvas-de-protecao.png';
import oculos from '../../assets/oculos.png';
import capacete from '../../assets/capacete.png';
import imgSino from '../../assets/sino.png';

function Home() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioLogado) {
      const nomeFormatado = usuarioLogado.nome.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      setUsuario({ ...usuarioLogado, nome: nomeFormatado });
    } else {
      navigate('/');
    }
  }, [navigate]);

  const Leave = () => {
    navigate('/');
  }

  const TelaCapacete = () => {
    navigate('/capacete');
  }
  const TelaLuvas = () => {
    navigate('/luvas');
  }
  const TelaBotas = () => {
    navigate('/botas');
  }
  const TelaOculos = () => {
    navigate('/oculos');
  }
  const TelaNotificacao = () => {
    navigate('/sino');
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-800 to-blue-900">
      <div className="bg-gradient-to-b from-cyan-300 to-cyan-600 w-full h-screen sm:h-auto relative sm:w-full sm:max-w-md sm:rounded-lg p-8 shadow-lg text-center flex-col items-center">
        <button
          onClick={Leave}
          className="px-0 py-0 text-white text-7xl rounded-lg transition-colors absolute top-6 left-5"
        >
          <IoIosArrowRoundBack />
        </button>
        <div className="notification-icon absolute top-3 right-3 p-3">
          <button
            onClick={TelaNotificacao} // Ao clicar vai para a tela de notificações
            className="w-12 h-12 rounded-full transition-transform hover:scale-110"
            style={{ backgroundImage: `url(${imgSino})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></button>
        </div>
        <div className="header flex justify-center items-center mb-8">
          <div className="profile-container text-center flex-grow flex flex-col justify-center items-center">
            <div className="profile-pic">
              <img
                src={imgProfile}
                className="mx-auto mt-6 w-[12rem] h-[12rem] md:w-[12rem] md:h-[12rem] rounded-full border-4 border-white"
              />
            </div>
            <p className="user-name mb-10 text-white text-2xl font-semibold border-b-4 border-blue-800 inline-block">
              {usuario ? usuario.nome : 'Carregando...'}
            </p>
          </div>
        </div>
        <div className="content text-center">
          <h2 className="text-white text-3xl font-bold mb-6">Meus EPI</h2>
          <div className="epi-grid grid grid-cols-2 gap-4">
            <div className="epi-item-container flex flex-col items-center">
              <button
                onClick={TelaCapacete}
                className="epi-item w-24 h-24 rounded-xl shadow-md border-4 border-white hover:bg-blue-800 hover:scale-110 transition-transform duration-200"
                style={{ backgroundImage: `url(${capacete})`, backgroundSize: 'cover' }}
              ></button>
              <p className="epi-label text-white py-2 rounded-lg font-semibold transition-colors">Capacete</p>
            </div>
            <div className="epi-item-container flex flex-col items-center">
              <button
                onClick={TelaLuvas}
                className="epi-item w-24 h-24 rounded-xl shadow-md border-4 border-white hover:bg-blue-800 hover:scale-110 transition-transform duration-200"
                style={{ backgroundImage: `url(${luvasProtecao})`, backgroundSize: 'cover' }}
              ></button>
              <p className="epi-label text-white py-2 rounded-lg font-semibold transition-colors">Luvas</p>
            </div>
            <div className="epi-item-container flex flex-col items-center">
              <button
                onClick={TelaBotas}
                className="epi-item w-24 h-24 rounded-xl shadow-md border-4 border-white hover:bg-blue-800 hover:scale-110 transition-transform duration-200"
                style={{ backgroundImage: `url(${botas})`, backgroundSize: 'cover' }}
              ></button>
              <p className="epi-label text-white py-2 rounded-lg font-semibold transition-colors">Botas</p>
            </div>
            <div className="epi-item-container flex flex-col items-center">
              <button
                onClick={TelaOculos}
                className="epi-item w-24 h-24 rounded-xl shadow-md border-4 border-white hover:bg-blue-800 hover:scale-110 transition-transform duration-200"
                style={{ backgroundImage: `url(${oculos})`, backgroundSize: 'cover' }}
              ></button>
              <p className="epi-label text-white py-2 rounded-lg font-semibold transition-colors">Óculos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
