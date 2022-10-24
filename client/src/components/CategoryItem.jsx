import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SubCategoryItem } from "./SubCategoryItem";

export function CategoryItem({ category }) {
    const [subCategoriesList, setSubCategoriesList] = useState(false)

    return (
        <li>
            <Link to={category._id}>
                <button
                    className="w-[190px] px-1 py-1 border bg-gray-300 text-gray-600 font-bold hover:bg-gray-200 hover:text-black duration-100"
                    onClick={() => setSubCategoriesList(prev => !prev)}
                >
                    {category.title}
                </button>
            </Link>
            <div>
                {subCategoriesList && category.subCategories?.map(sub => <SubCategoryItem key={sub._id} subCategory={sub} />)}
            </div>
        </li>
    )
}

// =======================================================================================================================================================

// import React, { useCallback, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import { getSubCategories } from "../redux/features/subCategory/subCategorySlice";
// import { SubCategoryItem } from "./SubCategoryItem";

// export function CategoryItem({ category }) {
//     const [subCategoriesList, setSubCategoriesList] = useState(false)
//     const dispatch = useDispatch()
//     const params = useParams()
//     console.log(category._id)
//     const { subCategories } = useSelector(state => state.subCategory)
//     console.log(subCategories)
//     // const fetchsubCategories = useCallback(async () => {
//     //     try {
//     //         dispatch(getSubCategories(category._id))
//     //     } catch (error) {
//     //         console.log(error)
//     //     }
//     // }, [dispatch, params.id])

//     // useEffect(() => {
//     //     fetchsubCategories()
//     // }, [fetchsubCategories])

//     return (
//         <li>
//             <Link to={category._id}>
//                 <button
//                     className="w-[190px] px-1 py-1 border bg-gray-300 text-gray-600 font-bold hover:bg-gray-200 hover:text-black duration-100"
//                     onClick={() => setSubCategoriesList(prev => !prev)}
//                 >
//                     {category.title}
//                 </button>
//             </Link>
//             <div>
//                 {subCategoriesList && subCategories?.map(sub => <SubCategoryItem key={sub._id} subCategory={sub} />)}
//             </div>
//         </li>
//     )
// }
