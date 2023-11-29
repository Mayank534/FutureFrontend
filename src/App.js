import './App.css';
import {Navbar,Footer} from './components'
import {Home,Profile,Item, Create,Login,Register} from './pages'
import { Routes, Route } from "react-router-dom";
import { AptosClient, Network, Provider } from "aptos";

export const provider = new Provider(Network.DEVNET);
// change this to be your module account address
export const moduleAddress = "0x8f93e6fe83a7bbc0e4c743a928d31d2810c308515363d843b6af129d094e22ee";

function App() {

  return (
    <div>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":item/:id" element={<Item />} />
            <Route path="/create" element={<Create /> } />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/register" element={ <Register />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
