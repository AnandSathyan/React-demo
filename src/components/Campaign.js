import React from 'react';
import '../styles/Campaign.css'
const Campaign = () => {
  return (
    <div><div><h1>Explore Campaigns</h1></div>
    <div className='campaign-container' style={styles.campaignContainer}>
      <div style={styles.imageContainer}>
        <img 
          src="images/CR-00110-dashboard-image.gif" // Replace with actual image URL
          alt="Mercedes AMG" 
          style={styles.carImage}
        />
      </div>
      <div style={styles.detailsContainer}>
        <h2 style={styles.winText}>Win</h2>
        <h3 style={styles.prizeText}>The all-new Mercedes-AMG G63</h3>
        <p style={styles.prizePara}>Buy a Shopping Card and make it yours!</p>
        <h2 className='prizeBlue'>AED200.00</h2>
        <div style={styles.actionsContainer}>
          <button style={styles.prizeButton}>Prize Details</button>
          <button style={styles.cartButton}>Add to Cart</button>
          <button style={styles.prizeButton}>
        <p className='prizeDesc'>Draw Date: 31 December 2024 or <br/> earlier based on the time passed.</p>
        </button>
        </div>
      </div>
    </div>
    </div>
  );
};

const styles = {
  campaignContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '20px',
    margin: '20px 0',
    
  },
  imageContainer: {
    flex: 1
  },
  carImage: {
    width: '100%',
    borderRadius: '40px'
  },
  detailsContainer: {
    flex: 2,
    paddingLeft: '20px'
  },
  winText: {
    // color: '#ff0000',
    // fontSize: '2rem'
    color: '#f22',
    fontSize: '90px',
    lineHeight: '40px',
    fontStyle: 'italic',
    letterSpacing: '-4px',
    margin: 0,
    fontWeight: '900'
  },
  prizeText: {
    letterSpacing: '-1.45px',
    fontSize: '38px',
    lineHeight: '0px',
    // height: 'auto',
    fontWeight: '800'
  },
  prizePara: {
    fontSize: '28px',
    lineHeight: 'opx',
    height: 'auto',
    fontWeight: '400'
  },
  
  actionsContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px'
  },
  prizeButton: {
    backgroundColor: '#fff',
    padding: '6px 20px',
    borderRadius: '12px ',
    border: '2px solid #eee',
    cursor: 'pointer'
  },
  cartButton: {
    backgroundColor: '#6200ea',
    color: '#fff',
    padding: '6px 20px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer'
  }
};

export default Campaign;

