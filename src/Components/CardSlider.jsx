import React from 'react';

const CardStyles = {
  flex: '1 0 250px',
  boxShadow: '0 1px 1rem -4px #000',
  background: '#fff',
  margin: '1rem',
  overflow: 'hidden',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'all 250ms ease-in-out'
};

const ImgStyles = {
  width: '250px',
  height: '250px',
  objectFit: 'center'
};

const ContainerStyles = {
  width: '90%',
  margin: 'auto'
};

const CardsContainerStyles = {
  display: 'flex',
  borderRadius: '6px',
  color: '#333',
  background: '#eee',
  padding: '1rem',
  boxShadow: '0 0 1rem #000 inset',
  overflowX: 'auto',
  position: 'relative'
};

const CardSlider = () => {
  const cardsData = [
    { id: 1, title: 'MBBS', content: 'Dr.Kalpana Agarwal', imgUrl: 'https://www.kauveryhospital.com/doctorimage/recent/Dr.-N.-Suchitra2023-01-17-12:08:24pm.jpg' },
    { id: 2, title: 'MBBS MD', content: 'Dr.Retish Rajan', imgUrl: 'https://www.woodlandshospital.in/images/doctor-img/Soutik-Panda-New1.jpg' },
    { id: 3, title: 'BDS', content: 'Dr.Preeti Mukharji', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sYmkJVDIarQxX09COpFNaBsaso8X2kYJzw&usqp=CAU' },
    { id: 4, title: 'MBBS', content: 'Dr.Shreya Lalwani', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrjNjsKuFM4qf8-BXHFOxygZpBxP5nm7nwnq33Spap48ObUxUMauNnBD8g__dNFUfLV4&usqp=CAU' },
    { id: 5, title: 'BAMS', content: 'Dr.Prerna', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYe-w-d6N7GnfHWnEpR7xMbAKCdCVkJiBLgrA_o0g1ta23fwRGW1nWjK232w9dxQBV0n8&usqp=CAU' },
    { id: 6, title: 'BHMS', content: 'Dr.Wade Wilson', imgUrl: 'https://www.woodlandshospital.in/images/doctor-img/ravi-kant-saraogi.jpg' },
    { id: 7, title: 'BDS', content: 'Dr.Peter Quill', imgUrl: 'https://images.unsplash.com/photo-1612349316228-5942a9b489c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' },
    { id: 8, title: 'MBBS', content: 'Dr.Steven Rogers', imgUrl: 'https://guthospital.in/assets/images/team/Dr-Arpit-Bhargava.jpg' },
    { id: 9, title: 'Gynocologist', content: 'Dr.Neha Kulkarni', imgUrl: 'https://kangaroocareindia.com/static/media/dr-thrupthi-new.0faf7b7fc188451aa9ce.JPG' },
    { id: 10, title: 'MD', content: 'Dr.Sonam Sukla', imgUrl: 'https://www.kauveryhospital.com/doctorimage/recent/Dr.-N.-Suchitra2023-01-17-12:08:24pm.jpg' }
    // ... (other card data)
  ];

  return (
    <div style={ContainerStyles}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{color:'#83C4FF'}}>------ Doctors for deal with critical situations ------</h1>
      </div>
      <div style={CardsContainerStyles}>
        {cardsData.map((card) => (
          <div key={card.id} style={{ ...CardStyles }} className="card">
            <img src={card.imgUrl} alt={card.alt || 'Image'} style={{ ...ImgStyles }} />
            <div className="card-content" style={{ padding: '1rem' }}>
              <h2 style={{color:'black'}}>{card.title}</h2>
              <p style={{color:'black'}} >{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
