import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SideDetails from './SideDetails';

const ListView = () => {
  const state = useSelector((store) => store.reducer);
  const [detailId, setDetailId] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  // detay butonuna tıklanınca çalışır
  const handleClick = (id) => {
    setDetailId(id);
    setShowDetail(true);
  };

  return (
    <div className="p-4">
      <h2>{state.flights.length} Uçak Bulundu</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {/* dizideki herbir obje için tablo satırı oluşturma */}
          {state.flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button
                  onClick={() => handleClick(flight.id)}
                >
                  Detay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* ekrana detay penceresi açma */}
      {showDetail && (
        <SideDetails
          detailID={detailId}
          setShowDetails={setShowDetail}
        />
      )}
    </div>
  );
};

export default ListView;
