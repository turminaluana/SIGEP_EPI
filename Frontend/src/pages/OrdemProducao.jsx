import {
  Home,
  Factory,
  BarChart3,
  User,
  Upload,
  FileSpreadsheet,
  CheckCircle,
  X,
  Download
} from "lucide-react";

import { Link } from "react-router-dom";

function OrdemProducao() {
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

          <Link to="/producao" className="menu-item active">
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
            <h1>Ordens de Produção</h1>

            <p>
              Importe e gerencie os dados da produção.
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


        {/* IMPORTAÇÃO */}
        <section className="upload-section">

          <div className="section-heading">

            <div className="section-icon">
              <FileSpreadsheet size={24} />
            </div>

            <div>
              <h2>Importar planilha</h2>

              <p>
                Selecione uma planilha Excel com os dados da produção.
              </p>
            </div>

          </div>


          <div className="upload-area">

            <div className="upload-icon">
              <Upload size={32} />
            </div>

            <h3>Importe sua planilha</h3>

            <p>
              Arraste seu arquivo aqui ou selecione no computador.
            </p>

            <span className="file-types">
              Formatos aceitos: .xlsx e .xls
            </span>

            <button className="primary-button upload-button">
              <Upload size={17} />
              Escolher arquivo
            </button>

          </div>

        </section>


        {/* PLANILHA */}
        <section className="production-data">

          <div className="section-title">

            <div>
              <h2>Dados da planilha</h2>

              <p>
                Visualize os dados importados antes de realizar a análise.
              </p>
            </div>

            <button className="secondary-button">
              <Download size={17} />
              Exportar
            </button>

          </div>


          <div className="spreadsheet">

            <div className="spreadsheet-header">

              <span>Ordem</span>
              <span>Produto</span>
              <span>Quantidade</span>
              <span>Perdas</span>
              <span>Data</span>
              <span>Status</span>

            </div>


            <div className="spreadsheet-row">

              <span>OP-0045</span>
              <span>Capacete</span>
              <span>250</span>
              <span>5</span>
              <span>20/09/2026</span>

              <span className="status production">
                Em produção
              </span>

            </div>


            <div className="spreadsheet-row">

              <span>OP-0044</span>
              <span>Luvas</span>
              <span>180</span>
              <span>3</span>
              <span>20/09/2026</span>

              <span className="status production">
                Em produção
              </span>

            </div>


            <div className="spreadsheet-row">

              <span>OP-0043</span>
              <span>Luvas</span>
              <span>200</span>
              <span>8</span>
              <span>19/09/2026</span>

              <span className="status finished">
                Finalizada
              </span>

            </div>

          </div>

        </section>


        {/* ATRIBUTOS */}
        <section className="analysis-selection">

          <div className="section-title">

            <div>
              <h2>Atributos para análise</h2>

              <p>
                Selecione as informações que deseja analisar.
              </p>
            </div>

          </div>


          <div className="attribute-list">

            <label className="attribute">
              <input type="checkbox" defaultChecked />
              <span>Quantidade produzida</span>
            </label>

            <label className="attribute">
              <input type="checkbox" defaultChecked />
              <span>Produtividade</span>
            </label>

            <label className="attribute">
              <input type="checkbox" />
              <span>Perdas</span>
            </label>

            <label className="attribute">
              <input type="checkbox" />
              <span>Produtos</span>
            </label>

            <label className="attribute">
              <input type="checkbox" />
              <span>Período</span>
            </label>

            <label className="attribute">
              <input type="checkbox" />
              <span>Status</span>
            </label>

          </div>


          <div className="analysis-footer">

            <div className="selected-info">
              <CheckCircle size={18} />
              <span>
                Selecione os dados que deseja utilizar na análise.
              </span>
            </div>

            <button className="primary-button">
              Gerar análise
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default OrdemProducao;