function App() {
  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-[#1e1e1e]">
      <h1 className="font-bold mb-2 text-center text-white">
        Auth0 - [React-NestJS]
      </h1>
      <div className="bg-white rounded-xl shadow-md px-12 py-8 flex flex-col items-center">
        <button className="px-8 py-3 rounded-lg bg-[#1e1e1e] text-white font-medium text-lg hover:bg-[#181818] text-white transition">
          Login | Signup
        </button>
      </div>
    </div>
  );
}

export default App;
