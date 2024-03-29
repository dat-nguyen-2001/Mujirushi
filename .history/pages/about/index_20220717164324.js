import Head from "next/head";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

import classes from "./about.module.css";

function About() {
  return (
    <div>
      <Head>
        <title>無印良品</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/main-img/logo.webp" />
      </Head>

      <Nav />
      <div className={classes.about}>
        <h1 className={classes.h1}>What is MUJI ?</h1>
        <p>
          MUJI was founded in 1980. Its origin was a thorough rationalization of
          the manufacturing process with an eye to creating simple, low-cost,
          good quality products. Specifically, we reexamined products through
          three lenses: material selection, inspection process and packaging
          simplification. For instance, if you omit the bleaching process for
          pulp, the resulting paper is light beige in color. MUJI used this
          paper for its packaging and labels. The ensuing products are
          remarkably pure and fresh. In notable contrast to the prevailing
          over-embellished products in the marketplace, MUJI’s products both won
          great appreciation and sent shock waves not only through Japan but
          across the entire world. <br></br>
          <br></br>
          This is because we do not make objects to entice responses of strong
          affinity, like, “This is what I really want” or, “I must have this.”
          MUJI’s goal is to give customers a rational satisfaction, expressed
          not with, “This is what I really want” but with “This will do.” “This
          is what I really want” expresses both faint egoism and discord, while
          “This will do” expresses conciliatory reasoning. In fact, it may even
          incorporate resignation and a little dissatisfaction. MUJI’s goal is
          to sweep away that slight dissatisfaction, and raise the level of the
          response, “This will do” to one filled with clarity and confidence.{" "}
          <br></br>
          <br></br>
          MUJI’s products, born from an extremely rational manufacturing
          process, are succinct, but they are not in the minimalist style. That
          is, they are like empty vessels. Simplicity and emptiness yield the
          ultimate universality, embracing the feelings and thoughts of all
          people. We have been credited with being “resource-saving”,
          “low-priced”, “simple”, “anonymous” and “nature-oriented”. Without
          placing a disproportionate emphasis on any one of these varied
          assessments, MUJI aims to live up to all. There are more than 700 MUJI
          stores around the world, carrying more than 7,000 items ranging from
          clothing and household goods to food and even houses. But the
          foundation of our ideology hasn’t changed since the day we were
          conceived; like the compass that points due North, we continue to
          orient ourselves to the basis and universality of daily life.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default About;
