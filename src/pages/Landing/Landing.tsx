import { Button } from '../../components/Button';
import styles from './Landing.module.css';

/** Top navigation bar. */
function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.container} ${styles.navInner}`}>
        <a className={styles.brand} href="#">
          <span className={styles.brandMark}>S</span>
          <span>
            Skripsiku<span className={styles.brandAi}>.ai</span>
          </span>
        </a>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#fitur">Fitur</a>
          <a className={styles.navLink} href="#alur">Alur</a>
          <a className={styles.navLink} href="#harga">Harga</a>
          <a className={styles.navLink} href="#tips">Tips</a>
        </div>
        <div className={styles.navActions}>
          <Button variant="ghost" size="sm">Masuk</Button>
          <Button variant="primary" size="sm">Mulai gratis</Button>
        </div>
      </div>
    </nav>
  );
}

/** Hero — headline, subtitle, CTAs, product mockup. */
function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>Skripsi kelar tepat waktu, tanpa drama.</h1>
        <p className={styles.heroSubtitle}>
          Editor yang ngerti PUEBI, terhubung ke perpustakaan, dan menemani kamu
          sampai sidang. Semua dari browser, di mana pun kamu nulis.
        </p>
        <div className={styles.heroActions}>
          <Button variant="primary" size="lg">Mulai bab pertama</Button>
          <Button variant="secondary" size="lg">Lihat cara kerjanya</Button>
        </div>
        <div className={styles.heroMockup}>Product preview (export from Figma)</div>
      </div>
    </header>
  );
}

/**
 * Skripsiku.ai marketing landing page.
 * Nav + Hero are built; remaining sections are stubbed for incremental build.
 */
export function Landing() {
  return (
    <div className={styles.page}>
      <Nav />
      <Hero />
      {[
        'logos', 'sync', 'usp-alur', 'usp-memandu', 'usp-versi', 'usp-sidang',
        'fitur-grid', 'quote', 'harga', 'tips', 'community', 'final', 'footer',
      ].map((id) => (
        <section key={id} id={id} className={`${styles.container} ${styles.todo}`}>
          section: {id} — coming next
        </section>
      ))}
    </div>
  );
}
