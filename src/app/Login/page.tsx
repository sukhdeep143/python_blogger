"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "",
      password: "",
    },
    validationSchema: Yup.object({
      usernameOrEmail: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        setMessage(data.message);

        if (response.ok) {
          localStorage.setItem("usernameOrEmail", values.usernameOrEmail);
          router.push("/User");
        }
      } catch (error) {
        console.error(error);
        setMessage("An error occurred while logging in.");
      }
    },
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 mb-10 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <Input type="text" placeholder="Username or Email" {...formik.getFieldProps("usernameOrEmail")} />
        {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail && (
          <p className="text-red-500 ">{formik.errors.usernameOrEmail}</p>
        )}

        <Input type="password" placeholder="Password" {...formik.getFieldProps("password")} />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500">{formik.errors.password}</p>
        )}

        <Button type="submit" className="w-full mt-4">Login</Button>
      </form>

      {message && <p className="mt-2 text-center">{message}</p>}
    </div>
  );
}
