import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemListContainer";
function App() {
  return <div>
    {/* <img src="../img/logo.png" alt="" /> */}
    <h1>Tienda</h1>
    <NavBar />
    <ItemListContainer greeting={"Bienvenido a la tienda"}/>
  </div>
}


export default App;