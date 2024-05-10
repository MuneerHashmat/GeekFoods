import data from "../../Data/restaurants.json"
import RestaurantCard from "./RestaurantCard"
import Footer from "../Footer"
import { useState } from "react"


const RestaurantsPage=()=>{
    
    const [restaurantsList,setRestaurantsList]=useState(data);

    const filterByName=(e)=>{
        const nameInput=e.target.value;

        const filteredList= data.filter((item)=>{
            return item.name.toLowerCase().includes(nameInput.toLowerCase())
        })

        setRestaurantsList(filteredList);
    }

    const filterByRating=(e)=>{
        const ratingInput=e.target.value;

        const filteredList=data.filter((item)=>{
           return item.rating==ratingInput
        })

        setRestaurantsList(filteredList);

        if(ratingInput===""){
            setRestaurantsList(data);
        }
    }


    return (
        
        <>
            <div className="pt-32">
                <div className="mx-auto px-16 flex justify-between w-10/12 mb-4">
                    <input type="text" placeholder="Search restaurants..." onChange={filterByName} className="border-2 border-gray-500 p-1 rounded-md"/>
                    <input type="number" placeholder="Enter rating" onChange={filterByRating} className="border-2 border-gray-500 p-1 rounded-md w-28"/>
                </div>
                <div className="mx-auto flex flex-wrap gap-10 justify-center mb-10">
                    {
                        restaurantsList.map((restaurantItem)=>

                            <RestaurantCard 
                            key={restaurantItem._id.$oid} 
                            name={restaurantItem.name}
                            address={restaurantItem.address}
                            address2={restaurantItem.address_line_2}
                            outcode={restaurantItem.outcode}
                            postcode={restaurantItem.postcode}
                            type={restaurantItem.type_of_food}
                            url={restaurantItem.URL}
                            rating={restaurantItem.rating}
                            />
                        )
                    }
                </div>
            </div>

            <Footer />
        </>
    )
}


export default RestaurantsPage;