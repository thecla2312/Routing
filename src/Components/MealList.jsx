import React from "react";
import { useGlobalcontext } from "../hooks/context";
import Loading from "./Loading";

const MealList = () => {
    const { isLoading, foods } = useGlobalcontext();


    if (isLoading) {
        return <Loading />;
    }
    if (foods.length < 1) {
        return <h1> No food found</h1>;
    }
    return <div>MealList</div>;
    
};

export default MealList;