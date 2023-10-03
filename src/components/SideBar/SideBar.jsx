// import { createPortal } from 'react-dom'; //!
import { useState, useEffect } from 'react';

import UserNav from 'components/UserNav/UserNav';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

import { globalTheme } from 'theme';
import * as s from './SideBar.styled';

// const sideBarRoot = document.querySelector('#sideBar-root'); //!

const SideBar = () => {
  const mediaQuery = window.matchMedia(
    `(max-width: calc(${globalTheme.breakpoints.desktop} - 0.5px))`
  );

  const [isSmallScreen, setIsSmallScreen] = useState(mediaQuery.matches);
  const [showSideBar, setShowSideBar] = useState(true);

  useEffect(() => {
    const handleResize = evt => {
      setIsSmallScreen(evt.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [mediaQuery]);

  const toggleSideBar = () => {
    setShowSideBar(prevState => !prevState);
  };

  // const handleOverlayClick = evt => {
  //   if (evt.currentTarget === evt.target) {
  //     toggleSideBar();
  //   }
  // }; //!

  return (
    <>
      {showSideBar && (
        <s.SideBar>
          <s.LogoWrap>
            <s.IconWrap>
              <s.IconLogo />
            </s.IconWrap>
            {isSmallScreen && (
              <s.CloseBtn
                type="button"
                aria-label="Close"
                onClick={toggleSideBar}
              >
                <s.IconWrap>
                  <s.IconClose />
                </s.IconWrap>
              </s.CloseBtn>
            )}
          </s.LogoWrap>
          <s.SideBarLabel>User Panel</s.SideBarLabel>
          <UserNav />
          <LogoutBtn />
        </s.SideBar>
      )}
    </>
  );
};

export default SideBar;

// return createPortal(
//   <>
//     {showSideBar && (
//       <div onClick={handleOverlayClick}>
//         <s.SideBar>
//           <s.LogoWrap>
//             <s.IconWrap>
//               <s.IconLogo />
//             </s.IconWrap>
//             {isSmallScreen && (
//               <s.CloseBtn
//                 type="button"
//                 aria-label="Close"
//                 onClick={toggleSideBar}
//               >
//                 <s.IconWrap>
//                   <s.IconClose />
//                 </s.IconWrap>
//               </s.CloseBtn>
//             )}
//           </s.LogoWrap>
//           <s.SideBarLabel>User Panel</s.SideBarLabel>
//           <UserNav />
//           <LogoutBtn />
//         </s.SideBar>
//       </div>
//     )}
//   </>,
//   sideBarRoot
// ); //!
