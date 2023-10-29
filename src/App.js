import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { MoreServices } from "./components/more-services";
import { Services } from "./components/services";
import { WhyUs } from "./components/why-us";

function App() {
  return (
    <div dir="rtl" className="h-full text-lg scroll-smooth">
      <Header></Header>
      <Main></Main>
      <About />
      <WhyUs />
      <Services />
      <MoreServices />
      <Footer />
    </div>
  );
}

export default App;
