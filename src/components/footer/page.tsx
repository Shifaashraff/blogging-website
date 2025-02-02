export default function Footer() {
    return (
        <footer>
            <div className="sect">
                {/* Section 1 */}
                <div className="sect1">
                    {/* Subsection 1A */}
                    <div className="sect1A">
                        <h1>Menu</h1>
                        <h1>New Arrival</h1>
                        <h1>Best Seller</h1>
                        <h1>Recently Viewed</h1>
                        <h1>Popular This Week</h1>
                        <h1>All Products</h1>
                    </div>

                    {/* Subsection 1B */}
                    <div className="sect1B">
                        <h1>Categories</h1>
                        <h1>Crockery</h1>
                        <h1>Furniture</h1>
                        <h1>Home Wear</h1>
                        <h1>Paint Pots</h1>
                        <h1>Chairs</h1>
                        <h1>Crockery</h1>
                    </div>

                    {/* Subsection 1C */}
                    <div className="sect1C">
                        <h1>Our Categories</h1>
                        <h1>About Us</h1>
                        <h1>Vacancies</h1>
                        <h1>Contact Us</h1>
                        <h1>Privacy</h1>
                        <h1>Return Policy</h1>
                    </div>

                    {/* Subsection 1D */}
                    <div className="sect1D">
                        <h1>Join Our Mailing List</h1>
                        <div className="footerButton">
                            <input type="text" placeholder="Your@email.com" />
                            <button>Sign up</button>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="sect2">
                    <h1>Copyright 2022 Avion LTD</h1>
                    <img src="/img/Social Links.png" alt="Social Links" />
                </div>
            </div>
        </footer>
    );
}
