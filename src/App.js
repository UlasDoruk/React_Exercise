import "./App.css"
import Header from "./components/TodoRedux/Header";
import Content from "./components/TodoRedux/Content";
import Footer from "./components/TodoRedux/Footer";

function App() {

  return (
    <section className="todoapp">
      <Header/>
      <Content/>
      <Footer/>
    </section>
  );
}

export default App;
