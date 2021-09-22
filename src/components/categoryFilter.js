import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getFirestore } from "../firebaseInit"
import { Link } from "react-router-dom";

const CategoryFilter = () => {
    const {category} = useParams()
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        const db = getFirestore();
        const categoriesDb = db.collection("categories");
        categoriesDb.get().then(query=>{
            if(query.size === 0){
                console.error("Error loading Categories");
                return;
            }

            const categoriesQuery = query.docs.map(cat => {return {id:cat.id, ...cat.data()}})
            console.log(categoriesQuery);
            setCategories([...categoriesQuery])
        })
    },[])


    const renderDropdownItem = (item) =>{
        return (
        <li>
            <Link className="dropdown-item" to={"/category/"+item.key}>
                {item.name}
            </Link>
        </li>
        )
    }


    return (
        <div className="mx-5 mt-2">
            {(category) ? <h2>Filtering by: {categories.find(cat=>cat.key==category)?.name}</h2>:<h2>Filter by category</h2>}
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="categoriesDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Categories
                </button>
                <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                    <li>
                        <Link className="dropdown-item" to="">
                            Remove Filter
                        </Link>
                    </li>
                    {categories && categories.map(cat => renderDropdownItem(cat))};
                </ul>
            </div>
        </div>
    );
};

export default CategoryFilter;
