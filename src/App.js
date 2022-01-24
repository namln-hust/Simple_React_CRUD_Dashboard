import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import 'antd/dist/antd.css';
import './App.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<SplashPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/home/*" element={<HomePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}

export default App;
