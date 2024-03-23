
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import { GlobalProvider } from "./GlobalContext"; // Importe do provedor global
import Home from "./pages/home";
import Library from "./pages/library";
import History from "./pages/history";
import Shorts from "./pages/shorts";
import Subscription from "./pages/subscription";
import Login from "./pages/login";
import { UserStorage } from "./context/userContext";

function App() {
  return (
    <GlobalProvider>
        <UserStorage>
          <AppContent />
        </UserStorage>
      </GlobalProvider>
  );
}

function AppContent() {
 
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <div style={{ width: '100%', display: 'flex' }}>
        <Menu />
        <div style={{ width: '100%', padding: '50px 70px', boxSizing: 'border-box' }}>
          <Routes>
           <Route path="/" element={<Home/>}/> 
           <Route path="/shorts" element={<Shorts/>}/> 
           <Route path="/subscription" element={<Subscription/>}/> 
           <Route path="/library" element={<Library/>}/> 
           <Route path="/history" element={<History/>}/> 
           <Route path="/login" element={<Login/>}/> 
          </Routes>   
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
