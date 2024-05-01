import restaurant from "../assets/restaurant.jpg";
import styles from "./Hero.module.css";

const Hero=()=>{
    return (
        <div className={styles.heroContainer}>
            <img src={restaurant} alt="restaurant" />
            <div className={styles.heroContent}>
                <h1>Let us find your <br /><span>Forever Food.</span> </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <div className={styles.heroButtons}>
                    <button>Search Now</button>
                    <button>Know More</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;


