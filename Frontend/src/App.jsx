import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeFuncionario from "./pages/HomeFuncionario";
import OrdemProducao from "./pages/OrdemProducao";
import Analises from "./pages/Analises";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomeFuncionario />} />

        <Route
          path="/producao"
          element={<OrdemProducao />}
        />

        <Route
          path="/analises"
          element={<Analises />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;