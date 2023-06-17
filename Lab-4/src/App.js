import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from "./helpers/PrivateRoute";
import AdminPage from "./pages/AdminPage";
import AdminRoute from "./helpers/AdminRoute";
import PKCE from './containers/PKCE';
import { CALLBACK_PATH } from './constants';
import Callback from './callback/Callback';

function App() {
 return (
   <div>
     <ReactKeycloakProvider authClient={keycloak}>
       <Nav />
       <BrowserRouter>
         <Routes>
          <Route exact path="/" element={<PKCE />} />
           {/* <Route exact path="/" element={<WelcomePage />} /> */}
           <Route path={CALLBACK_PATH} element={<Callback/>} />
           <Route
             path="/secured"
             element={
               <PrivateRoute>
                 <SecuredPage />
               </PrivateRoute>
             }
           />
           <Route
            exact path="/admin-page"
            element={
              <AdminRoute>
                <AdminPage/>
              </AdminRoute>
            }
           />
         </Routes>
       </BrowserRouter>
     </ReactKeycloakProvider>
   </div>
 );
}

export default App;