import Link from 'next/link';

export default function PrivacyPolicy() {
  // Explicitly defined style rules to completely bypass global CSS overrides
  const styles = {
    main: { color: '#e2e8f0', fontFamily: 'sans-serif', maxWidth: '56rem', margin: '0 auto', padding: '3rem 1.5rem', minHeight: '100vh' },
    h1: { color: '#ffffff', fontSize: '1.875rem', fontWeight: '700', marginBottom: '0.75rem', borderBottom: '1px solid #334155', paddingBottom: '1rem' },
    date: { color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' },
    section: { display: 'flex', flexDirection: 'column', gap: '2rem' },
    h2: { color: '#34d399', fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' },
    p: { color: '#cbd5e1', lineHeight: '1.625' },
    card: { backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #334155' },
    cardH2: { color: '#60a5fa', fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' },
    link: { color: '#60a5fa', textDecoration: 'underline', fontWeight: '500' },
    footerLink: { color: '#34d399', textDecoration: 'none', display: 'inline-block', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #334155', width: '100%' }
  };

  return (
    <main style={styles.main}>
      <h1 style={styles.h1}>Privacy Policy</h1>
      <p style={styles.date}>Last updated: May 29, 2026</p>
      
      <section style={styles.section}>
        <div>
          <h2 style={styles.h2}>1. Information We Collect</h2>
          <p style={styles.p}>
            Our land calculation tool is designed with user privacy in mind. We do not require account registration, 
            nor do we collect or store any personal data or geographical parameters you input into our calculation modules. 
            All mathematical operations run entirely inside your local web browser client.
          </p>
        </div>

        <div>
          <h2 style={styles.h2}>2. Log Files and Cookies</h2>
          <p style={styles.p}>
            Like most standard website servers, we utilize system log files. This parameters package tracks internet protocol 
            (IP) address routing identifiers, browser client variants, Internet Service Providers (ISP), referring exit pages, 
            and platform timestamps. This data remains completely anonymous and is strictly utilized to evaluate web application traffic.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardH2}>3. Google DoubleClick DART Cookie</h2>
          <p style={styles.p}>
            Google is a third-party vendor on our site. It uses cookies, known as DART cookies, to serve targeted advertisements 
            to our visitors based upon their interaction patterns across this tool and other destinations on the internet. 
            You can choose to opt out of the compilation of DART tracking cookies by visiting the Google Ad Network Privacy 
            framework policy page at: 
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.link}
            >
              https://google.com
            </a>
          </p>
        </div>

        <div>
          <h2 style={styles.h2}>4. Third-Party Privacy Policies</h2>
          <p style={styles.p}>
            Our app's legal parameters do not govern external advertising distribution systems or alternative web networks. 
            We recommend evaluating the individual privacy provisions established by these respective third-party advertising 
            servers for comprehensive opt-out workflows.
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
