import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Enzo</h1>
        <p className={styles.description}>
        Dedicated software developer and US Army veteran with three years of honorable service. Experienced in iOS, Android, and
Web Development, specializing in writing clean, efficient, and maintainable code. Skilled at thriving in both independent and
collaborative environments, leveraging adaptability and strong communication skills to deliver impactful solutions.
        </p>
        <a href="mailto:enzojimenezsoto@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("assets/hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
