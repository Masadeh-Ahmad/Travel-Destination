import Tour from "./Tour/Tour";
const Places = ({place}) =>{
    return(
        <> 
        {place.map( (tour) =>(
      <Tour tour={tour} />))}
      
    </>
   );    
}

export default Places;