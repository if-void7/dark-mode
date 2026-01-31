import logo from '../public/logo.png'
import logo2 from '../public/logo2.png'
import codeDark from '../public/code-dark.png'
import codeLight from '../public/code-light.png'
import { use, useEffect, useState } from 'react'
import './App.css'
import star from './assets/star.svg'

function App() {

  const [darkMode, setDarkMode] = useState(()=> localStorage.getItem("darkMode") === "true"); //Inicialmente no modo light

  useEffect(()=>{
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode] );



  const toggleDarkMode = () => setDarkMode(!darkMode);


  return (
    <div className={darkMode? 'app dark' : 'app'}>
      <button className='darkmode-btn' onClick={toggleDarkMode} >
        {darkMode?<i className='bxf  bx-sun'></i>: <i className='bxf  bx-moon-stars'></i> }
      </button>

      <img src={darkMode?'/logo.png':'/logo2.png'} alt="Logo IFSC" className='logo' />

      <div className="main-container">
        <div className="main-content">
          <h1>
            <span className='react-text'>React</span> + JavaScript
            <br />
            <span className='highlight'>Aprenda sem limites</span>
          </h1>
          <p>
            Formação Contínuada em Programação Frontend com a Biblioteca React e JavaScript.
            Aprenda React e se torne um profissional preparado para desenvolver interfaces modernas,
            interativas e eficientes para a web. Neste curso, você vai dominar os principais conceitos 
            do React, construindo aplicações Frontend com qualidade e desempenho exigidos pelo mercado de trabalho.
          </p>
          <span className='professor'>PROF. EDUARDO GOMES</span>
          <div className="buttons">
            <button className='primary' onClick={()=> window.open('https://moodle4.ifsc.edu.br/', 'blank')}>Acessar o Moodle</button>
            <button className='secondary' onClick={()=> window.open('https://sigaa.ifsc.edu.br/', 'blank')}>Acessar o Sigaa</button>
          </div>
          <div className="reviews">
            <img className='avatar' src="https://randomuser.me/api/portraits/men/75.jpg" alt="user one" />
            <img className='avatar' src="https://randomuser.me/api/portraits/men/76.jpg" alt="user two" />
            <span className='plus'>+620</span>
            <span className='star'> 
              {[...Array(4)].map((_, i) => (
                <i class='bxf  bx-star' key={i}></i>
              ))}
              4/5 MEC 
            </span>
            <br />
            <span>Mais de <strong>620</strong> desenvolvedores inscritos na primeira edição</span>
          </div>
        </div>
        <div className="code-example">
          <div className="code-header">
            {darkMode?'dark-mode.jsx' : 'light-mode.jsx'} 
          </div>
          <img src={darkMode? '/code-dark.png':'/code-light.png'} alt="React Code" />
          <div className="code-tags">
            <span className='tag react'>React</span>
            <span className='tag javascript'>JavaScript</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
