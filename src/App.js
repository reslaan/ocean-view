import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Services } from "./components/services";
import { WhyUs } from "./components/why-us";

function App() {
  return (
    <div dir="rtl" className="h-full text-lg">
      <Header></Header>
      <Main></Main>
      <About />
      <WhyUs />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
