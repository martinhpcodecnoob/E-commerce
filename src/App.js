import "./App.css";
import { UserProvider } from "./context/userContext.jsx";
import Routes from "./routes";
function App() {
  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;
