import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './ListKuliner.css';



const ListKuliner = () => {

  const [input, setInput] = useState('');

  const [data, setData] = useState([]);

  const [click, setClick] = useState('');



  const client = require('contentful').createClient({

    space: 'h8p5u4i8urpb',

    accessToken: 'uv5OoGVAGhvdwJkSVDPHjUqJkNru_3yqL3vRurx06qI'

  });



  useEffect(() => {

    client.getEntries({

      content_type: 'kuliner'

    }).then((response) => {

      setData(response.items);

    });

  }, []);



  const handleChange = event => {

    setInput(event.target.value);

  };



  const attractions = [

    { id: 1, name: "Bakso Kota Cak Man Malang", image: "/img/bakso-kota-cak-man-malang.jpg",  description: "Mojolangu, Lowokwaru, Kota Malang, Jawa Timur 65141", coordinates: "-7.979090, 112.633040"},

    { id: 2, name: "Pecel Kawi", image: "/img/Pecel-Kawi.jpg", description: "Jl. Kawi Kios No.43B, Bareng, Kec. Klojen, Kota Malang, Jawa Timur 65116", coordinates: "-7.970548, 112.636509"},

    { id: 3, name: "Soto Geprak Mbah Djo", image: "/img/Soto Geprak.jpg", description: "Jalan Letjen S. Parman, Malang, Jawa Timur 65116", coordinates: "-7.973994, 112.637023"},

  ];



  return (

    <div className="listkuliner">

      <img className="banner__img" src="/img/ab.jpg" alt="tes" />

      <div className="listkuliner__search">

        <input type="text" placeholder="Search..." onChange={handleChange} />

        <button type="submit"><i className="fa fa-search"></i></button>

      </div>

      

      <div className="listkuliner__item">

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

                //to={`/attractions/${val.id}`}

              >

                <div className="posts__card">

                  <img src={val.image} alt={val.name} />

                  <h3 className="card__name">{val.name}</h3>

                  <div className="card__description">

                    <i className="fa fa-map-marker"></i>

                    <span>

                      {val.description}

                      <a

                        href={`https://www.google.com/maps/place/Pecel+Kawi+1975/@-7.9756534,112.5789783,13z/data=!4m21!1m14!4m13!1m6!1m2!1s0x2dd629bf15906c2b:0x93ec4a20745d3a59!2sPecel+Kawi+1975,+Kawi+St+No.45,+Gading+Kasri,+Klojen,+Malang+City,+East+Java+65116!2m2!1d112.6201772!2d-7.9757421!1m5!1m1!1s0x2dd629bf15906c2b:0x93ec4a20745d3a59!2m2!1d112.6201772!2d-7.9757421!3m5!1s0x2dd629bf15906c2b:0x93ec4a20745d3a59!8m2!3d-7.9757404!4d112.6201784!16s%2Fg%2F11j4gtn1k0?entry=ttu${val.coordinates}`}

                        target="_blank"

                        rel="noopener noreferrer"

                      >

                        Open in Google Maps

                      </a>

                    </span>

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



export default ListKuliner;