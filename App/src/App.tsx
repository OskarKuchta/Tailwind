import Header from "./components/Header";
import Photos from "./components/Photos";

const App: React.FC = () => {
  return (
    <main className="w-screen h-screen bg-bodybg flex flex-col items-center">
      <Header />
      <Photos />
    </main>
  );
};

export default App;
