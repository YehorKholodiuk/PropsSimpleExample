import logo from './logo.svg';
import './App.css';
import Menu from "./Menu";

function App() {
    const siteName = 'LocalCoding';
    const version = 2;
    const isPublic = true;
    const owner = {
        name:'PASV',
        zip:'56566',
        phone:'65-67-88-555'

    }

    const courses = ['JS','React','QA']
    return (
        <div>
            <Menu siteName={siteName} version={version} isPublic={isPublic} owner={owner} courses={courses}/>
        </div>
    );
}

export default App;
