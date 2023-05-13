import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import axios from 'axios';
import Selection from './Selection';
import './styles/MapStyle.css';
import './styles/SelectionStyle.css';

const position = [ 13.50331,2.13067];

const MapCarpet = () => {
  const [uclip_data, setUclip_data] = useState([]);
  const [selectedQuartier, setSelectedQuartier] = useState(null);
  const [selectedLocalite, setSelectedLocalite] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/uclip/Uclip_data/')
      .then((response) => setUclip_data(response.data))
      .catch((error) => console.log(error));
  }, []);
  
  const handleSelectionChange = (quartier, localite) => {
    setSelectedQuartier(quartier);
    setSelectedLocalite(localite);
  };
 
  const filteredData = uclip_data.filter((data) => {
    if (selectedQuartier && selectedLocalite) {
      return data.Quartier === selectedQuartier && data.Localite === selectedLocalite;
    } else if (selectedQuartier) {
      return data.Quartier === selectedQuartier;
    } else {
      return true;
    }
  });

  return (
    <div className='map-container'>
      <Selection onChange={handleSelectionChange} className='selections' />
      <MapContainer
        id="map"
        center={position}
        zoom={12}
        scrollWheelZoom={true}
      >
       <LayersControl position="topright">
  <LayersControl.BaseLayer checked name="OpenStreetMap">
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  </LayersControl.BaseLayer>
  <LayersControl.BaseLayer name="Stamen Toner">
    <TileLayer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png" />
  </LayersControl.BaseLayer>
  <LayersControl.BaseLayer name="Mapbox Satellite">
    <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=YOUR_ACCESS_TOKEN" />
  </LayersControl.BaseLayer>
  <LayersControl.BaseLayer name="ESRI World Imagery">
    <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
  </LayersControl.BaseLayer>
</LayersControl>


        {filteredData.map(data => (
          <Marker key={data.id} position={[ data.Longitude, data.Latitude]}>
            <Popup >
              <h3>{data.Quartier}</h3>
              <p>{data.Localite}</p>
              {/* <iframe
        src={`http://localhost/Uclip/Kalley.html`}
        title='Localite HTML file'  style={{ width: '1000px', height:'500px', border: 'none' }}
         
        />
              {/* <iframe title="popup-c
            // ontent" src={data.Path} style={{ width:'600px', height: '400px' }} /> */} 
            </Popup>
          </Marker>
        ))}

{selectedLocalite && (
  <div className='localite-container'>
    {filteredData.map((data) => (
      <iframe
        key={data.id}
        src={`http://localhost/Uclip/${data.Html}`}
        title='Localite HTML file'
        style={{ width: '800px', height:'600px', border: 4 }}
      />
    ))}
  </div>
)}

      </MapContainer>
    </div>
  );
};

export default MapCarpet;
