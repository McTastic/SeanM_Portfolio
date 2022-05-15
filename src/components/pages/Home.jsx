import "../../css/home.css";
import FireGIF from "../../images/campfire-pixel.gif";

const Home = () => {
  return (
    <>
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
      <div className="greeting">
        <h1>
          Greetings!
          <br />
          <br />
          Stay Awhile!
        </h1>
          <img src={FireGIF} alt="pixel campfire" />
      </div>
    </>
  );
};

export default Home;
