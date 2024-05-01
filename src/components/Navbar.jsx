import styles from "./Navbar.module.css"
import logo from "../assets/salad.png"

const Navbar=()=>{
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
                <h1>GeekFoods</h1>
            </div>

            <div className={styles.navItems}>
                <a href="#" className={styles.home}>Home</a>
                <a href="#">Quote</a>
                <a href="#">Restaurants</a>
                <a href="#">Foods</a>
                <a href="#">Contact</a>
            </div>

            <button>Get Started</button>
        </div>
    )
}

export default Navbar;