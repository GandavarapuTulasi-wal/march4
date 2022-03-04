import car from './car.jpg'
import benz from './benz.jpg'
import twitter from './twitter.jpg'
import facebook from './facebook.png'
import gmail from './gmail.png'
const About = () => {
    return (
        <div className="home about-car ">

            <div className="about-page">

                <div className="about">
                    <div className="about-heading">About</div>
                    <div class="side">Learn more about rent car</div>
                    <p>Rent A Car has a new face. After more than 20 years in business, we decided to give a fresher look to our brand and our services. With our fully renewed fleet of vehicles, we are ready to meet all expectations and requirements.</p>
                    <div className="about-para">
                        <p>Why choose us?</p>
                    </div>
                    <div>
                        <div class="about-features">
                            <div class="side-text">
                                <h1>Modern fleet & extensive network</h1>
                                <p>From specialty vehicles to cargo vans, we offer a large spectrum of hire options.</p>
                                <div>
                                    <button>Learn more</button>
                                </div>
                            </div>
                            <img src={car} alt="car" />

                        </div>
                        <div class="about-features">
                            <img src={benz} alt="benz" />
                            <div class="side-text2">
                                <h1>Selection Prestige Rental</h1>
                                <p>Arrive in style with one of our prestige rental cars. Discover our range of executive, luxury and sporty rental cars from the world's leading manufacturers.</p>
                                <div>
                                    <button>Learn more</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <h2>Contact us For more details</h2>
                <div className="footer">
                    <img src={gmail} alt="gmail" className="logo" />
                    <img src={facebook} alt="facebook" className="logo"/>
                    <img src={twitter} alt="twitter" className="logo"/>
                </div>

            </div>
        </div>

    )
}
export default About