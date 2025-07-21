import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Content Sections */}
      <section className="content-section">
        <div className="container">
          <h2>Section 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Section 2</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Section 3</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Section 4</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Section 5</h2>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </section>

      {/* Extra space for scrolling */}
      <section style={{ height: '100vh' }}></section>
    </>
  );
}
