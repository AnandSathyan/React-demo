import React from 'react';

const winnersData = [
  {
    name: 'Haya Saif',
    prize: 'AED10,000 Cash',
    time: '12:41 PM 28 June, 2024',
    ticket: 'CG-03456-107832151'
  },
  {
    name: 'Mohammed Razaul',
    prize: 'iPhone 15 Pro',
    time: '12:40 PM 28 June, 2024',
    ticket: 'EL-01462-107784404'
  },
  {
    name: 'Abdur Rahman',
    prize: 'AED5,000 Cash',
    time: '03:45 PM 31 May, 2024',
    ticket: 'CG-03455-107710091'
  },
  {
    name: 'Gangaprasad Rodda',
    prize: 'iPhone 15 Pro',
    time: '03:45 PM 31 May, 2024',
    ticket: 'EL-01461-107553273'
  }
];

const Winners = () => {
  return (
    <div style={styles.winnersContainer}>
      <h2 className=''>Winners</h2>
      <p>All our winners are announced in this section.</p>
      <div style={styles.winnersGrid}>
        {winnersData.map((winner, index) => (
          <div key={index} style={styles.winnerCard}>
            <img src="cash_image_url" alt="Prize" style={styles.prizeImage} />
            <h3>{winner.name}</h3>
            <p>on winning {winner.prize}</p>
            <p>Ticket no: {winner.ticket}</p>
            <p>Announced on: {winner.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  winnersContainer: {
    padding: '20px',
    backgroundColor: '#6c63ff',
    borderRadius: '10px',
    margin: '20px 0'
  },
  winnersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginTop: '20px'
  },
  winnerCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center'
  },
  prizeImage: {
    width: '100px',
    marginBottom: '10px'
  }
};

export default Winners;
