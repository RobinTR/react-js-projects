import './Entry.css'
import marker from '../assets/marker.png'

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img src ={props.img.src} className="main-image" alt={props.img.alt} />
            </div>
            <div className="info-container">
                <img src={marker} alt="map marker icon" className='marker' />
                <span className='country'>{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h2 className='entry-title'>{props.title}</h2>
                <p className='trip-dates'>{props.dates}</p>
                <p className='entry-text'>{props.text}</p>
            </div>
        </article>
    )
}