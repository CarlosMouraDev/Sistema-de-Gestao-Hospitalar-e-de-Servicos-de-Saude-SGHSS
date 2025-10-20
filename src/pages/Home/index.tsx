import { useEffect } from 'react';
import PageCard from '../../components/PageCard';
function Home() {
  useEffect(() => {
    document.title = 'Sistema De Saúde';
  }, []);

  return (
    <div className='flex flex-col items-center text-center bg-white text-gray-800'>
      <section className='w-full bg-blue-50 py-16 px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between'>
        <div className='md:w-1/2 mt-8 md:mt-0'>
          <h1 className='text-4xl md:text-5xl font-bold text-blue-700 mb-6'>
            A saúde digital ao seu alcance
          </h1>
          <p className='text-lg md:text-xl text-gray-600 mb-8'>
            Agende consultas, descreva seus sintomas e receba diagnósticos
            personalizados sem sair de casa. Nosso sistema conecta pacientes e
            médicos de forma rápida, segura e eficiente.
          </p>
          <a href='/login'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition cursor-pointer'>
              Entrar no Sistema
            </button>
          </a>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <img
            src='/images/hospital.jpg'
            alt='Hospital'
            className='rounded-2xl shadow-lg max-w-md w-full object-cover'
          />
        </div>
      </section>
      <section className='w-full py-20 px-6 md:px-12 bg-white'>
        <h2 className='text-3xl font-bold text-blue-700 mb-12'>
          Por que escolher nosso sistema?
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
          <PageCard
            title='Médicos qualificados'
            content='Tenha acesso a profissionais especializados, prontos para atender suas necessidades com agilidade e dedicação.'
          />
          <PageCard
            title='Consultas online'
            content='Solicite uma consulta descrevendo seus sintomas e receba orientações sem sair de casa — tudo direto pelo sistema.'
          />
          <PageCard
            title='Histórico centralizado'
            content='Acompanhe suas consultas e diagnósticos em um único lugar, de forma organizada e acessível a qualquer momento.'
          />
          <PageCard
            title='Segurança e privacidade'
            content='Seus dados são protegidos com total sigilo. Aqui, a tecnologia trabalha para cuidar de você com confiança.'
          />
        </div>
      </section>
      <section className='w-full bg-blue-600 text-white py-20 px-6 md:px-12 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>
          Pronto para cuidar da sua saúde de forma inteligente?
        </h2>
        <p className='text-lg md:text-xl mb-10'>
          Faça login agora e descubra como é fácil se conectar com profissionais
          da saúde.
        </p>
        <a href='/login'>
          <button className='bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition cursor-pointer'>
            Começar agora
          </button>
        </a>
      </section>
    </div>
  );
}

export default Home;
