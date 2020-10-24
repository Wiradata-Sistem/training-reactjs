import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';

const SelamatPagi = (props) => {
  return (
    <h1>Selamat pagi {props.name}</h1>
  );
};

const ApaKabar = (props) => {
  const [kondisi, ubahKondisi] = useState("Sejahtera");
  /* const ubah = (event) => {
    ubahKondisi(event.target.value);
  }; */
  const ubah = useCallback(event => {
    ubahKondisi(event.target.value);
  }, []);

  return (
    <div>
      <SelamatPagi {...props} />
      <p>Bagaimana Kabarmu? Semoga dalam keadaan {kondisi}</p>
      <input onChange={ubah} />
    </div>
  );
};

ReactDOM.render(
  <ApaKabar name='Budi' />,
  document.getElementById('root')
);