import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";



function App(){
  return <div><Header />
  <Note head="Card one heading" para = "this is paragraph"/> 
  <Note head="Card second heading" para = "this is second paragraph"/> 
  
  <Footer />
  </div>
};

export default App;