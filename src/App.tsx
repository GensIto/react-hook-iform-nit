import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./App.css";
import { validationSchema } from "./utils/validationSchema";
import { LoginForm } from "./types";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
    shouldUnregister: false,
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: LoginForm) => {
    console.log("Submitted Data", data);
  };

  return (
    <div className='form-container'>
      <h1>React-Hook-Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor=''>名前</label>
        <input type='text' id='name' {...register("name")} />
        {errors.name && <p>{errors.name.message as React.ReactNode}</p>}

        <label htmlFor='email'>メールアドレス</label>
        <input type='email' id='email' {...register("email")} />
        {errors.email && <p>{errors.email.message as React.ReactNode}</p>}

        <label htmlFor='password'>パスワード</label>
        <input id='password' type='password' {...register("password")} />
        {errors.password && <p>{errors.password.message as React.ReactNode}</p>}

        <button type='submit'>送信</button>
      </form>
    </div>
  );
}

export default App;
