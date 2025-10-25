export default function Banner() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #ff4655 0%, #fd4556 100%)',
      color: 'white',
      padding: '12px 16px',
      textAlign: 'center',
      fontWeight: 500,
    }}>
      🎉 New version available! Check out our new documentation at{' '}
      <a 
        href="https://vlr.orlandomm.net/docs" 
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white', textDecoration: 'underline' }}
      >
        vlr.orlandomm.net/docs
      </a>
    </div>
  );
}
