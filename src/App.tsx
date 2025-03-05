import NavBar from './components/NavBar'
import Topo from './components/Topo'
import Sobre from './components/Sobre'
import Tecnologias from './components/Tecnologias'
import Projetos from './components/Projetos'
import Contact from './components/Contact'
import Especialidades from './components/Especialidades'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-neutral-600 selection:text-neutral-200 bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-screen'>
        
        <div className='container mx-auto px-4 lg:px-15'>
          <NavBar />
          <Topo />
          <Sobre />
          <Especialidades />
          <Tecnologias />
          <Projetos />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}
export default App
