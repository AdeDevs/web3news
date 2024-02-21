// import Close from "../assets/close-menu.png"
import Menu from "../assets/open-menu.png"
import Logo from "../assets/logo.png"
import Hero from "../assets/desktopHero.jpg"
import Mobile from "../assets/mobileHero.jpg"

function HomeScreen() {
    return (
        <div className="home-box">
            <nav>
                <img src={Logo} alt="logo" />
                <img id="menu" src={Menu} alt="menu" />
                <ul>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </nav>

            <main>
                <div className="first">
                    <section>
                        <img id="desktop-hero" src={Hero} alt="hero" />
                        <img id="mobile-hero" src={Mobile} alt="hero" />
                    </section>
                    <article>
                        <h1>The Bright Future of Web 3.0?</h1>
                        <aside>
                            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                            <button>READ MORE</button>
                        </aside>
                    </article>
                </div>

                <div className="second">
                    <h1>New</h1>
                    <section>
                        <article>
                            <h1>Hydrogen VS Electric Cars</h1>
                            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                        </article>
                        <article>
                            <h1>The Downsides of Al Artistry</h1>
                            <p>What are the possible adverse effects of on-demand Al image generation!</p>
                        </article>
                        <article>
                            <h1>Is VC Funding Drying Up?</h1>
                            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
                        </article>
                    </section>
                </div>
            </main>

            <footer></footer>
        </div>
    )
}

export default HomeScreen;