import axios from "axios";
import { useEffect, useState } from "react"

const SideDetails = ({ detailID, setShowDetails }) => {

  const [details, setDetails] = useState(null);
  
  useEffect(() => {
    setDetails(null);
    const options = {
      method: 'GET',
      url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
      params: { flight: detailID },
      headers: {
        'X-RapidAPI-Key': '4987035418mshdebef18890f1b4ap14ca4ajsn0f715a51bec2',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
      }
    };

    axios
      .request(options)
      .then((res) => setDetails(res.data))


  }, [detailID]);


  return (
    <div className="detail">
      <div className="detail-inner">
        <p className="close-icon">
          <span onClick={() => setShowDetails(false)}>
            X
          </span>
        </p>
        {!details ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>{details?.aircraft?.model?.text}</h2>
            <p>{details?.aircraft?.model?.code}</p>
            <p>
              Kuyruk Kodu: {details?.aircraft?.registration}
            </p>
            <p>Şirket : {details?.airline?.short}</p>
            <img
              src={details?.aircraft?.images?.large[0]?.src}
            />
            <p>
              Kalkış: 
              <a href={details?.airport?.origin?.website}>
                {details?.airport?.origin?.name}
              </a>
            </p>
            <p>
              Varış: 
              <a
                href={
                  details?.airport?.destination?.website
                }
              >
                {details?.airport?.destination?.name}
              </a>
            </p>
            <p>Durum : {details?.status?.text}</p>
          </>
        )}
      </div>
    </div>
  );
};
  

export default SideDetails