import './App.css';
import Calculator from './Calculator/Calculator';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

function App() {
    return (
		<Router>
			<div className="container-fluid">
				<Routes>	
					<Route path="/" element={<Calculator />} />
				</Routes>	
			</div>
		</Router>
    );
}
export default App;
