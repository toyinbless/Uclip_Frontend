import { useState } from 'react';

const quartier = ['Madina', 'Lamorde', 'Talladje'];
const localite = {
  Madina: ['Ecole Madina', 'Grande mosquée', 'Kalley Amirou'],
  Lamorde: ['INJS_Jardin', 'Lamorde', 'Lamordé-Campus_1', 'Lamorde_Campus_2', 'Lamorde-Ecole primaire'],
  Talladje: ['Commissariat', 'Maternite', 'Talladje', 'Talladje-50metres']
};

const Selection = ({ onChange }) => {
  const [selected_quartier, setSelected_quartier] = useState(null);

  const handleQuartierChange = (e) => {
    setSelected_quartier(e.target.value);
    onChange(e.target.value, null);
  };

  const handleLocaliteChange = (e) => {
    onChange(selected_quartier, e.target.value);
  };

  return (
    <div className='selections'>
      <p className='quartier'>Quartier:</p>
      <select onChange={handleQuartierChange} className='element-selection'>
        {quartier.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>

      {selected_quartier && (
        <>
          <p className='localite'>Localité: </p>
          <select onChange={handleLocaliteChange} className='quartier-selection'>
            {localite[selected_quartier].map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
        </>
      )}
    </div>
  );
};

export default Selection;





// import './styles/SelectionStyle.css'
// // import Select from 'react-select';

// import { useState, useEffect } from 'react';
// import React from 'react'

// const quartier = [ 'Madina', 'Lamorde' , 'Talladje']
// const localite = {
//     'Madina': ['Ecole Madina', 'Grande mosquée', 'Kalley Amirou'],
//     'Lamorde': ['INJS_Jardin', 'Lamorde','Lamordé-Campus_1','Lamorde_Campus_2', 'Lamorde-Ecole primaire'],
//     'Talladje': ['Commissariat','Maternite','Talladje','Talladje-50metres']
// }


// const Selection = () => {
    
//     const [selected_quartier, setSelected_quartier] = useState(null)
//     console.log(selected_quartier)
//     return (
//       <div className='selections'>
//       <p>Quartier</p>
//         <select onChange={(e) => { setSelected_quartier(e.target.value) }} className='element-selection'>
//           {
            
//             quartier.map(item => {
//               return <option>{item}</option>
//             })
//           }
//         </select>
  
//         {selected_quartier && <select className='quartier-selection'>
//           {
//             localite[selected_quartier].map(item=> {
//               return <option>{item}</option>
//             })
//           }
//         </select>}
  
//       </div>
//     );
//   }
  
//   export default Selection