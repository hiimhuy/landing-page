import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import Slogan from './components/Slogan/Slogan';

function App() {
    return (
        <div className="font-sora overflow-y-auto h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700 text-white">
            <Navbar />
            <Slogan />
            <Content />
        </div>
    );
}

export default App;
