import Navbar from "../Navbar";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const Food = () => {
  const [currentDishes, setCurrentDishes] = useState([]);

  const fetchInitialDishes = async () => {
    try {
      const response = await axios(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      console.log(response.data.meals);
      setCurrentDishes(response.data.meals);
    } catch (e) {
      console.log("An error occured: " + e);
    }
  };

  useEffect(() => {
    fetchInitialDishes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-32">
        <div></div>

        <div className="w-10/12 flex flex-wrap gap-5 mx-auto mb-6">
          {currentDishes.map((dish) => (
            <div
              key={dish.idMeal}
              className=" w-[400px] rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={dish.strMealThumb}
                className="w-full h-[200px] object-cover"
              />

              <div className="px-4 py-4 flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-bold">{dish.strMeal}</p>
                  <p className="text-yellow-600">{dish.strArea}</p>
                  <p className="text-sm text-gray-600 font-semibold">
                    Category: {dish.strCategory}
                  </p>
                </div>

                <button className="font-bold p-2 rounded-md bg-blue-500 text-white hover:scale-110 transition-all">
                  Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Food;
