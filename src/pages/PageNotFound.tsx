import { Button } from '@/components/button/Button'
import { useNavigate } from 'react-router'

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl h-screen mx-auto text-center py-20 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <Button label='Go Back Home' variant='primary' onClick={() => navigate('/')} />
    </div>
  );
};

export default PageNotFound;
