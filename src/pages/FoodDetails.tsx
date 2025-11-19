import { useParams } from 'react-router-dom';
import NavigationBar from '../components/layout-component/NavigationBar';

const FoodDetails = () => {
  const { id } = useParams();
  
  return (
    <div>
      <NavigationBar />
    </div>
  )
}

export default FoodDetails;