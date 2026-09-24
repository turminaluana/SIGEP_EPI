import {
  Home,
  Factory,
  BarChart3,
  Users,
  Settings,
  User,
  FileText,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  X
} from "lucide-react";

function HomeSupervisor() {
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

          <button className="menu-item active">
            <Home size={19} />
            <span>Início</span>
          </button>

          <button className="menu-item">
            <Factory size={19} />
            <span>Produção</span>
          </button>

          <button className="menu-item">
            <BarChart3 size={19} />
            <span>Análises</span>
          </button>

          <button className="menu-item">
            <Users size={19} />
            <span>Usuários</span>
          </button>

          <button className="menu-item">
            <Settings size={19} />
            <span>Gestão</span>
          </button>

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

        <header className="dashboard-header">

          <div>
            <h1>Início</h1>
            <p>Olá, Supervisor! Acompanhe os indicadores da produção.</p>
          </div>

          <div className="user-info">

            <div className="user-avatar">
              <User size={20} />
            </div>

            <div>
              <strong>Supervisor</strong>
              <small>Supervisor</small>
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
              <span>Ordens ativas</span>
              <strong>12</strong>
            </div>

          </div>


          <div className="dashboard-card">

            <div className="card-icon green">
              <CheckCircle size={22} />
            </div>

            <div>
              <span>Produção</span>
              <strong className="green-text">
                92%
              </strong>
            </div>

          </div>


          <div className="dashboard-card">

            <div className="card-icon orange">
              <AlertTriangle size={22} />
            </div>

            <div>
              <span>Perdas</span>
              <strong>8%</strong>
            </div>

          </div>


          <div className="dashboard-card">

            <div className="card-icon purple">
              <Users size={22} />
            </div>

            <div>
              <span>Operadores</span>
              <strong>24</strong>
            </div>

          </div>

        </section>


        {/* ORDENS */}
        <section className="dashboard-section">

          <div className="section-title">

            <div>
              <h2>Últimas ordens</h2>
              <p>Acompanhamento geral da produção.</p>
            </div>

            <button className="primary-button">
              Ver todas
            </button>

          </div>


          <div className="production-table">

            <div className="table-header">
              <span>Ordem</span>
              <span>Produto</span>
              <span>Responsável</span>
              <span>Status</span>
            </div>

            <div className="table-row">
              <span>OP-0045</span>
              <span>Capacete</span>
              <span>João</span>
              <span className="status production">
                Em produção
              </span>
            </div>

            <div className="table-row">
              <span>OP-0044</span>
              <span>Luvas</span>
              <span>Maria</span>
              <span className="status production">
                Em produção
              </span>
            </div>

            <div className="table-row">
              <span>OP-0043</span>
              <span>Luvas</span>
              <span>Pedro</span>
              <span className="status finished">
                Finalizada
              </span>
            </div>

          </div>

        </section>


        {/* RESUMO */}
        <section className="quick-actions">

          <h2>Gestão rápida</h2>

          <div className="quick-grid">

            <div className="quick-card">
              <Factory size={25} />
              <strong>Produção</strong>
              <span>Gerenciar ordens</span>
            </div>

            <div className="quick-card">
              <BarChart3 size={25} />
              <strong>Análises</strong>
              <span>Visualizar indicadores</span>
            </div>

            <div className="quick-card">
              <Users size={25} />
              <strong>Usuários</strong>
              <span>Gerenciar operadores</span>
            </div>

            <div className="quick-card">
              <TrendingUp size={25} />
              <strong>Relatórios</strong>
              <span>Acompanhar resultados</span>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default HomeSupervisor;