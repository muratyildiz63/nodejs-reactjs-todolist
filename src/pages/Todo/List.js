
import { useQuery } from "@tanstack/react-query";
import { todolist } from "../../api";
import ListItems from "../../components/Todo/ListItems";

function TodoList() {

  const { isPending, error, data,refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: todolist,
  });

  return (
    <>
      {!isPending && (
        <div>
          <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mx-auto">
        {
          data.data.map((items) => (
            <ListItems key={items._id} item={items} refetch={refetch}/>
          ))
        }
          </ul>
        
        </div>
      )}

      {error && (
        <div
          class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span class="font-medium">Hata !!</span> {error}
        </div>
      )}

      {isPending && !error && <div>Yükleniyor</div>}
     
    </>
  );
}

export default TodoList;
