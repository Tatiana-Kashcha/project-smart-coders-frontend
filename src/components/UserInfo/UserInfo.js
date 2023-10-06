import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import * as s from './UserInfo.styled';

const UserInfo = () => {
  const user = useSelector(selectUser);
  const firstLeter = user.name.slice(0, 1);
  const bigFirstLeter = firstLeter.toUpperCase();
  // console.log(bigFirstLeter);

  const userName = user.name;
  const avatar = user.avatarURL;

  return (
    <>
      {/* <s.Name>Nadiia</s.Name> */}
      <s.Name>{userName}</s.Name>

      {/* <s.Elipse>N</s.Elipse> */}

      {avatar === '' ? (
        <s.Elipse>{bigFirstLeter}</s.Elipse>
      ) : (
        <s.Elipse>{<s.Avatar src={avatar} alt="avatar" />}</s.Elipse>
      )}
    </>
  );
};

export default UserInfo;
