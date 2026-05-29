export default function AppContent() {
  const styles = {
    section: { 
      maxWidth: '64rem', 
      margin: '4rem auto 2rem auto', 
      padding: '0 1.5rem', 
      fontFamily: 'sans-serif',
      color: '#cbd5e1'
    },
    mainTitle: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '1.5rem',
      borderLeft: '4px solid #3b82f6',
      paddingLeft: '0.75rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem'
    },
    card: {
      backgroundColor: 'rgba(30, 41, 59, 0.3)',
      border: '1px solid #1e293b',
      padding: '1.5rem',
      borderRadius: '0.75rem'
    },
    subTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#60a5fa',
      marginBottom: '0.75rem'
    },
    p: {
      fontSize: '0.95rem',
      lineHeight: '1.6',
      color: '#94a3b8',
      margin: '0 0 1rem 0'
    },
    list: {
      paddingLeft: '1.25rem',
      margin: '0',
      color: '#94a3b8',
      fontSize: '0.95rem',
      lineHeight: '1.6'
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.mainTitle}>Understanding Land Measurement Conversions</h2>
      <p style={{ ...styles.p, fontSize: '1.05rem', color: '#cbd5e1', marginBottom: '2.5rem' }}>
        Land calculation values vary extensively by region, culture, and formal registry frameworks. 
        Whether you are analyzing plot coordinates for urban real estate transactions or validating regional farming acreages, 
        our live engine configurator standardizes these dimensional boundaries instantly.
      </p>

      <div style={styles.grid}>
        {/* Card 1: Metric Definitions */}
        <div style={styles.card}>
          <h3 style={styles.subTitle}>Standard vs Regional Units</h3>
          <p style={styles.p}>
            While international industries rely heavily on globally standardized units, regional administrative departments continue to track real estate allocations using local vernacular metrics. 
          </p>
          <ul style={styles.list}>
            <li><strong>Square Feet (Sq Ft):</strong> The universal measurement foundational standard used globally in modern real estate deeds.</li>
            <li><strong>Gaj (Square Yard):</strong> A traditional metric deeply integrated across regional property listings, where 1 Gaj accurately equals 9 square feet.</li>
            <li><strong>Hectare:</strong> A metric system block totaling 10,000 square meters, commonly utilized in government land surveying records.</li>
          </ul>
        </div>

        {/* Card 2: Traditional Metrics */}
        <div style={styles.card}>
          <h3 style={styles.subTitle}>Traditional Agricultural Measurements</h3>
          <p style={styles.p}>
            Agricultural regions calculate fields using metrics like Bigha, Kanal, and Acre. These units differ significantly based on provincial state boundaries.
          </p>
          <ul style={styles.list}>
            <li><strong>Acre:</strong> Standardized globally at 43,560 square feet, predominantly representing agricultural estates.</li>
            <li><strong>Bigha:</strong> A traditional metric that varies dynamically; its measurement parameters scale differently between regions like Uttar Pradesh, Punjab, or Bengal.</li>
            <li><strong>Kanal:</strong> A traditional sizing framework used across Northern regions, where 8 Kanals typically represent a full Acre block.</li>
          </ul>
        </div>
      </div>

      {/* Mathematical Calculations Area */}
      <div style={{ ...styles.card, marginBottom: '2rem' }}>
        <h3 style={styles.subTitle}>The Mathematics Behind Land Conversions</h3>
        <p style={styles.p}>
          Our engine manages conversion parameters programmatically by mapping input values back to a universal base factor (Square Feet) before displaying your final target metrics. 
          The structural scaling ratios utilize these exact mathematical equations:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem', color: '#cbd5e1' }}>
          <div><strong>Gaj to Sq Ft:</strong> multiply value by 9</div>
          <div><strong>Acre to Sq Ft:</strong> multiply value by 43,560</div>
          <div><strong>Hectare to Sq Ft:</strong> multiply value by 107,639</div>
          <div><strong>Kanal to Sq Ft:</strong> multiply value by 5,445</div>
        </div>
      </div>
    </section>
  );
}
