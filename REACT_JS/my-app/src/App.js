// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import home_image from './home_image.jpg';
function App() {
  return (
    <>
      <Navbar title="TextUtiils Nitkarsh" aboutText="About Text" />
      <div className="container">
        <TextForm heading="Enter the text to analyse" />
      </div>
    </>
  );
}

export default App;
