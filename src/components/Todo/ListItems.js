import React from "react";
import { Link } from "react-router-dom";
import { todoDelete, complatedUpdate} from "../../api";
function ListItems({ item ,refetch }) {
 
const deletes = async(id)=>{
  await todoDelete(id)
  refetch()
}
const complatedUpdates = async(id,complated)=>{
  await complatedUpdate(id,complated)
  refetch()
}

  return (
    <li className="flex items-center py-5 border-b-2">
      <svg
        className={item.complated ? 'cursor-pointer w-5 h-5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0  ': 'cursor-pointer  w-5 h-5 .5 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0'}
        aria-hidden="true"
 
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
        onClick={()=>complatedUpdates(item._id, !item.complated)}
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>

      <div className="flex flex-col">

        <strong>{item.name} </strong> <p>{item.description}</p>
      </div>
      <div className="flex ml-auto">
        <Link className="cursor-pointer bg-slate-500 text-white px-5 py-2 hover:bg-slate-800" state={item} to={"/update/" + item._id} >
           Güncelle
        </Link>
        <button className="cursor-pointer bg-red-500 text-white px-5 py-2 hover:bg-red-800 ml-1"  onClick={()=>deletes(item._id)} >
           Sil
        </button>
  
      </div>
    </li>
  );
}

export default ListItems;
