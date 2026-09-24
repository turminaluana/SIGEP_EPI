import { User, Lock, Eye } from "lucide-react";

function Login() {
  return (
    <div className="login-container">

      {/* LADO ESQUERDO */}
      <div className="login-left">

        <div className="sidebar-logo">
            <img
                src="https://cdn-icons-png.flaticon.com/128/2741/2741372.png"
                alt="Logo SIGEP-EPI"
            />
        </div>

        <h1>SIGEP-EPI</h1>

        <p>
          Sistema Inteligente de Gestão e
          <br />
          Análise de EPI's
        </p>

      </div>

      {/* LADO DIREITO */}
      <div className="login-right">

        <div className="login-box">

          <h2>Bem vindo!</h2>

          <p className="login-subtitle">
            Acesse sua conta para continuar
          </p>

          {/* USUÁRIO */}
          <div className="input-box">
            <User size={20} />

            <input
              type="text"
              placeholder="Usuário"
            />
          </div>

          {/* SENHA */}
          <div className="input-box">
            <Lock size={20} />

            <input
              type="password"
              placeholder="Senha"
            />

            <Eye size={20} />
          </div>

          {/* BOTÃO */}
          <button className="login-button">
            ENTRAR
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;