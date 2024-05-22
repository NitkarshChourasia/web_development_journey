// import logo from './logo.svg';
import './App.css';
// import home_image from './home_image.jpg';
import home_image from './home_image.jpg';

let arr1 = ["Hello", "World"];
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <img src={home_image} alt="a real world title written authentic" width="300px" />
      <header>
        <h1>My First React App {arr1}</h1>
      </header>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, vel architecto. Et est quo cum dolores esse sapiente at eum, ad iusto perspiciatis veritatis repellat consectetur corrupti voluptas deserunt quas ullam? Ratione sit exercitationem in? Obcaecati vel temporibus labore! Eos voluptatum, perspiciatis, ratione molestiae pariatur quaerat nisi, praesentium delectus quae tenetur a quo similique labore vero repudiandae ut inventore mollitia. Ipsum, aperiam corporis doloremque possimus provident, quod impedit voluptatem reiciendis dolorem doloribus quidem dolorum? Excepturi omnis ab eaque voluptates natus architecto totam adipisci provident praesentium est! Sint officia veniam excepturi, architecto, placeat exercitationem dolorem, cumque recusandae fugiat minus ullam hic.
      </div>
    </>
  );
}

export default App;
