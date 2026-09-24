import {
  Home,
  Factory,
  BarChart3,
  User,
  X,
  Presentation,
  TrendingUp
} from "lucide-react";

import { Link } from "react-router-dom";

function Analises() {
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

            <Link to="/" className="menu-item">
                <Home size={19} />
                <span>Início</span>
            </Link>

            <Link to="/producao" className="menu-item">
                <Factory size={19} />
                <span>Produção</span>
            </Link>

            <Link to="/analises" className="menu-item active">
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
            <h1>Análise da Produção</h1>

            <p>
              Visualização dos indicadores selecionados.
            </p>
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
        <section className="analysis-cards">

          {/* EFICIÊNCIA */}
          <div className="analysis-card">

            <div className="analysis-card-header">
              <span>Eficiência</span>
              <TrendingUp size={17} />
            </div>

            <div className="circle-progress efficiency">
              <div>
                <strong>92%</strong>
                <small>eficiência</small>
              </div>
            </div>

          </div>


          {/* PERDAS */}
          <div className="analysis-card">

            <div className="analysis-card-header">
              <span>Perdas</span>
              <TrendingUp size={17} />
            </div>

            <div className="circle-progress losses">
              <div>
                <strong>3%</strong>
                <small>de perdas</small>
              </div>
            </div>

          </div>


          {/* QUANTIDADE */}
          <div className="analysis-card quantity-card">

            <div className="analysis-card-header">
              <span>Quantidade</span>
            </div>

            <div className="bar-chart">

              <div className="bar" style={{ height: "30%" }}></div>
              <div className="bar" style={{ height: "40%" }}></div>
              <div className="bar" style={{ height: "50%" }}></div>
              <div className="bar" style={{ height: "62%" }}></div>
              <div className="bar" style={{ height: "70%" }}></div>
              <div className="bar" style={{ height: "85%" }}></div>
              <div className="bar" style={{ height: "100%" }}></div>

            </div>

          </div>

        </section>


        {/* RESUMO */}
        <section className="summary-section">

          <h2>Resumo dos indicadores</h2>

          <div className="summary-table">

            <div className="summary-row">
              <span>Total produzido</span>
              <strong>500</strong>
            </div>

            <div className="summary-row">
              <span>Total de perdas</span>
              <strong>23</strong>
            </div>

            <div className="summary-row">
              <span>Unidades produzidas</span>
              <strong>477</strong>
            </div>

            <div className="summary-row">
              <span>Eficiência média</span>
              <strong>92%</strong>
            </div>

          </div>

        </section>


        {/* POWER BI */}
        <section className="presentation-section">

          <div>
            <h2>Apresentação dos resultados</h2>

            <p>
              Gere uma apresentação visual com os dados analisados.
            </p>
          </div>

          <button className="powerbi-button">
            <Presentation size={18} />
            Gerar apresentação
          </button>

        </section>

      </main>

    </div>
  );
}

export default Analises;