import { Header } from "./Header.jsx";
import { Products } from "./Products.jsx";
import { Testimonials } from "./Testimonials.jsx";
import { About } from "./About.jsx";
import { Services } from "./Services.jsx";
import { Auth } from "./Auth.jsx";
import { Footer } from "./Footer.jsx";
function App() {
  return(
  
    <section className="fullBody">
      <Header/>
      <Products/>
      <Testimonials/>
      <About/>
      <Services/>
      <Auth/>
      <Footer/>
    </section>
    
  )
  
}

export default App
