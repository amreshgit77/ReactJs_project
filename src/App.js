import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" link="Links" />
      <div className="container my-3" >
        <TextForm heading="Write some text to convert"/>
      </div>
    </>
  );
}

export default App;
