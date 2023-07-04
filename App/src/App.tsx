import Header from "./components/Header";
import Photos from "./components/Photos";

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-blue-200 flex flex-col items-center">
      <Header />
      <Photos />
    </div>
  );
};

export default App;
