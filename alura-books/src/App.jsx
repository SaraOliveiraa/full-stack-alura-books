import "./App.css";
import Logo from "./componentes/logo/index.jsx";
import perfilIcone from "./image/perfil.svg";
import sacolaIcone from "./image/sacola.svg";
import livroImg from "./image/livro.png";
import livro2Img from "./image/livro2.png";
import styled from "styled-components";

const livros = [
  {
    id: 1,
    nome: "React: Aprenda Praticando",
    autor: "Juliana Amoasei",
    categoria: "Front-end",
    preco: "R$ 49,90",
    precoAntigo: "R$ 69,90",
    tag: "novo",
    imagem: livroImg,
  },
  {
    id: 2,
    nome: "JavaScript: O Guia Definitivo",
    autor: "David Flanagan",
    categoria: "Programacao",
    preco: "R$ 59,90",
    precoAntigo: null,
    tag: null,
    imagem: livro2Img,
  },
  {
    id: 3,
    nome: "Python para Data Science",
    autor: "Guilherme Silveira",
    categoria: "Data Science",
    preco: "R$ 39,90",
    precoAntigo: "R$ 54,90",
    tag: "desconto",
    imagem: livroImg,
  },
  {
    id: 4,
    nome: "CSS: Tecnicas Modernas",
    autor: "Vanessa Me Tonini",
    categoria: "Front-end",
    preco: "R$ 44,90",
    precoAntigo: null,
    tag: "novo",
    imagem: livro2Img,
  },
];

const categorias = ["Todos", "Front-end", "Programacao", "Data Science", "Back-end", "UX & Design", "Mobile"];

function CardLivro({ livro }) {
  return (
    <article className="livro-card">
      <div className="livro-capa">
        {livro.tag && <span className={`livro-tag ${livro.tag}`}>{livro.tag === "novo" ? "Novo" : "-20%"}</span>}
        <img src={livro.imagem} alt={livro.nome} />
      </div>
      <div className="livro-info">
        <p className="livro-categoria">{livro.categoria}</p>
        <h3 className="livro-nome">{livro.nome}</h3>
        <p className="livro-autor">{livro.autor}</p>
        <div className="livro-preco-area">
          {livro.precoAntigo && <span className="livro-preco-antigo">{livro.precoAntigo}</span>}
          <span className="livro-preco">{livro.preco}</span>
        </div>
        <button className="livro-botao">Comprar</button>
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <div className="header-container">
          <Logo />

          <nav className="header-nav">
            <a href="#categorias">Categorias</a>
            <a href="#favoritos">Favoritos</a>
            <a href="#novidades">Novidades</a>
          </nav>

          <div className="header-acoes">
            <div className="busca-container">
              <svg className="busca-icone" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input type="text" className="busca-input" placeholder="Buscar livros..." />
            </div>
            <a href="#perfil">
              <img src={perfilIcone} alt="Perfil" className="header-icone" />
            </a>
            <a href="#sacola">
              <img src={sacolaIcone} alt="Sacola" className="header-icone" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-conteudo">
            <p className="hero-subtitulo">Novidade da semana</p>
            <h1 className="hero-titulo">Descubra o universo da programa&ccedil;&atilde;o com os melhores livros</h1>
            <p className="hero-descricao">Encontre uma curadoria especial de livros de tecnologia com os melhores precos e conteudos atualizados para impulsionar sua carreira.</p>
            <button className="hero-botao">
              Ver colecao completa
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
          <div className="hero-imagem">
            <img src={livroImg} alt="Livro em destaque" />
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="categorias" id="categorias">
        <div className="categorias-container">
          {categorias.map((cat, i) => (
            <button key={i} className={`categoria-btn ${i === 0 ? "ativa" : ""}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Livros em destaque */}
      <section className="secao-livros" id="novidades">
        <div className="secao-header">
          <h2 className="secao-titulo">Mais vendidos</h2>
          <a href="#" className="secao-ver-mais">
            Ver todos &rarr;
          </a>
        </div>
        <div className="livros-grid">
          {livros.map((livro) => (
            <CardLivro key={livro.id} livro={livro} />
          ))}
        </div>
      </section>

      {/* Destaque especial */}
      <section className="secao-destaque" id="favoritos">
        <div className="destaque-container">
          <div className="destaque-imagem">
            <img src={livro2Img} alt="Livro destaque" />
          </div>
          <div className="destaque-conteudo">
            <p className="destaque-label">Escolha do editor</p>
            <h2 className="destaque-titulo">JavaScript: O Guia Definitivo</h2>
            <p className="destaque-autor">por David Flanagan</p>
            <p className="destaque-descricao">
              A referencia completa e definitiva para todo programador que deseja dominar JavaScript do basico ao avancado. Atualizado com ES2024 e as melhores praticas do mercado.
            </p>
            <button className="destaque-botao">
              Conhecer o livro
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-container">
          <h2 className="newsletter-titulo">Fique por dentro das novidades</h2>
          <p className="newsletter-descricao">Receba recomendacoes de livros e ofertas exclusivas direto no seu e-mail.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" className="newsletter-input" placeholder="Seu melhor e-mail" />
            <button type="submit" className="newsletter-botao">
              Inscrever-se
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-coluna">
            <h4>Alura Books</h4>
            <a href="#">Sobre nos</a>
            <a href="#">Politica de privacidade</a>
            <a href="#">Termos de uso</a>
            <a href="#">Fale conosco</a>
          </div>
          <div className="footer-coluna">
            <h4>Categorias</h4>
            <a href="#">Front-end</a>
            <a href="#">Back-end</a>
            <a href="#">Data Science</a>
            <a href="#">Mobile</a>
          </div>
          <div className="footer-coluna">
            <h4>Para Autores</h4>
            <a href="#">Publique conosco</a>
            <a href="#">Diretrizes</a>
            <a href="#">Recursos</a>
          </div>
          <div className="footer-coluna">
            <h4>Ajuda</h4>
            <a href="#">Central de ajuda</a>
            <a href="#">Formas de pagamento</a>
            <a href="#">Como baixar e-books</a>
          </div>
        </div>
        <div className="footer-inferior">
          <p>2026 Alura Books. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
