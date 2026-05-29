import Link from 'next/link';

export default function Footer() {
  const styles = {
    footer: { 
      borderTop: '1px solid #1e293b', 
      backgroundColor: 'transparent', 
      padding: '2rem 1rem', 
      marginTop: 'auto', 
      textAlign: 'center', 
      width: '100%',
      boxSizing: 'border-box'
    },
    container: { 
      maxWidth: '56rem', 
      margin: '0 auto', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1rem', 
      alignItems: 'center', 
      justifyContent: 'space-between' 
    },
    links: { 
      display: 'flex', 
      gap: '1.5rem', 
      flexWrap: 'wrap', 
      justifyContent: 'center' 
    },
    link: { 
      color: '#94a3b8', 
      textDecoration: 'none', 
      fontSize: '0.875rem'
    },
    copy: { 
      color: '#64748b', 
      fontSize: '0.875rem', 
      margin: 0 
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.links}>
          <Link href="/privacy" style={styles.link}>Privacy Policy</Link>
          <Link href="/terms" style={styles.link}>Terms of Service</Link>
          <Link href="/contact" style={styles.link}>Contact Us</Link>
        </div>
        <p style={styles.copy}>
          &copy; {new Date().getFullYear()} Land Calculator. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
