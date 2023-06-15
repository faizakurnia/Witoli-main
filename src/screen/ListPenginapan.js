import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './ListPenginapan.css';

const ListPenginapan = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [click, setClick] = useState('');

  const client = require('contentful').createClient({
    space: 'h8p5u4i8urpb',
    accessToken: 'uv5OoGVAGhvdwJkSVDPHjUqJkNru_3yqL3vRurx06qI'
  });

  useEffect(() => {
    client.getEntries({
      content_type: 'penginapan'
    }).then((response) => {
      setData(response.items);
    });
  }, []);

  const handleChange = event => {
    setInput(event.target.value);
  };

  const attractions = [
    { id: 1, name: "Hotel Golden Tulip Batu", image: "/img/penginapan.jpg",  description: "Golden Tulip Holland Resort Batu memiliki fasilitas terbaik seperti..", rating: 4.5 },
    { id: 2, name: "Ubud Hotel & Cottages", image: "/img/ubud.jpg", description: "Hotel sederhana yang berada di bangunan teduh ini terletak di pinggiran kota Malang", rating: 3.8 },
    { id: 3, name: "The Singhasari Resort", image: "/img/singa.png", description: "Terletak 3,4 km dari Batu Secret Zoo, Letak yang sangat stategis dan banyak fasilitas lainnya.",  rating: 4.2 },
  ];

  const history = useHistory();

  const handleReadMore = (id) => {
    history.push(`/description/${id}`);
  };

  return (
    <div className="listpenginapan">
      <img className="banner__img" src="/img/penginapan.jpg" alt="tes" />
      <div className="listpenginapan__search">
        <input type="text" placeholder="Search..." onChange={handleChange} />
        <button type="submit"><i className="fa fa-search"></i></button>
      </div>
      
      <div className="listpenginapan__item">
        <div className="posts__container">
          <div className="posts">
            {attractions.filter((val) => {
              if (input === "") {
                return val;
              } else if (val.name.toLowerCase().includes(input.toLowerCase())) {
                return val;
              }
              return null;
            }).map((val) => (
              <div
                className="posts__post"
                key={val.id}
              >
                <div className="posts__card">
                  <img src={val.image} alt={val.name} />
                  <h3 className="card__name">{val.name}</h3>
                  <div className="card__description">
                    <span>
                      {val.description}
                      <button
                        onClick={() => handleReadMore(val.id)}
                      >
                        Read More
                      </button>
                    </span>
                  </div>
                  <div className="card__rating">
                    Rating: {val.rating} <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPenginapan;
