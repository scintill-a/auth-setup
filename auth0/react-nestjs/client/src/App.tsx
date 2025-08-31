import { LoginButton } from "./components/LoginButton";

function App() {
  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-[#1e1e1e]">
      <h1 className="font-bold mb-2 text-center text-white">
        Auth0 - [React-NestJS]
      </h1>
      <LoginButton />
    </div>
  );
}

export default App;
