import { useEffect, useState } from 'react';
import Button from '../../components/Button';

interface Appointment {
  id: number;
  doctor: string;
  symptoms: string;
  status: 'PENDING' | 'CONSULTED';
  diagnosis?: string;
  recommendation?: string;
}

export default function Patient() {
  useEffect(() => {
    document.title = 'Sistema De Saúde | Paciente';
  }, []);

  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      doctor: 'Dr. Jhon',
      symptoms:
        ' febre alta repentina, dor de cabeça, dor no corpo e atrás dos olhos, mal-estar, falta de apetite, náuseas, vômitos e manchas vermelhas na pele',
      status: 'CONSULTED',
      diagnosis: 'Dengue',
      recommendation: 'Se hidratar bem e tomar os medicamentos prescritos.',
    },
  ]);
  const [symptoms, setSymptoms] = useState('');
  const [doctor, setDoctor] = useState('');

  const createAppointment = () => {
    if (!symptoms || !doctor) return;
    const newAppointment: Appointment = {
      id: Date.now(),
      doctor,
      symptoms,
      status: 'PENDING',
    };
    setAppointments([...appointments, newAppointment]);
    setSymptoms('');
    setDoctor('');
  };

  return (
    <div className='p-6 max-w-lg mx-auto'>
      <h1 className='text-2xl font-bold mb-4 text-center'>
        Página Do Paciente
      </h1>

      <div className='bg-white p-4 rounded shadow mb-6'>
        <h2 className='text-lg font-semibold mb-3'>Faça uma consulta</h2>
        <input
          placeholder='Descreva seus sintomas'
          className='w-full p-2 border rounded mb-3'
          value={symptoms}
          onChange={e => setSymptoms(e.target.value)}
        />
        <select
          className='w-full p-2 border rounded mb-3'
          value={doctor}
          onChange={e => setDoctor(e.target.value)}
        >
          <option value=''>Selecionar um médico</option>
          <option value='Dr. John'>Dr. John</option>
          <option value='Dra. Maria'>Dra. Maria</option>
          <option value='Dr. Smith'>Dr. Smith</option>
        </select>
        <Button onClick={createAppointment} className='w-full'>
          Enviar
        </Button>
      </div>

      <h2 className='text-lg font-semibold mb-2'>Suas consultas</h2>
      {appointments.length === 0 && <p>Sem consultas ainda.</p>}
      <ul className='space-y-2'>
        {appointments.map(a => (
          <li key={a.id} className='bg-gray-100 p-3 rounded'>
            <p>
              <strong>Médico(a):</strong> {a.doctor}
            </p>
            <p>
              <strong>Sintomas:</strong> {a.symptoms}
            </p>
            <p>
              <strong>Situação:</strong>{' '}
              {a.status === 'PENDING' ? 'pendente' : 'consultado'}
            </p>
            {a.status === 'CONSULTED' && (
              <>
                <p>
                  <strong>Diagnóstico:</strong> {a.diagnosis}
                </p>
                <p>
                  <strong>Recomendação:</strong> {a.recommendation}
                </p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
