import logo from './logo.svg';
import './App.css';
import Menu from "./Menu";
import Logo from "./Logo";

function App() {
    const siteName = 'LocalCoding';
    const version = 2;
    const isPublic = true;
    const owner = {
        name: 'PASV',
        zip: '56566',
        phone: '65-67-88-555'

    }

    const courses =
        [
            {
                id: '3444',
                title: 'react',
                price: 675,
            },
            {
                id: '34994',
                title: 'JavaS',
                price: 475,
            },
            {
                id: '344477',
                title: 'QA',
                price: 695,
            },

        ]
    return (
        <div>
            <Logo siteName={siteName}/>
            <Menu siteName={siteName} version={version} isPublic={isPublic} owner={owner} courses={courses}/>
        </div>
    );
}

export default App;
