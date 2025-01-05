import Button from "../Button";
import styles from "./AboutMe.module.css";


const AboutMe = () => {
    return (
        <div>
            <h1 className={styles.h1} >About Me</h1>
            <p className={styles.p}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptas tempore, cupiditate dignissimos itaque aliquid molestias molestiae exercitationem asperiores veniam libero fugit possimus vel incidunt. Mollitia excepturi provident minus laboriosam, possimus ut quidem, molestias eos quasi unde dolorum necessitatibus corporis quo. Recusandae soluta odit ratione mollitia? Ad ducimus quae tempore nisi doloremque tempora! Facilis corrupti rem dolor, tempore dignissimos officia quisquam doloribus aliquam, ad labore nam quidem cumque dolorum eaque ipsum omnis ab quibusdam eveniet eligendi totam modi nulla beatae sed! Error ullam quaerat ipsum illo perspiciatis est velit cum!
            </p>
            <Button />
        </div>
    );
};

export default AboutMe;