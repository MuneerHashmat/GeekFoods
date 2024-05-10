import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PropTypes from 'prop-types';


const RestaurantCard=(props)=>{
    return (
        <div className=" w-3/12 shadow-md rounded-lg flex flex-col">
           <div className='flex flex-col gap-1 p-4 h-40 mb-6'>
                <h1 className=" font-bold text-xl">{props.name} </h1>
                <h1>Rating: {props.rating}<StarIcon sx={{ color: "#ffd000",paddingBottom: "5px", fontSize:"27px"}}/></h1>

                <div className='mt-4'>
                    <p className="text-gray-600"><LocationOnIcon sx={{paddingBottom: "5px"}}/>{props.address}, {props.address2}</p>
                    <p className='text-gray-600'>{props.outcode} {props.postcode}</p>
                </div>
           </div>

            <div className='p-4 bg-gray-200'>
                <p className=' text-green-500'><RestaurantIcon sx={{fontSize: "18px"}}/> {props.type}</p>

                <p className=' text-blue-500'><a href={props.url} target='_blank'>Visit Menu</a></p>
            </div>
        </div>
    )
}

RestaurantCard.propTypes={
    name: PropTypes.string,
    address: PropTypes.string,
    address2: PropTypes.string,
    outcode: PropTypes.string,
    postcode: PropTypes.string,
    rating: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string
}

export default RestaurantCard;