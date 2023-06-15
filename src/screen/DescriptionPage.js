import React from 'react';
import { useParams } from 'react-router-dom';
import './DescriptionPage.css'

const DescriptionPage = () => {
  const { id } = useParams();

  // Assuming you have the full list of accommodations
  const attractions = [
    { id: 1, name: "Hotel Golden Tulip Batu", image: "/img/penginapan.jpg", description: "Golden Tulip Holland Resort Batu memiliki fasilitas terbaik seperti: AC, Restoran, Kolam Renang, Resepsionis 24 Jam, Parkir, Lift, WiFi. (Beberapa fasilitas lain mungkin memerlukan biaya tambahan)", rating: 4.5 },
    { id: 2, name: "Ubud Hotel & Cottages", image: "/img/ubud.jpg", description: "Hotel sederhana yang berada di bangunan teduh ini terletak di pinggiran kota Malang dan menghadap ke sungai. Hotel ini berjarak 5 km dari Museum Malang Tempo Doeloe dan 15 km dari Eco Green Park yang menampilkan atraksi dari berbagai binatang Kamar nyaman dengan suasana tropis dilengkapi TV layar datar, meja, dan kamar mandi dalam dengan pancuran bergaya siraman hujan. Kamar di kelas yang lebih tinggi dan kamar suite memiliki area tempat duduk serta balkon pribadi dengan pemandangan taman.", rating: 3.8 },
    { id: 3, name: "The Singhasari Hotel Malang", image: "/img/singa.png", description: "Terletak 3,4 km dari Batu Secret Zoo, resor kelas atas berpemandangan gunung ini berjarak 4,2 km dari Museum Angkut, dan 15 km dari kota Malang. Kamar-kamar kontemporer dengan balkon dan pemandangan gunung ini memiliki Wi-Fi gratis, TV layar datar, serta pembuat teh dan kopi. Kamar di kelas yang lebih tinggi memiliki kamar mandi marmer; beberapa di antaranya memiliki tambahan ruang keluarga atau teras dengan akses langsung ke kolam renang. Room service tersedia. Hotel ini memiliki restoran keren, lounge, dan bar di atap. Terdapat kolam renang outdoor, spa, ruang kebugaran, dan sauna. Fasilitas lainnya termasuk taman bermain, zipline, golf mini, serta lapangan basket dan tenis. Ada juga ruang konvensi dan aula.",  rating: 4.2 },
  ];

  // Find the accommodation with the matching id
  const accommodation = attractions.find(attraction => attraction.id === parseInt(id));

  if (!accommodation) {
    return <div>Accommodation not found</div>;
  }

  return (
    <div className="description-page">
      <h2>{accommodation.name}</h2>
      <img src={accommodation.image} alt={accommodation.name} />
      <p>{accommodation.description}</p>
      <p>Rating: {accommodation.rating}</p>
      {/* Add any additional information or components here */}
    </div>
  );
};

export default DescriptionPage;
