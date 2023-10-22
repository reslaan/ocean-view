import { About } from "./components/about";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { WhyUs } from "./components/why-us";

function App() {
  return (
    <div dir="rtl" className="h-full text-lg">
      <Header></Header>
      <Main></Main>
      <About />
      <WhyUs />
    </div>
  );
}

export default App;
