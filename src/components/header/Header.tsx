import TopHeader from "./TopHeader"
import NavigationBar from "./NavigationBar"

export const Header = () => {
  return (
    <div className="w-full flex flex-col">
        <TopHeader />
        <NavigationBar />
    </div>
  )
}
