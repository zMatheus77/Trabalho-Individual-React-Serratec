import styles from "./App.module.css";
import logo from "./assets/logo-white.png";

function App() {
  return (
    <main className={styles.container}>
      <section className={styles.left}>
        <img src={logo} alt="X Logo" className={styles.logo} />
      </section>

      <section className={styles.right}>
        <h1 className={styles.title}>Acontecendo agora</h1>

        <h2 className={styles.subtitle}>
          Crie sua conta ou entre
        </h2>

        <form className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
          />

          <input
            type="password"
            placeholder="Senha"
            className={styles.input}
          />

          <button type="submit" className={styles.blueButton}>
            Entrar
          </button>

          <button type="button" className={styles.whiteButton}>
            Cadastrar
          </button>
        </form>

        <p className={styles.terms}>
          Ao continuar, você concorda com os Termos de Serviço e a Política de Privacidade.
        </p>
      </section>
    </main>
  );
}

export default App;