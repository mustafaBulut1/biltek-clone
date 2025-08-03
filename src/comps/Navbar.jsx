
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav style={{ padding: '20px', display: 'flex', gap: '20px' }}>
      <Link to="/">About Us</Link>
      <Link to="/collabs">İş Birliklerimiz</Link>
    </nav>
  );
}
