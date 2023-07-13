import { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext();
export const useGlobalcontext = () => useContext(AppContext);
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState("");
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        setLoading(true)
        const res = await fetch(`${url}${searchValue}`);
        const data = await res.json();
        const { meals } = data;
        if (meals) {
    // get hold of the data
            const newFoods = meals.map((item) => {
                return {
                    id: item.idMeal,
                    name: item.strMeal,
                    image: item.strMealThumb,
                    area: item.strArea,
                    cat: item.strCategory,
                };
            });
            
            setFoods(newFoods);
        } else {
            setFoods([]);
        }
        setLoading(false);
     };
    useEffect(() => {
        fetchData()
    }, [searchValue]);
    return (<AppContext.Provider value={{ loading, searchValue, setSearchValue, foods }}>
        {children}
    </AppContext.Provider>
    );
};

export default AppProvider;