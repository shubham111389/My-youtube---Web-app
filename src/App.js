import Header  from './Components/Header'
import Body from './Components/Body';
import { BrowserRouter } from 'react-router-dom';
import store from './utils/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContaine";
import WatchVideo from "./Components/WatchVideo";
import Search_Keyword_page from './Components/Search_Keyword_page'
import Footer from './Components/Footer';



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
    element: <>
               <Header/>
                <Body />
                <Footer/>
              </>,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
      {
        path:"/search",
        element: <Search_Keyword_page/>
      }
    ],
  },
]);


function App() {
  return (
   
    <Provider store={store}>
  
    
 <div className='relative'>
 <RouterProvider router={appRouter} />
 </div>

 </Provider>

  );
}

export default App;
