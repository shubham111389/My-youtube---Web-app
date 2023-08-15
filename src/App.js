import Header  from './Components/Header'
import Body from './Components/Body';
import Footer from './Components/Footer';
import store from './utils/store';
import { Provider } from 'react-redux';



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


function App() {
  return (
    <Provider store={store}>
    <div className="text-lg " >
    
 <Header />

 <Body />
 <Footer />
  </div>
 </Provider>
  );
}

export default App;
