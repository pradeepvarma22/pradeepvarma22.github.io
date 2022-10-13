import About from './components/About';
import Certifications from "./components/Certifications"
import Experience from './components/Experience';
import Footer from './components/Footer';
// Import Components
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from "./components/Skills"
import Social from './components/Social';

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			<Projects />
			<Experience />
			<Skills />
			<Certifications />
			<Social />
			<Footer />
		</div>
	);
}

export default App;
