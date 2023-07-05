import Header from "./components/Header";
import Photos from "./components/Photos";

const App: React.FC = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center bg-bodybg">
      <Header />
      <Photos />
    </main>
  );
};

export default App;
