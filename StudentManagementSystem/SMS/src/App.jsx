import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './pages/StudentList';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return(
        <Router>
            <div className="min-h-screen flex flex-col bg-blue-50">
                <Header />
                <main className="flex-1 flex items-center justify-center pt-24 pb-8">
                    <div className="w-full max-w-3xl">
                        <Routes>
                            <Route path="/" element={<StudentList />} />
                            <Route path="/add" element={<AddStudent />} />
                            <Route path="/edit/:id" element={<EditStudent />} />
                        </Routes>
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
