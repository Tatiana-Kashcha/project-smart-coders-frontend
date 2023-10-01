// import { selectUser } from 'redux/auth/selectors';

import * as s from './UserInfo.styled';

const UserInfo = () => {
  //   const user = useSelector(selectUser);
  // const firstLeter = user.name.slice(0, 1);
  // const bigFirstLeter = firstLeter.toUpperCase();
  // console.log(bigFirstLeter);

  // const name = Nadiia;
  // const firstLeter = name.slice(0, 1);
  // const bigFirstLeter = firstLeter.toUpperCase();
  // console.log(bigFirstLeter);

  return (
    <>
      <s.Name>Nadiia</s.Name>
      {/* <s.Name>{user.name}</s.Name> */}

      <s.Elipse>N</s.Elipse>
    </>
  );
};

export default UserInfo;
