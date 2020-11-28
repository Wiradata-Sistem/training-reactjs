import { useSelector } from 'react-redux';
import StyledH1 from  './style.js';

const SelamatPagi = () => {
  const user = useSelector(state => state.UserReducer.User);
  console.log("iseee", user);
  return (
  <StyledH1>Selamat pagi {user.name}</StyledH1>
  );
};

export default SelamatPagi;