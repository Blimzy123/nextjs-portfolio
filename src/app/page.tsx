import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I&apos;m a <span>Web Developer.</span>
        </h1>

        <p className={styles.description}>
          I create beautiful, responsive, and user-friendly websites. I&apos;m
          learning modern web technologies and building projects that turn ideas
          into reality.
        </p>

        <div className={styles.buttons}>
          <Link href="/projects" className={styles.primaryButton}>
            View My Projects
          </Link>

          <Link href="/contact" className={styles.secondaryButton}>
            Contact Me
          </Link>
        </div>
      </section>

      <section className={styles.skills}>
        <h2>What I&apos;m Learning</h2>

        <div className={styles.skillGrid}>
          <div className={styles.skillCard}>
            <h3>HTML &amp; CSS</h3>
            <p>Creating structured and beautifully styled websites.</p>
          </div>

          <div className={styles.skillCard}>
            <h3>JavaScript</h3>
            <p>Making websites interactive and dynamic.</p>
          </div>

          <div className={styles.skillCard}>
            <h3>React &amp; Next.js</h3>
            <p>Building modern applications with reusable components.</p>
          </div>

          <div className={styles.skillCard}>
            <h3>TypeScript</h3>
            <p>Writing reliable and maintainable code.</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} MyPortfolio. Built with Next.js.</p>
      </footer>
    </main>
  );
}
