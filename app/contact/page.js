import Link from 'next/link';

export default function ContactUs() {
  const styles = {
    main: { color: '#e2e8f0', fontFamily: 'sans-serif', maxWidth: '56rem', margin: '0 auto', padding: '3rem 1.5rem', minHeight: '100vh' },
    h1: { color: '#ffffff', fontSize: '1.875rem', fontWeight: '700', marginBottom: '0.75rem', borderBottom: '1px solid #334155', paddingBottom: '1rem' },
    p: { color: '#cbd5e1', lineHeight: '1.625', marginBottom: '1.5rem' },
    section: { display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' },
    card: { backgroundColor: 'rgba(30, 41, 59, 0.4)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #334155' },
    h2: { color: '#34d399', fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' },
    emailLink: { color: '#60a5fa', fontSize: '1.125rem', fontWeight: '600', textDecoration: 'underline' },
    footerLink: { color: '#34d399', textDecoration: 'none', display: 'inline-block', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #334155', width: '100%' }
  };

  return (
    <main style={styles.main}>
      <h1 style={styles.h1}>Contact Us</h1>
      <p style={styles.p}>
        Have questions, feedback, or feature suggestions for our Land Calculator tool? We would love to hear from you. 
        Please reach out to us using the contact details below, and we will get back to you as soon as possible.
      </p>
      
      <section style={styles.section}>
        <div style={styles.card}>
          <h2 style={styles.h2}>Email Support</h2>
          <p style={styles.p}>For general inquiries, calculation issues, or technical support, drop us an email at:</p>
          {/* ⚠️ CHANGE THIS to your real email address so users/Google can contact you */}
          <a href="mailto:your.real-oldreal.email@gmail.com" style={styles.emailLink}>
            your.real.email@gmail.com
          </a>
        </div>

        <div style={styles.card}>
          <h2 style={styles.h2}>Response Time</h2>
          <p style={{ ...styles.p, color: '#94a3b8', margin: 0 }}>
            We typically respond to all support emails within 24 to 48 business hours.
          </p>
        </div>
      </section>

      <div style={styles.footerLink}>
        <Link href="/" style={{ color: '#34d399', textDecoration: 'none' }}>
          &larr; Return to Land Calculator Tool
        </Link>
      </div>
    </main>
  );
}
