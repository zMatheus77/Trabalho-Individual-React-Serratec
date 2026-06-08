import { useEffect, useState } from "react";
import styles from "./App.module.css";
import logo from "./assets/logo-white.png";

function App() {
  const emailCorreto = "matheus@email.com";
  const senhaCorreta = "123456";

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [logar, setLogar] = useState(false);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    if (logar) {
      console.log("Email:", email);
      console.log("Senha:", senha);

      if (email === emailCorreto && senha === senhaCorreta) {
        setMensagem("fazendo login");
      } 
      else {
        setMensagem("credenciais inválidas");
      }

      setLogar(false);
    }
  }, [logar]);

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

        <div className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            className={styles.input}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button
            className={styles.blueButton}
            onClick={() => setLogar(true)}
          >
            Entrar
          </button>

          <button className={styles.whiteButton}>
            Cadastrar
          </button>
        </div>

        {mensagem && (<p className={styles.status}>{mensagem}</p>)}
      </section>
    </main>
  );
}

export default App;