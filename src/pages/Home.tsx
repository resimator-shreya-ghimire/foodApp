import { FoodList } from "../components/product-list/FoodList"
import Footer from "../components/Footer/Footer"
import NavigationBar from "../components/header/NavigationBar"


const Home = () => {
  return (
    <div className=" h-[100vh]">
      <NavigationBar />
      <FoodList />
      <Footer>Welcome to MyFoodApp!</Footer>
    </div>
  )
}

export default Home