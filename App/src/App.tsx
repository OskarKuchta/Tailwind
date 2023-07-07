import Header from "./components/Header";
import Photos from "./components/Photos";
import ListWithInputs from "./components/ListWithInputs";

const App: React.FC = () => {
  return (
    <main className="flex flex-col items-center w-4/5 sm:w-2/3 md:w-1/3 mx-auto">
      <Header />
      <Photos />
      <ListWithInputs />
    </main>
  );
};

export default App;
