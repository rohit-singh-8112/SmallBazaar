
import "./App.css";
import AppRoutes from './Component/Router/AppRoutes'
import { ThemeProvider } from "./store/ThemeContext";
function App() {
  

  return (

    
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
 
  );
}

export default App;
