import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button className="arrow-btn" onClick={() => navigate(-1)} style={{ margin: '1.5rem' }}>
      ‹
    </button>
  );
}