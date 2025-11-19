import FoodList from "../components/FoodList"
import NavigationBar from "../components/NavigationBar"


const Home = () => {
  return (
    <div className=" h-[100vh]">
      <NavigationBar />
      <FoodList />
    </div>
  )
}

export default Home