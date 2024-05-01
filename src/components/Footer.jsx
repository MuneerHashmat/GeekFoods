import styles from "./Footer.module.css";
import logo from "../assets/salad.png"

const Footer=()=>{
    return (
        <div className={styles.footer}>
            <div className={styles.logo}>
                <img src={logo}/>
                <h1>GeekFoods</h1>
            </div>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Incidunt consequuntur amet culpa cum itaque neque.</p>

            <div className={styles.navLinks}>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">History</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
                <a href="#">Blog</a>
            </div>


            <div className={styles.iconLinks}>
                <a href="#"><i className="fi fi-brands-facebook"></i></a>
                <a href="#"><i className="fi fi-brands-instagram"></i></a>
                <a href="#"><i className="fi fi-brands-twitter-alt-circle"></i></a>
                <a href="#"><i className="fi fi-brands-github"></i></a>
                <a href="#"><i className="fi fi-brands-linkedin"></i></a>
            </div>
        </div>
    )
}

export default Footer;