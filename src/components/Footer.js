import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.quickLinks}>
        <h4>Quick Links</h4>
        <ul>
          <li>About Idealz</li>
          <li>My Account</li>
          <li>Active Tickets</li>
        </ul>
      </div>
      <div style={styles.customerService}>
        <h4>Customer Service</h4>
        <ul>
          <li>Contact Us</li>
          <li>FAQs</li>
          <li>How it Works</li>
        </ul>
      </div>
      <div style={styles.socialLinks}>
        <h4>Follow Us</h4>
        <div style={styles.icons}>
          {/* Add social icons here */}
          <span>Facebook Icon</span>
          <span>Instagram Icon</span>
          {/* etc */}
        </div>
        <div style={styles.appLinks}>
          <img src="appstore_url" alt="App Store" />
          <img src="googleplay_url" alt="Google Play" />
          <img src="huawei_url" alt="Huawei App Gallery" />
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderTop: '1px solid #ddd'
  },
  quickLinks: {},
  customerService: {},
  socialLinks: {},
  icons: {
    display: 'flex',
    gap: '10px'
  },
  appLinks: {
    marginTop: '10px'
  }
};

export default Footer;
