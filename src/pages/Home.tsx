import { FoodList } from "../components/product-list/FoodList"
import Footer from "../components/Footer/Footer"
import {Header} from "../components/header/Header"


const Home = () => {
  return (
    <div className=" h-[100vh]">
      <Header />
      <FoodList />
      <Footer>Welcome to MyFoodApp!</Footer>
    </div>
  )
}

export default Home