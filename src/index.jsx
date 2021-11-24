import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, useRoutes } from "react-router-dom";
import AlunosListagem from "./pages/alunos/AlunosListagem";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import CadastrarAlunos from "./pages/alunos/CadastrarAlunos";
import CadastrarMaterias from "./pages/materias/CadastrarMaterias";
import ListarMaterias from "./pages/materias/ListarMaterias";

const Routes = () => {
	const routes = useRoutes([
		{ path: "/", element: <AlunosListagem /> },
		{ path: "/cadastrar-alunos", element: <CadastrarAlunos /> },
		{ path: "/cadastrar-materias", element: <CadastrarMaterias /> },
		{ path: "/listar-materias", element: <ListarMaterias /> },
	]);

	return routes;
};

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Container maxWidth="md">
				<Routes />
			</Container>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
