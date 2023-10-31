import { string, object } from 'yup';

let todoSchema = object({
    name: string().required("name field required"),
    description: string().required("Description field required").min(10)

});
export default todoSchema