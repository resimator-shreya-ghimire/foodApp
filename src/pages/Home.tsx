import FoodList from "../components/layout-component/FoodList"
import Footer from "../components/layout-component/Footer"
import NavigationBar from "../components/layout-component/NavigationBar"


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