import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import InputText from '../../components/InputText';

interface Appointment {
  id: number;
  patient: string;
  symptoms: string;
  diagnosis?: string;
  recommendation?: string;
  status: 'PENDING' | 'CONSULTED';
}

export default function Doctor() {
  useEffect(() => {
    document.title = 'Sistema De Saúde | Médico';
  }, []);

  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      patient: 'Maria Silva',
      symptoms: 'Dor de cabeça e tontura',
      status: 'PENDING',
    },
    {
      id: 2,
      patient: 'Carlos Eduardo',
      symptoms: 'Dor no ombro e fadiga',
      status: 'PENDING',
    },
    {
      id: 3,
      patient: 'João Pedro',
      symptoms: 'Manchas vermelhas na pele e coceira',
      status: 'PENDING',
    },
    {
      id: 3,
      patient: 'João Pedro',
      symptoms: 'Manchas vermelhas na pele e coceira',
      status: 'PENDING',
    },
    {
      id: 3,
      patient: 'João Pedro',
      symptoms: 'Manchas vermelhas na pele e coceira',
      status: 'PENDING',
    },
    {
      id: 3,
      patient: 'João Pedro',
      symptoms: 'Manchas vermelhas na pele e coceira',
      status: 'PENDING',
    },
    {
      id: 3,
      patient: 'João Pedro',
      symptoms: 'Manchas vermelhas na pele e coceira',
      status: 'PENDING',
    },
  ]);

  const handleFieldChange = (
    id: number,
    field: 'diagnosis' | 'recommendation',
    value: string,
  ) => {
    setAppointments(prev =>
      prev.map(a => (a.id === id ? { ...a, [field]: value } : a)),
    );
  };

  const handleConsult = (id: number) => {
    setAppointments(prev =>
      prev.map(a => (a.id === id ? { ...a, status: 'CONSULTED' } : a)),
    );
  };

  return (
    <div className='p-6 max-w-lg mx-auto'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Página Do Médico</h1>

      {appointments.length === 0 && <p>No appointments yet.</p>}

      <ul className='space-y-4'>
        {appointments.map(a => (
          <li key={a.id} className='bg-white p-4 rounded shadow'>
            <p>
              <strong>Paciente:</strong> {a.patient}
            </p>
            <p>
              <strong>Sintomas:</strong> {a.symptoms}
            </p>

            {a.status === 'PENDING' ? (
              <div className='mt-3'>
                <InputText
                  placeholder='Diagnóstico'
                  className='w-full p-2 border rounded mb-2'
                  value={a.diagnosis || ''}
                  onChange={e =>
                    handleFieldChange(a.id, 'diagnosis', e.target.value)
                  }
                />
                <InputText
                  placeholder='Recomendação'
                  className='w-full p-2 border rounded mb-2'
                  value={a.recommendation || ''}
                  onChange={e =>
                    handleFieldChange(a.id, 'recommendation', e.target.value)
                  }
                />
                <Button onClick={() => handleConsult(a.id)} className='w-full'>
                  Enviar
                </Button>
              </div>
            ) : (
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
