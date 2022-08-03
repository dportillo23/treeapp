import '../styles/style.css';
import data from "../data/data.json"
import ButtonLink from './ButtonLink';
import primaryImage from "../images/Quique.jpg"
import Footer from './Footer';
import background from "../images/Buildings.jpg"

export default function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
      <header className='hero'>
        <img src={primaryImage} alt="Profile" className="hero__img" />
        <h1 className="hero__title">¡Hola!</h1>
        <p className='hero__greetings'>Te comparto algunas de las plataformas para inversión principalmente desde Chile, aunque también hay opciones para invertir internacionalmente desde cualquier pais.
       <br /><br /> Aquí puedes encontrar los links de estas plataformas:</p>
      </header>

      <div className="buttons__div">
        {data.map(item => {
            return (
            <ButtonLink
              data={item}
              key={item.name}
            />)
          })}
      </div>

      <Footer></Footer>
    </div>
  );
}
