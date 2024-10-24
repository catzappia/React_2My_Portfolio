import catherineImage from '../../assets/catherine.png';
import './home.css';

const Home = () => {
    
    return (
      
      <div>
        <div className="main">
        <div className="about-container">
        <h1 className="about-title">Hi there!</h1>
        <img
          className="about-image"
          src={catherineImage} /* Change to your image path */
          alt="Catherine"
        />
        <div className="about-paragraph">
          <p>
          I'm Catherine, a software developer with a passion for creating engaging and dynamic web applications. 
          I enjoy working with modern technologies like React, Node.js, and more. Outside of coding, 
          I love knitting and reading.
        </p>
      
        </div>
      </div>
      </div>
    </div>
    
  );
};
  
  export default Home;