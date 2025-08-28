import Main from "./components/Main";
import Featured from './components/Featured';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import UseTitle from "../../hooks/UseTitle";

 const HomePage = () => {

UseTitle("One Stop Solutions")
  return (
    <div>
      <Main/>
      <Featured/>
      <Testimonials/>
      <Faq/>
      
    </div>
    
  )
}
export default HomePage;