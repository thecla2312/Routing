import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "./useFetch";

const AppContext = createContext();
export const useGlobalcontext = () => useContext(AppContext)
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState("rice");
    const [ foods, setFoods ] = useState([]);
    const { data, isLoading } = useFetch(`${url}${searchValue}`);
    const { meals } = data;
    
    useEffect(() => {
        if (meals) {
            setFoods(meals);
        } else {
            setFoods([]);
        }
    }, [searchValue]);


    return (<AppContext.Provider value={{ isLoading, searchValue, setSearchValue, foods }}>
        {children}
    </AppContext.Provider>
    );
};

export default AppProvider;