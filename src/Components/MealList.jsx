import React from "react";
import { useGlobalcontext } from "../hooks/context";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const MealList = () => {
    const { loading, foods } = useGlobalcontext();

   if (loading) {
        return <Loading />;
    }
    if (foods.length < 1) {
        return <h1> No food found</h1>;
    }
    return <div className="container d-block d-md-flex flex-wrap align-items-center justify-content-between">
             {foods.map((food) => {
            const { id, name, image, cat } = food
                 return <Link to={`/meal/${id}`} className="text-decoration-none my-3 mx-auto" key={id}>
                        <div
            style={{width: "280px"}}
            className="shadow-md card ">
            
                <img src={image} alt={name} />
                <h4 className="text-success fw-bold text-center mx-3"> {name} </h4>
                <h5 className="text-secondary text-center fw-light mx-3"> {cat} </h5>
            </div>
                 </Link>
              
        })
    };
    </div>
   
};

export default MealList;