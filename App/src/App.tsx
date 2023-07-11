import Header from "./components/Header";
import Photos from "./components/Photos";
import ListWithInputs from "./components/ListWithInputs";
import Footer from "./components/Footer";
const App: React.FC = () => {
  return (
    <>
      <div className="w-3/4 flex flex-col mx-auto min-h-screen mb-10">
        <main className="flex flex-col items-center w-4/5 sm:w-2/3 md:w-1/3 mx-auto">
          <Header />
          <Photos />
          <ListWithInputs />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
