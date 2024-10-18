import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));

    if (!token) {
      router.push('/login'); // Redirigir si no hay token
    }
  }, [router]);

  return <div>Bienvenido a la página protegida</div>;
}
