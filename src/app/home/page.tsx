export  default function Home(){
    return(
        <div className="home-container">
            <div className="home-A">
                <div className="home-A1">
                    <h1>The furniture brand for the future, with timeless designs</h1>
                    <button>View Collection</button>
                    <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.</p>
                </div>
                <div className="home-A2">
                    <img src="/img/Right Image.png" />
                </div>
            </div>
            <div className="home-B">
                <h1>What makes our Brand Different</h1>
                <div className="home-B1">
                    <div className="home-B1a">
                        <img src="/img/Delivery.png" />
                        <h2>Next day as standard</h2>
                        <p>Order before 3pm and get your order the next day as standard</p>
                    </div>
                    <div className="home-B1b">
                        <img src="/img/Checkmark--outline.png" />
                        <h2>Made by true artisans</h2>
                        <p>Handmade crafted goods made with real passion and craftmanship</p>
                    </div>
                    <div className="home-B1c">
                        <img src="/img/Purchase.png" />
                        <h2>Unbeatable prices</h2>
                        <p>For our materials and quality you won’t find better prices anywhere</p>
                    </div>
                    <div className="home-B1d">
                        <img src="/img/Sprout.png" />
                        <h2>Recycled packaging</h2>
                        <p>We use 100% recycled to ensure our footprint is more manageable</p>
                    </div>
                </div>
            </div>
            <div className="home-collection">
                <h1>New Ceramics</h1>
                <div className="home-collection1">
                <div className="images1">
                    <img src="/img/Right Image.png"  />
                    <div className="image1Box">
                        <div> 
                        <h2>The Dandy chair</h2>
                        <h3>$250</h3>
                        </div>
                    </div>
                    </div>
                    <div  className="images2">
                    <img src="/img/mutka.png" />
                    <div className="image2Box">
                        <div>
                        <h2>Rustic Vase Set</h2>
                        <h3>$155</h3>
                        </div>
                    </div>
                    </div>
                    <div  className="images3">
                    <img src="/img/Parent.png" alt="img5"  />
                    <div className="image3Box">
                        <div>
                        <h2>The Silky Vase</h2>
                        <h3>$125</h3>
                        </div>
                    </div>
                    </div>
                    <div className="images4">
                    <img src="/img/Photo (1).png" alt="img6" />
                    <div className="image4Box">
                        <div>
                        <h2>The Lucy Lamp</h2>
                        <h3>$399</h3>
                        </div>
                    </div>
                    </div>
                </div>
                <button className="btn1">View Collection</button>
            </div>
            <div className="home-C">
            <h1>Our Popular Products</h1>
            <div className="home-C-container">
                <div className="home-C1">
                     <img src="/img/Large.png" alt="Large Sofa" />
                     <h2>The Poplar Suede Sofa</h2>
                    <h3>$980</h3>
                 </div>
                 <div className="home-C2a">
                <img src="/img/Right Image.png" alt="Dandy Chair 1" />
                 <h2>The Dandy Chair</h2>
                 <h3>$250</h3>
                 </div>
                 <div className="home-C3b">
                 <img src="/img/Photo (2).png" alt="Dandy Chair 2" />
                 <h2>The Dandy Chair</h2>
                 <h3>$250</h3>
                 </div>
                 </div>
                 <button className="btn2">View Collection</button>
            </div>
            <div className="home-D">
                <div className="home-DA">
                    <h1>Join the club and get the benefits</h1>
                    <p>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                    <div className="homebtn">
                            <input type="text" placeholder="Your@email.com" />
                            <button>Sign up</button>
                        </div>
                </div>
            </div>
            <div className="home-E">
                <div className="home-E1">
                    <h1>From a studio in London to a global brand with
                    over 400 outlets</h1>
                    <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                    <h2>Get In Touch</h2>
                </div>
                <div className="home-E2">
                    <img src="/img/Image (2).png" />
                </div>
            </div>
        </div>
    )
}