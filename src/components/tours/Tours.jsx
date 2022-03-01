const Places = (props) =>{
    return(
        <>
        {
            
            props.place.map(place => {
                return(
                    <div>
                        <h3>{place.name}</h3>
                        <img src={place.image} alt="" />
                    </div>
                )
                
            })
        }
        </>
        
        
    )
};

export default Places;