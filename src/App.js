import InputForm from "./components/InputForm";


function App() {
  return (
    <div className="container" style={{
        height: '100vh',
        margin: 0,
        padding: 0,
        backgroundImage: 'url("/images/SA-Flag-background.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      >
     <InputForm/>
    </div>
  );
}

export default App;
