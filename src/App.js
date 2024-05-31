


function App(props) {
    const currDate= new Date();
  return (
    
     <h1>Hello world!{currDate.toLocaleTimeString()}</h1>
    
  );
}

export default App;
