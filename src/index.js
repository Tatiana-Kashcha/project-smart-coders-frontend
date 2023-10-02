import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import 'normalize.css';
import '../src/stylesheet/global.css';
import ThemeProvider from 'hooks/useTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/project-smart-coders-frontend">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { ThemeProvider } from 'styled-components';
// import { App } from 'components/App';
// import { GlobalStyle } from 'components/GlobalStyle';
// import { theme } from 'constants';
// import { store, persistor } from 'redux/store';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <BrowserRouter basename="/goit-react-hw-08-phonebook">
//           <ThemeProvider theme={theme}>
//             <GlobalStyle />
//             <App />
//           </ThemeProvider>
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );
