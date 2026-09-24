import { useRef, useState } from "react";
import * as XLSX from "xlsx";
import { useNavigate, Link } from "react-router-dom";

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

function OrdemProducao() {

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [dados, setDados] = useState([]);
  const [colunas, setColunas] = useState([]);
  const [nomeArquivo, setNomeArquivo] = useState("");

  const [atributosSelecionados, setAtributosSelecionados] =
    useState([]);


  // =====================================================
  // IMPORTAR PLANILHA
  // =====================================================

  const handleFile = (event) => {

    const arquivo = event.target.files[0];

    if (!arquivo) {
      return;
    }

    setNomeArquivo(arquivo.name);

    const reader = new FileReader();

    reader.onload = (e) => {

      try {

        const dadosBrutos = new Uint8Array(
          e.target.result
        );

        const workbook = XLSX.read(
          dadosBrutos,
          {
            type: "array"
          }
        );

        const primeiraAba =
          workbook.SheetNames[0];

        const planilha =
          workbook.Sheets[primeiraAba];

        const dadosConvertidos =
          XLSX.utils.sheet_to_json(
            planilha,
            {
              defval: ""
            }
          );

        if (dadosConvertidos.length > 0) {

          setDados(dadosConvertidos);

          const colunasEncontradas =
            Object.keys(
              dadosConvertidos[0]
            );

          setColunas(colunasEncontradas);

          setAtributosSelecionados([]);

        } else {

          setDados([]);
          setColunas([]);
          setAtributosSelecionados([]);

          alert(
            "A planilha está vazia."
          );

        }

      } catch (error) {

        console.error(
          "Erro ao ler a planilha:",
          error
        );

        alert(
          "Não foi possível ler a planilha."
        );

      }

    };

    reader.readAsArrayBuffer(arquivo);

  };


  // =====================================================
  // SELECIONAR ATRIBUTO
  // =====================================================

  const selecionarAtributo = (coluna) => {

    setAtributosSelecionados((atual) => {

      if (atual.includes(coluna)) {

        return atual.filter(
          (item) => item !== coluna
        );

      }

      return [
        ...atual,
        coluna
      ];

    });

  };


  // =====================================================
  // EXPORTAR PLANILHA
  // =====================================================

  const exportarPlanilha = () => {

    if (dados.length === 0) {

      alert(
        "Importe uma planilha antes de exportar."
      );

      return;
    }

    const worksheet =
      XLSX.utils.json_to_sheet(dados);

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Produção"
    );

    XLSX.writeFile(
      workbook,
      "dados_producao.xlsx"
    );

  };


  // =====================================================
  // GERAR ANÁLISE
  // =====================================================

  const gerarAnalise = () => {

    if (dados.length === 0) {

      alert(
        "Importe uma planilha antes de gerar a análise."
      );

      return;
    }

    if (atributosSelecionados.length === 0) {

      alert(
        "Selecione pelo menos um atributo para análise."
      );

      return;
    }

    // Envia os dados para a página Análises
    navigate("/analises", {

      state: {

        dados: dados,

        colunas: colunas,

        atributosSelecionados:
          atributosSelecionados

      }

    });

  };


  return (

    <div className="dashboard">


      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="sidebar">

        <div className="sidebar-logo">

          <img
            src="https://cdn-icons-png.flaticon.com/128/2741/2741372.png"
            alt="Logo SIGEP-EPI"
          />

        </div>


        <div className="menu">

          <Link
            to="/"
            className="menu-item"
          >

            <Home size={19} />

            <span>
              Início
            </span>

          </Link>


          <Link
            to="/producao"
            className="menu-item active"
          >

            <Factory size={19} />

            <span>
              Produção
            </span>

          </Link>


          <Link
            to="/analises"
            className="menu-item"
          >

            <BarChart3 size={19} />

            <span>
              Análises
            </span>

          </Link>

        </div>


        <div className="sidebar-bottom">

          <button className="menu-item">

            <User size={19} />

            <span>
              Perfil
            </span>

          </button>

        </div>

      </aside>


      {/* =====================================================
          CONTEÚDO PRINCIPAL
      ===================================================== */}

      <main className="dashboard-content">


        {/* =====================================================
            CABEÇALHO
        ===================================================== */}

        <header className="dashboard-header">

          <div>

            <h1>
              Ordens de Produção
            </h1>

            <p>
              Importe e gerencie os dados da produção.
            </p>

          </div>


          <div className="user-info">

            <div className="user-avatar">

              <User size={20} />

            </div>


            <div>

              <strong>
                Funcionário
              </strong>

              <small>
                Operador
              </small>

            </div>


            <X
              size={20}
              className="close-icon"
            />

          </div>

        </header>


        {/* =====================================================
            IMPORTAR PLANILHA
        ===================================================== */}

        <section className="upload-section">


          <div className="section-heading">

            <div className="section-icon">

              <FileSpreadsheet
                size={24}
              />

            </div>


            <div>

              <h2>
                Importar planilha
              </h2>

              <p>
                Selecione uma planilha Excel com os dados da produção.
              </p>

            </div>

          </div>


          <div className="upload-area">


            <div className="upload-icon">

              <Upload size={32} />

            </div>


            <h3>
              Importe sua planilha
            </h3>


            <p>
              Selecione um arquivo Excel no computador.
            </p>


            <span className="file-types">

              Formatos aceitos: .xlsx e .xls

            </span>


            <input
              ref={fileInputRef}
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFile}
              style={{
                display: "none"
              }}
            />


            <button
              className="primary-button upload-button"
              onClick={() => {

                fileInputRef.current?.click();

              }}
            >

              <Upload size={17} />

              Escolher arquivo

            </button>


            {nomeArquivo && (

              <p className="file-selected">

                Arquivo selecionado:

                <strong>
                  {" "}
                  {nomeArquivo}
                </strong>

              </p>

            )}

          </div>

        </section>


        {/* =====================================================
            DADOS DA PLANILHA
        ===================================================== */}

        <section className="production-data">


          <div className="section-title">


            <div>

              <h2>
                Dados da planilha
              </h2>

              <p>
                Visualize os dados importados antes de realizar a análise.
              </p>

            </div>


            <button
              className="secondary-button"
              onClick={exportarPlanilha}
            >

              <Download size={17} />

              Exportar

            </button>

          </div>


          <div className="spreadsheet">


            {dados.length > 0 ? (

              <>


                {/* CABEÇALHO DA TABELA */}

                <div
                  className="spreadsheet-header"
                  style={{
                    gridTemplateColumns:
                      `repeat(${colunas.length}, minmax(150px, 1fr))`
                  }}
                >

                  {colunas.map(
                    (coluna) => (

                      <span
                        key={coluna}
                      >

                        {coluna}

                      </span>

                    )
                  )}

                </div>


                {/* LINHAS DA TABELA */}

                {dados.map(
                  (linha, index) => (

                    <div
                      className="spreadsheet-row"
                      key={index}
                      style={{
                        gridTemplateColumns:
                          `repeat(${colunas.length}, minmax(150px, 1fr))`
                      }}
                    >

                      {colunas.map(
                        (coluna) => (

                          <span
                            key={coluna}
                          >

                            {linha[coluna]}

                          </span>

                        )
                      )}

                    </div>

                  )
                )}

              </>

            ) : (

              <div className="empty-spreadsheet">

                <FileSpreadsheet
                  size={35}
                />

                <p>
                  Nenhuma planilha foi importada.
                </p>

                <small>
                  Selecione um arquivo Excel para visualizar os dados.
                </small>

              </div>

            )}

          </div>

        </section>


        {/* =====================================================
            ATRIBUTOS PARA ANÁLISE
        ===================================================== */}

        <section className="analysis-selection">


          <div className="section-title">

            <div>

              <h2>
                Atributos para análise
              </h2>

              <p>
                Selecione as colunas que deseja utilizar na análise.
              </p>

            </div>

          </div>


          {colunas.length > 0 ? (

            <div className="attribute-list">

              {colunas.map(
                (coluna) => (

                  <label
                    className="attribute"
                    key={coluna}
                  >

                    <input
                      type="checkbox"
                      checked={
                        atributosSelecionados.includes(
                          coluna
                        )
                      }
                      onChange={() =>
                        selecionarAtributo(
                          coluna
                        )
                      }
                    />

                    <span>
                      {coluna}
                    </span>

                  </label>

                )
              )}

            </div>

          ) : (

            <div className="empty-attributes">

              <FileSpreadsheet
                size={25}
              />

              <p>
                Importe uma planilha para selecionar os atributos.
              </p>

            </div>

          )}


          {/* =====================================================
              RODAPÉ
          ===================================================== */}

          <div className="analysis-footer">


            <div className="selected-info">

              <CheckCircle
                size={18}
              />

              <span>

                {atributosSelecionados.length > 0

                  ? `${atributosSelecionados.length} atributo(s) selecionado(s).`

                  : "Nenhum atributo selecionado."

                }

              </span>

            </div>


            <button
              className="primary-button"
              disabled={
                atributosSelecionados.length === 0
              }
              onClick={gerarAnalise}
            >

              Gerar análise

            </button>


          </div>

        </section>


      </main>

    </div>

  );

}

export default OrdemProducao;