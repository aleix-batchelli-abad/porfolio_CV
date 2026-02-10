import styles from "@components/AboutMe.module.css";

export default function AboutMe() {
    return (
        <div className={styles.aboutMe}>
            <h1 className={styles.title}>Get to Know Me</h1>

            <div className={styles.boxesContainer}>
                <div className={styles.boxContainer}>
                    <h2>My Interests</h2>
                    <p>
                        Computer Science student at La Salle University with a strong technical background in software development (Java, Python) and network architecture. My experience in robotics and low-level systems integration has given me a practical perspective on how software drives physical operations—a mindset well-suited for the logistics and industrial sector.
                        <br /><br />
                        Combining analytical discipline with a team-oriented work ethic developed through competitive sports, I am eager to join Frit Ravich. I aim to apply my skills in algorithms and data management to contribute to the efficiency of your IT operations and distribution systems.
                    </p>
                </div>

                <div className={styles.boxContainer}>
                    <h2>Some of My Hobbies</h2>
                    <p>
                        Outside of tech, I enjoy staying active, exploring new tools and frameworks, and working on personal projects that challenge me to learn something new. I also love sports, problem‑solving, and anything that pushes me to grow both mentally and physically.
                    </p>
                </div>
            </div>
        </div>
    );
}
