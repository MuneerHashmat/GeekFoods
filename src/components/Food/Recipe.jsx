import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import Footer from "../Footer";

const Recipe = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState([]);

  const fetchRecipe = async () => {
    try {
      const response = await axios(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      console.log(response.data.meals[0]);
      setRecipeDetails(response.data.meals[0]);
    } catch (e) {
      console.log("An error occured: " + e);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <>
      <div className="pt-28 mb-10">
        {recipeDetails == null || recipeDetails.length == 0 ? (
          <div className="mx-auto w-40">
            <FadeLoader size={500} color="#006BFF" margin={20} />
          </div>
        ) : (
          <div className=" max-w-[800px] mx-auto overflow-hidden rounded-lg shadow-customShadow">
            <img
              src={recipeDetails.strMealThumb}
              alt={recipeDetails.strMeal}
              className="w-full object-cover h-[380px]"
            />

            <div className="mt-2 px-3 py-4">
              <h1 className="font-bold text-3xl mb-3">
                {recipeDetails.strMeal}
              </h1>

              <div className=" mb-3">
                <p className="font-bold text-yellow-600 text-xl">
                  {recipeDetails.strArea}
                </p>
                <p className="font-bold text-gray-500 text-lg">
                  {recipeDetails.strCategory}
                </p>
              </div>

              <div>
                <h1 className="text-2xl font-bold my-2">Ingredients:</h1>
                <div>
                  {Object.keys(recipeDetails)
                    .filter(
                      (key) =>
                        key.includes("strIngredient") && recipeDetails[key]
                    )
                    .map((key, index) => (
                      <p key={index} className=" text-lg">
                        &#9679; {recipeDetails[`strMeasure${index + 1}`]}{" "}
                        {recipeDetails[key]}
                      </p>
                    ))}
                </div>
              </div>

              <div className=" mt-3">
                <h1 className="text-2xl font-bold my-2">
                  Cooking Instructions:
                </h1>

                <p className="text-lg">{recipeDetails.strInstructions}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Recipe;
