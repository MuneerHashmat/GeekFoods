import styles from "./Card.module.css";
import house from "../assets/house.jpg";

const Card=()=>{
    return (
        <div className={styles.cardContainer}>
           <div className={styles.rightCard}>
                <div className={styles.rightCardContent}>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! <br /> Quidem est esse numquam odio deleniti, beatae, magni dolores provident <br /> quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                    <button>Get in Touch</button>
                </div>
           </div>
           <img src={house}/>
        </div>
    )
}

export default Card;