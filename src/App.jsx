import styles from './App.module.css';

import yaml from 'js-yaml';
import rawCV from '@assets/data/data.yaml?raw';
import NavigationBar from "@components/NavigationBar.jsx";
import PersonalInfo from "@components/PersonalInfo.jsx";
import AboutMe from "@components/AboutMe.jsx";
import Skills from "@components/Skills.jsx";
import Contact from "@components/Contact.jsx";
import Projects from "@components/Projects.jsx";
const cv = yaml.load(rawCV);


export default function App() {
    return (
        <div className={styles.App}>
            <NavigationBar />
            <PersonalInfo />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

