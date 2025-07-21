import Navbar from './components/Navbar';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <section style={{ padding: '2rem 4%' }}>
          <h1>Sample Page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius
            ligula sed odio mattis, a efficitur lorem viverra. Curabitur sed quam
            sed mauris volutpat tincidunt. Donec non odio eget sapien tincidunt
            tincidunt. Maecenas commodo justo vel ipsum ultricies, ac luctus ipsum
            hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Etiam sed lorem non massa suscipit
            bibendum. Integer bibendum ullamcorper dolor, at convallis massa
            viverra in. Sed et nisl interdum, faucibus augue sit amet, sollicitudin
            eros. Vestibulum vitae felis ac nulla placerat gravida.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vivamus in mi nec lacus lacinia ultricies.
            Suspendisse potenti. Integer fermentum turpis id metus tristique
            pharetra. Morbi euismod aliquet felis, eu porta lacus varius non.
            Pellentesque at libero odio. Vestibulum id commodo dui, id efficitur
            elit. Integer porta tincidunt diam non fermentum.
          </p>
          <p>
            Cras non tortor sed metus suscipit elementum. Sed consectetur ex
            sapien, in pharetra tortor condimentum quis. Proin lacinia mauris non
            nulla pharetra volutpat. Nullam malesuada nec urna sed bibendum. Duis
            volutpat nisl a metus congue, nec tempor lorem tincidunt. Mauris ac
            hendrerit nisl. Cras a est at dui pharetra dignissim. Integer vel
            lectus imperdiet, euismod neque in, commodo elit.
          </p>
        </section>
        <section style={{ height: '120vh' }}>
          {/* Extra space for scrolling */}
        </section>
      </main>
    </>
  );
}
