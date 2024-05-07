import PropTypes from 'prop-types';

const QuoteCard=(props)=>{
    return (
        <div className='w-10/12 mx-auto text-white bg-gray-800 pt-6 pb-8 px-7 mb-20 rounded-lg'>
            <h1 className='font-bold text-3xl mb-3'>{props.quote}</h1>
            <p className=' text-gray-300'>{props.author}</p>
        </div>
    )
}

QuoteCard.propTypes={
   quote: PropTypes.string,
   author: PropTypes.string
}

export default QuoteCard;