import {
  Home,
  Factory,
  BarChart3,
  User,
  X,
  Presentation,
  TrendingUp
} from "lucide-react";

import {
  Link,
  useLocation
} from "react-router-dom";


function Analises() {

  const location = useLocation();

  // =====================================================
  // DADOS RECEBIDOS DA PÁGINA DE PRODUÇÃO
  // =====================================================

  const dados = location.state?.dados || [];

  const colunas = location.state?.colunas || [];

  const atributosSelecionados =
    location.state?.atributosSelecionados || [];


  // =====================================================
  // ENCONTRAR COLUNAS
  // =====================================================

  const encontrarColuna = (nomes) => {

    return colunas.find((coluna) => {

      const nome = String(coluna)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      return nomes.some((item) =>
        nome.includes(item)
      );

    });

  };


  // =====================================================
  // IDENTIFICAR COLUNAS DE PRODUÇÃO
  // =====================================================

  const colunaQuantidade = encontrarColuna([
    "quantidade",
    "produzido",
    "producao"
  ]);

  const colunaPerdas = encontrarColuna([
    "perda",
    "perdas"
  ]);


  // =====================================================
  // CONVERTER VALORES
  // =====================================================

  const converterNumero = (valor) => {

    if (
      valor === null ||
      valor === undefined ||
      valor === ""
    ) {
      return 0;
    }

    let texto = String(valor)
      .trim()
      .replace(/\s/g, "");

    // Trata valores como 1.500,50
    if (
      texto.includes(".") &&
      texto.includes(",")
    ) {

      texto = texto
        .replace(/\./g, "")
        .replace(",", ".");

    } else {

      texto = texto.replace(",", ".");

    }

    const numero = Number(texto);

    return Number.isFinite(numero)
      ? numero
      : 0;

  };


  // =====================================================
  // TOTAL PRODUZIDO
  // =====================================================

  const totalProduzido =
    colunaQuantidade
      ? dados.reduce(
          (total, linha) =>
            total +
            converterNumero(
              linha[colunaQuantidade]
            ),
          0
        )
      : 0;


  // =====================================================
  // TOTAL DE PERDAS
  // =====================================================

  const totalPerdas =
    colunaPerdas
      ? dados.reduce(
          (total, linha) =>
            total +
            converterNumero(
              linha[colunaPerdas]
            ),
          0
        )
      : 0;


  // =====================================================
  // UNIDADES PRODUZIDAS
  // =====================================================

  const unidadesProduzidas =
    Math.max(
      totalProduzido - totalPerdas,
      0
    );


  // =====================================================
  // EFICIÊNCIA
  // =====================================================

  const eficiencia =
    totalProduzido > 0
      ? (
          (unidadesProduzidas /
            totalProduzido) *
          100
        )
      : 0;


  // =====================================================
  // PERCENTUAL DE PERDAS
  // =====================================================

  const porcentagemPerdas =
    totalProduzido > 0
      ? (
          (totalPerdas /
            totalProduzido) *
          100
        )
      : 0;


  // =====================================================
  // DADOS DO GRÁFICO DE PRODUÇÃO
  // =====================================================

  const dadosGrafico = dados
    .map((linha, index) => {

      const quantidade =
        colunaQuantidade
          ? converterNumero(
              linha[colunaQuantidade]
            )
          : 0;

      const perdas =
        colunaPerdas
          ? converterNumero(
              linha[colunaPerdas]
            )
          : 0;

      return {
        numero: index + 1,
        quantidade,
        perdas
      };

    })
    .slice(0, 10);


  // =====================================================
  // MAIOR VALOR DOS GRÁFICOS
  // =====================================================

  const maiorQuantidade =
    Math.max(
      ...dadosGrafico.map(
        (item) => item.quantidade
      ),
      1
    );


  const maiorPerda =
    Math.max(
      ...dadosGrafico.map(
        (item) => item.perdas
      ),
      1
    );


  // =====================================================
  // FORMATAR NÚMEROS
  // =====================================================

  const formatarNumero = (valor) => {

    return valor.toLocaleString(
      "pt-BR",
      {
        maximumFractionDigits: 2
      }
    );

  };


  return (

    <div className="dashboard">


      {/* =====================================================
          MENU LATERAL
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
            className="menu-item"
          >

            <Factory size={19} />

            <span>
              Produção
            </span>

          </Link>


          <Link
            to="/analises"
            className="menu-item active"
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
          CONTEÚDO
      ===================================================== */}

      <main className="dashboard-content">


        {/* =====================================================
            CABEÇALHO
        ===================================================== */}

        <header className="dashboard-header">

          <div>

            <h1>
              Análise da Produção
            </h1>

            <p>
              Visualização dos indicadores selecionados.
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
            ATRIBUTOS SELECIONADOS
        ===================================================== */}

        <section className="summary-section">

          <h2>
            Atributos selecionados
          </h2>


          {atributosSelecionados.length > 0 ? (

            <div className="attribute-list">

              {atributosSelecionados.map(
                (atributo) => (

                  <div
                    className="attribute"
                    key={atributo}
                  >

                    <span>
                      {atributo}
                    </span>

                  </div>

                )
              )}

            </div>

          ) : (

            <p>
              Nenhum atributo foi selecionado.
            </p>

          )}

        </section>


        {/* =====================================================
            INDICADORES
        ===================================================== */}

        <section className="analysis-cards">


          {/* EFICIÊNCIA */}

          <div className="analysis-card">

            <div className="analysis-card-header">

              <span>
                Eficiência
              </span>

              <TrendingUp size={17} />

            </div>


            <div className="circle-progress efficiency">

              <div>

                <strong>
                  {eficiencia.toFixed(1)}%
                </strong>

                <small>
                  eficiência
                </small>

              </div>

            </div>

          </div>


          {/* PERDAS */}

          <div className="analysis-card">

            <div className="analysis-card-header">

              <span>
                Perdas
              </span>

              <TrendingUp size={17} />

            </div>


            <div className="circle-progress losses">

              <div>

                <strong>
                  {porcentagemPerdas.toFixed(1)}%
                </strong>

                <small>
                  de perdas
                </small>

              </div>

            </div>

          </div>


          {/* QUANTIDADE */}

          <div className="analysis-card quantity-card">

            <div className="analysis-card-header">

              <span>
                Quantidade produzida
              </span>

            </div>


            <div className="quantity-total">

              <strong>
                {formatarNumero(
                  totalProduzido
                )}
              </strong>

              <small>
                unidades
              </small>

            </div>

          </div>

        </section>


        {/* =====================================================
            GRÁFICO DE PRODUÇÃO
        ===================================================== */}

        <section className="summary-section">

          <h2>
            Produção por registro
          </h2>

          <p>
            Quantidade produzida em cada registro da planilha.
          </p>


          {dadosGrafico.length > 0 &&
          colunaQuantidade ? (

            <div className="real-chart">

              {dadosGrafico.map(
                (item) => {

                  const altura =
                    (
                      item.quantidade /
                      maiorQuantidade
                    ) * 100;

                  return (

                    <div
                      className="real-chart-column"
                      key={item.numero}
                    >

                      <div className="real-chart-value">

                        {formatarNumero(
                          item.quantidade
                        )}

                      </div>


                      <div className="real-chart-bar-area">

                        <div
                          className="real-chart-bar"
                          style={{
                            height: `${Math.max(
                              altura,
                              3
                            )}%`
                          }}
                        />

                      </div>


                      <span>
                        {item.numero}
                      </span>

                    </div>

                  );

                }
              )}

            </div>

          ) : (

            <div className="empty-chart">

              <p>
                Não foi encontrada uma coluna de quantidade na planilha.
              </p>

            </div>

          )}

        </section>


        {/* =====================================================
            GRÁFICO DE PERDAS
        ===================================================== */}

        <section className="summary-section">

          <h2>
            Perdas por registro
          </h2>

          <p>
            Quantidade de perdas identificadas em cada registro.
          </p>


          {dadosGrafico.length > 0 &&
          colunaPerdas ? (

            <div className="real-chart">

              {dadosGrafico.map(
                (item) => {

                  const altura =
                    (
                      item.perdas /
                      maiorPerda
                    ) * 100;

                  return (

                    <div
                      className="real-chart-column"
                      key={item.numero}
                    >

                      <div className="real-chart-value">

                        {formatarNumero(
                          item.perdas
                        )}

                      </div>


                      <div className="real-chart-bar-area">

                        <div
                          className="real-chart-bar loss-bar"
                          style={{
                            height: `${Math.max(
                              altura,
                              3
                            )}%`
                          }}
                        />

                      </div>


                      <span>
                        {item.numero}
                      </span>

                    </div>

                  );

                }
              )}

            </div>

          ) : (

            <div className="empty-chart">

              <p>
                Não foi encontrada uma coluna de perdas na planilha.
              </p>

            </div>

          )}

        </section>


        {/* =====================================================
            RESUMO
        ===================================================== */}

        <section className="summary-section">

          <h2>
            Resumo dos indicadores
          </h2>


          <div className="summary-table">


            <div className="summary-row">

              <span>
                Total produzido
              </span>

              <strong>
                {formatarNumero(
                  totalProduzido
                )}
              </strong>

            </div>


            <div className="summary-row">

              <span>
                Total de perdas
              </span>

              <strong>
                {formatarNumero(
                  totalPerdas
                )}
              </strong>

            </div>


            <div className="summary-row">

              <span>
                Unidades produzidas
              </span>

              <strong>
                {formatarNumero(
                  unidadesProduzidas
                )}
              </strong>

            </div>


            <div className="summary-row">

              <span>
                Eficiência média
              </span>

              <strong>
                {eficiencia.toFixed(1)}%
              </strong>

            </div>


            <div className="summary-row">

              <span>
                Registros analisados
              </span>

              <strong>
                {dados.length}
              </strong>

            </div>

          </div>

        </section>


        {/* =====================================================
            DADOS ANALISADOS
        ===================================================== */}

        <section className="summary-section">

          <h2>
            Dados analisados
          </h2>

          <p>

            {dados.length > 0

              ? `A análise foi realizada utilizando ${dados.length} registro(s) da planilha.`

              : "Nenhum dado de planilha foi recebido."

            }

          </p>


          {colunas.length > 0 && (

            <p style={{ marginTop: "10px" }}>

              Colunas disponíveis:{" "}

              <strong>
                {colunas.join(", ")}
              </strong>

            </p>

          )}

        </section>


        {/* =====================================================
            POWER BI
        ===================================================== */}

        <section className="presentation-section">

          <div>

            <h2>
              Apresentação dos resultados
            </h2>

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