import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SelamatPagi } from '../../components';
import StyledDiv from  './style.js';

const ApaKabar = () => {
  const [kondisi, ubahKondisi] = useState("Sejahtera");
  const { name } = useParams();
  useEffect(() => {
		document.title = `Apa kabar, semoga ${kondisi}`;
  }, [kondisi]);
  
  const ubah = useCallback(event => {
    ubahKondisi(event.target.value);
  }, []);

  return (
    <StyledDiv>
      <SelamatPagi name={name} />
      <p>Bagaimana Kabarmu? Semoga dalam keadaan {kondisi}</p>
      <input onChange={ubah} />
    </StyledDiv>
  );
};


export default ApaKabar;