import { useLocation } from 'react-router-dom';
import Notes from './Notes';
import '../Home.css';

const Home = ({ showAlert }) => {
  const location = useLocation();
  const isCloudbook = location.pathname === '/cloudbook';

  return (
    <div className="container">
      {isCloudbook ? (
        <Notes showAlert={showAlert} />
      ) : (
        <main className="homepage">
          <section className="hero">
            <h1 className="hero-title">Welcome to <span className="highlight">Cloudbook</span></h1>
            <p className="hero-subtitle">Take notes anywhere, access them anytime.</p>
            {/* <Link to="/login" className="cta-button">Get Started</Link> */}
          </section>

          <section className="features">
            <div className="feature-card">
              <h3>📝 Smart Notes</h3>
              <p>Create, edit, and delete notes with an intuitive interface.</p>
            </div>
            <div className="feature-card">
              <h3>☁️ Cloud Sync</h3>
              <p>Your notes are synced across all devices automatically.</p>
            </div>
            <div className="feature-card">
              <h3>🔐 Privacy First</h3>
              <p>Your data is secure with token-based authentication.</p>
            </div>
          </section>

          <section className="footer">
            <p>Start organizing your life with Cloudbook.</p>
          </section>
        </main>
      )}
    </div>
  );
};

export default Home;
