import Picture from "../../images/self_pic.jpg"
import "../../css/about.css"

const About = () =>{
    return (
        <>
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div className="about">
            <div className="aboutText">Hi there! My name is Sean and I'm a web developer! I have spent most of my life working in various tech fields, but gained a passion for web developement and programming over the years so here we are! I am very interested in website design and crafting functional yet beautiful user experiences. </div>
            <img className="aboutPic" src={Picture} alt="Self portrait of me"/>
            <div className="aboutIcons"></div>
        </div>
        </>
    )
}

export default About;