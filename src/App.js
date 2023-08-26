import Header  from './Components/Header'
import Body from './Components/Body';

import store from './utils/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContaine";
import WatchVideo from "./Components/WatchVideo";



/* My  MYutbe structure will look like this, 
            1) Header
                - Logo
                - ]Search Bar
                - icon
            2) Body
                -Sidebar
                - Body
                   - list
                   - videocard
                        - video
                        - Name
                        -comments
            3) Footer
                - Links
                - Copyrights
       
*/
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
    ],
  },
]);


function App() {
  return (
    <Provider store={store}>
    <div className="text-lg  " >
    
 <Header />
 
 <RouterProvider router={appRouter} />
  </div>
 </Provider>
  );
}

export default App;
