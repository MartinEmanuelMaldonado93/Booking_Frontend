import { Hotel } from "@types";
import { Link } from "react-router-dom";
type props = {
  hotelItem: Hotel | undefined;
};
function SearchItem({ hotelItem }: props) {
  if (!hotelItem) return <></>;

  return (
    <div className='searchItem'>
      <img
        src={hotelItem.photos ? hotelItem.photos.join(" ") : ""}
        alt=''
        className='siImg'
      />
      <div className='siDesc'>
        <h1 className='siTitle'>{hotelItem.name}</h1>
        <span className='siDistance'>{hotelItem.distance}m from center</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className='siSubtitle'>
          Studio Apartment with Air conditioning
        </span>
        <span className='siFeatures'>{hotelItem.desc}</span>
        <span className='siCancelOp'>Free cancellation </span>
        <span className='siCancelOpSubtitle'>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='siDetails'>
        {hotelItem.rating && (
          <div className='siRating'>
            <span>Excellent</span>
            <button>{hotelItem.rating}</button>
          </div>
        )}
        <div className='siDetailTexts'>
          <span className='siPrice'>${hotelItem.cheapestPrice}</span>
          <span className='siTaxOp'>Includes taxes and fees</span>
          <Link to={`/hotels/${hotelItem._id}`}>
            <button className='siCheckButton'>See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { SearchItem };
