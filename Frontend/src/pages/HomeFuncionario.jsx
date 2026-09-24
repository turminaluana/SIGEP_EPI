import {
  Home,
  Factory,
  BarChart3,
  User,
  FileText,
  CheckCircle,
  Clock,
  TrendingUp,
  X
} from "lucide-react";

import { Link } from "react-router-dom";

function HomeFuncionario() {
  return (
    <div className="dashboard">

      {/* MENU LATERAL */}
      <aside className="sidebar">

        <div className="sidebar-logo">
            <img
                src="https://cdn-icons-png.flaticon.com/128/2741/2741372.png"
                alt="Logo SIGEP-EPI"
            />
        </div>

        <div className="menu">

            <Link to="/" className="menu-item active">
                <Home size={19} />
                <span>Início</span>
            </Link>

            <Link to="/producao" className="menu-item">
                <Factory size={19} />
                <span>Produção</span>
            </Link>

            <Link to="/analises" className="menu-item">
                <BarChart3 size={19} />
                <span>Análises</span>
            </Link>

        </div>

        <div className="sidebar-bottom">

          <button className="menu-item">
            <User size={19} />
            <span>Perfil</span>
          </button>

        </div>

      </aside>


      {/* CONTEÚDO */}
      <main className="dashboard-content">

        {/* CABEÇALHO */}
        <header className="dashboard-header">

          <div>
            <h1>Início</h1>
            <p>Olá, Funcionário! Acompanhe a produção.</p>
          </div>

          <div className="user-info">
            <div className="user-avatar">
              <User size={20} />
            </div>

            <div>
              <strong>Funcionário</strong>
              <small>Operador</small>
            </div>

            <X size={20} className="close-icon" />
          </div>

        </header>


        {/* INDICADORES */}
        <section className="cards">

          <div className="dashboard-card">

            <div className="card-icon blue">
              <FileText size={22} />
            </div>

            <div>
              <span>Ordem atual</span>
              <strong>OP-0045</strong>
            </div>

          </div>


          <div className="dashboard-card">

            <div className="card-icon green">
              <CheckCircle size={22} />
            </div>

            <div>
              <span>Status</span>
              <strong className="green-text">
                Em produção
              </strong>
            </div>

          </div>


          <div className="dashboard-card">

            <div className="card-icon orange">
              <TrendingUp size={22} />
            </div>

            <div>
              <span>Produtividade</span>
              <strong>92%</strong>
            </div>

          </div>

        </section>


        {/* PRODUÇÃO */}
        <section className="dashboard-section">

          <div className="section-title">

            <div>
              <h2>Minha produção</h2>
              <p>Acompanhe suas ordens de produção.</p>
            </div>

            <button className="primary-button">
              Ver produção
            </button>

          </div>


          <div className="production-table">

            <div className="table-header">
              <span>Ordem</span>
              <span>Produto</span>
              <span>Quantidade</span>
              <span>Status</span>
            </div>

            <div className="table-row">
              <span>OP-0045</span>
              <span>Capacete</span>
              <span>250</span>
              <span className="status production">
                Em produção
              </span>
            </div>

            <div className="table-row">
              <span>OP-0044</span>
              <span>Luvas</span>
              <span>180</span>
              <span className="status production">
                Em produção
              </span>
            </div>

            <div className="table-row">
              <span>OP-0043</span>
              <span>Luvas</span>
              <span>200</span>
              <span className="status finished">
                Finalizada
              </span>
            </div>

          </div>

        </section>


        {/* ATALHOS */}
        <section className="quick-actions">

          <h2>Acesso rápido</h2>

          <div className="quick-grid">

            <div className="quick-card">
              <Factory size={25} />
              <strong>Produção</strong>
              <span>Acompanhar produção</span>
            </div>

            <div className="quick-card">
              <BarChart3 size={25} />
              <strong>Análises</strong>
              <span>Visualizar indicadores</span>
            </div>

            <div className="quick-card">
              <Clock size={25} />
              <strong>Histórico</strong>
              <span>Consultar atividades</span>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default HomeFuncionario;