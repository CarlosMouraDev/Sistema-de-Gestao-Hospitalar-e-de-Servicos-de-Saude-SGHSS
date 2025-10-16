import { useEffect } from 'react';
function Home() {
  useEffect(() => {
    document.title = 'Sistema De Saúde';
  }, []);

  return <div>ola mundo</div>;
}

export default Home;
