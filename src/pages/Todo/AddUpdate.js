import React from "react";
import validations from "./validations";
import { useFormik } from "formik";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { tudoAdd, tudoUpdate } from "../../api";

function AddUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    handleSubmit, // farm gönderildiğinde gideceği alanı belirler
    handleBlur, // touched kulanmak için  handleBlur kullanmalıyız
    handleChange, // input içindeki değişken değiştiği anda değişkene değer gelir
    errors, // gelen hataları errors ile yakalıyoruz
    touched, // input alanından ayrıldığınızda touched çalışır
    values, // value değerini yakalar
    isSubmitting, // submit işlemi sırasında birden fazla tıklamalar için pasif etmek için kullanılır
  } = useFormik({
    initialValues: {
      name: id ? state.name : "",
      description: id ? state.description : "",
    },
    onSubmit: async (value) => {
      (await id) ? tudoUpdate(id, value) : tudoAdd(value);
 
      navigate("/");
    },
    validationSchema: validations,
  });
  return (
    <div className="w-full max-w-sm mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={values.name}
            disabled={isSubmitting}
            onBlur={handleBlur("name")}
          />
          {errors.name && touched.name && (
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
              {errors.name}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlines"
            id="description"
            name="description"
            type="text"
            placeholder="Description"
            onChange={handleChange}
            value={values.description}
            disabled={isSubmitting}
            onBlur={handleBlur("description")}
          />
          {errors.description && touched.description && (
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
              {errors.description}
            </div>
          )}
        </div>
        <button
          className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={isSubmitting}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default AddUpdate;
