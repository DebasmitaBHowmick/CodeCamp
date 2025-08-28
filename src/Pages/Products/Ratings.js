
const Ratings = ({rating}) => {
let ratingArray = Array(5).fill(false);

for (let index = 0; index < rating; index++) {
    ratingArray[index] = true
};

  return (
    <div>
        {ratingArray.map((value, index) => 
        value ? (<i key= {index}className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>)

         : (<i key= {index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>))}    
    </div>
  )
}

export default Ratings
        
