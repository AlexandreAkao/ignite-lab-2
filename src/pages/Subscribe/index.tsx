import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../components/Logo';
import { useCreateSubscriberMutation } from '../../graphql/generated';
import codeMockupImage from '../../assets/images/code-mockup.png';

function Subscribe() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    await createSubscriber({
      variables: { name, email },
    });

    navigate('/event');
  };

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="md:flex-row flex-col w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="p-6 max-w-[640px] md:items-start flex flex-col items-center">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight text-center md:text-left">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com{' '}
            <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e
            com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="md:w-auto w-full p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={codeMockupImage} alt="code mockup" className="mt-10" />
    </div>
  );
}

export default Subscribe;
