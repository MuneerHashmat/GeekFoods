import Navbar from "../Navbar";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { FadeLoader } from "react-spinners";

const Food = () => {
  const [currentDishes, setCurrentDishes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputCountry, setInputCountry] = useState("");

  const fetchInitialDishes = async () => {
    try {
      const response = await axios(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      setCurrentDishes(response.data.meals);
    } catch (e) {
      console.log("An error occured: " + e);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await axios(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      console.log(response.data.meals);
      setCountries(response.data.meals);
    } catch (e) {
      console.log("An error occured: " + e);
    }
  };

  useEffect(() => {
    fetchInitialDishes();
    fetchCountries();
  }, []);

  const searchDish = async () => {
    const searchStr = searchQuery.trim().toLowerCase();
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    if (searchStr.length > 0) {
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchStr}`;
    }
    try {
      const response = await axios(url);
      console.log(response.data.meals);
      setCurrentDishes(response.data.meals);
    } catch (e) {
      console.log("An error occured: " + e);
    }
  };

  useEffect(() => {
    searchDish();
  }, [searchQuery]);

  const searchByCountry = async () => {
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    console.log(inputCountry);
    if (inputCountry.length > 0) {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${inputCountry}`;
    }
    try {
      const response = await axios(url);
      console.log(response);
      setCurrentDishes(response.data.meals ? response.data.meals : []);
    } catch (e) {
      console.log("An error occured: " + e);
    }
  };

  useEffect(() => {
    setCurrentDishes([]);
    setTimeout(() => {
      searchByCountry();
    }, 2000);
  }, [inputCountry]);

  return (
    <>
      <Navbar />
      <div className=" pt-28">
        <div className="w-[600px] mx-auto mb-3">
          <h1 className="text-2xl text-center font-bold">
            Search for your desired recipe
          </h1>

          <div className="flex justify-between items-center mt-3">
            <input
              type="text"
              placeholder="search for a dish"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              className="p-2 text-xl outline-none border-2 border-gray-400 rounded-md"
            />
            <select
              value={inputCountry}
              onChange={(e) => setInputCountry(e.target.value)}
              className="p-2 text-xl outline-none border-2 border-gray-400 rounded-md "
            >
              <option value="">All Countries</option>
              {countries.map((country, index) => (
                <option key={index} value={country.strArea}>
                  {country.strArea}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-10/12 flex flex-wrap gap-5 mx-auto mb-6">
          {currentDishes == null || currentDishes.length == 0 ? (
            <div className="mx-auto w-40">
              <FadeLoader size={500} color="#006BFF" margin={20} />
            </div>
          ) : (
            currentDishes.map((dish) => (
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
                    click for Recipe
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Food;
