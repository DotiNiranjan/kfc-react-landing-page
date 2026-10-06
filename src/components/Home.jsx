
import swiggy from "../image/swiggy.webp"
import zomato from "../image/zomato.webp"
import kfc from "../image/kfc_png.webp"

const Home = () => {
    return (
        <div className="home">

            <div className="left">
                <span className="title">TASTE THE BEST KFC CHICKEN.</span>
                <p>Kentucky Fried Chicken (KFC), founded by Harland Sanders in 1930, is a globally recognized fast-food chain renowned for its signature fried chicken, which is seasoned with a secret blend of 11 herbs and spices developed by Sanders himself. The company's journey began with a roadside restaurant in Corbin, Kentucky, during the Great Depression, and it officially launched its franchising model in 1952, marking the beginning of its rapid expansion across the United States. KFC's iconic brand identity, anchored by the image of Colonel Sanders and the slogan "Finger Lickin' Good," has remained a cornerstone of its marketing strategy, contributing significantly to its widespread recognition and enduring appeal.</p>
                <div className="btns">
                    <button className="btn1">Order Now</button>
                    <button className="btn2">KFC CHICKEN</button>
                </div>
                <div className="social">
                    <span className="social-1">Also Avilable On</span>
                    <div className="social-icons">
                        <img src={swiggy} alt="swiggy" />
                        <img src={zomato} alt="zomato" />
                    </div>

                </div>
            </div>
            <div className="right">
                <img src={kfc} alt="kfc" />
            </div>

        </div>
    )
}

export default Home;