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
    { id: 1, title: 'CARD 1', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/200' },
    { id: 2, title: 'CARD 2', content: 'Bruce Wayne', imgUrl: 'https://unsplash.it/201/200' },
    { id: 3, title: 'CARD 3', content: 'Peter Parker', imgUrl: 'https://unsplash.it/200/201' },
    { id: 4, title: 'CARD 4', content: 'Tony Stark', imgUrl: 'https://unsplash.it/201/201' },
    { id: 5, title: 'CARD 5', content: 'Reed Richards', imgUrl: 'https://unsplash.it/202/200' },
    { id: 6, title: 'CARD 6', content: 'Wade Wilson', imgUrl: 'https://unsplash.it/200/199' },
    { id: 7, title: 'CARD 7', content: 'Peter Quill', imgUrl: 'https://unsplash.it/199/199' },
    { id: 8, title: 'CARD 8', content: 'Steven Rogers', imgUrl: 'https://unsplash.it/199/200' },
    { id: 9, title: 'CARD 9', content: 'Bruce Banner', imgUrl: 'https://unsplash.it/200/198' },
    { id: 10, title: 'CARD 10', content: 'Vincent Strange', imgUrl: 'https://unsplash.it/198/199' }
    // ... (other card data)
  ];

  return (
    <div style={ContainerStyles}>
      <div style={{ textAlign: 'center' }}>
        <h1>React Card Slider</h1>
      </div>
      <div style={CardsContainerStyles}>
        {cardsData.map((card) => (
          <div key={card.id} style={{ ...CardStyles }} className="card">
            <img src={card.imgUrl} alt={card.alt || 'Image'} style={{ ...ImgStyles }} />
            <div className="card-content" style={{ padding: '1rem' }}>
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
