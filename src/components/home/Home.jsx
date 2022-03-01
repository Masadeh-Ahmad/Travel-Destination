import Header from '../header/Header';
import Footer from "../footer/Footer";
import Places from "../tours/Tours"
import data from '../../data/db.json'

function App(){
    return(
        <>
            <Header />
            <Places place={data} />
            <Footer />
        </>
        
    )
}

export default App;