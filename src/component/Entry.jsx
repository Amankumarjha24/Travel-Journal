
import location from '../assets/location-pin.png'
function Entry({image, countryName,link,date,heading,p }) {
    return (
        <div className="mainBox">
        <div className="card">
        <img src={image} alt={countryName} />
        <div className='countryName'>
            <li><img src={location} alt="" />{countryName} <a href={link}>Wisit on google map</a></li>
            <h2>{heading}</h2>
            <div className='pera'>
                <p className='date'>{date}</p>
            <p>{p}</p>
            </div>
        </div>
        </div>
        </div> 
        
    )
}

export default Entry