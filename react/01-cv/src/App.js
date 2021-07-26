
import './App.css';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import WorkExperience from './components/WorkExperience'
import MyProjects from './components/MyProjects'
import Footer from './components/Footer';



function App() {
  const headerData = {
    personName: 'Sofia Kozytska',
    
  }
  return  ( 
    <div>
      <Header></Header>
    <AboutMe></AboutMe>
    <WorkExperience></WorkExperience>
    <MyProjects></MyProjects>
    <Footer></Footer>
    </div>
  )
}

export default App;
