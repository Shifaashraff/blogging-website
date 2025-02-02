
//-
import Header from "@/components/Header";
import HomePage from "./home/page"; // Fixed import name to avoid conflict with local declaration//+
import Footer from "@/components/footer/page";
export default function Home(){
  return (
    <div >
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}
