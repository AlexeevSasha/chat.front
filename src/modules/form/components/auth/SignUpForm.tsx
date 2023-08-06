import { useForm } from "@/modules/form/hooks/useForm";
import { signUpValidation } from "@/modules/form/validation/auth/signUp.validation";
import { Input } from "@/common/ui/Input/Input";
import { Button } from "@/common/ui/Button/Button";
import styles from "./auth.form.module.scss";
import { IAuthSighUp } from "@/modules/auth/interfaces/auth";

export const SignUpForm = () => {
  const { values, handleChange, handleSubmit, errors } = useForm<IAuthSighUp>({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: signUpValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        id={"firstname"}
        name={"firstname"}
        placeholder={"Firstname"}
        value={values.firstname}
        onChange={handleChange}
        error={errors?.firstname || ""}
      />
      <Input
        id={"lastname"}
        name={"lastname"}
        placeholder={"Lastname"}
        value={values.lastname}
        onChange={handleChange}
        error={errors?.lastname || ""}
      />
      <Input id={"email"} name={"email"} placeholder={"Email"} value={values.email} onChange={handleChange} error={errors?.email || ""} />
      <Input
        id={"password"}
        name={"password"}
        type={"password"}
        placeholder={"Password"}
        value={values.password}
        onChange={handleChange}
        error={errors?.password || ""}
      />
      <Button type={"submit"}>Sing Up</Button>
    </form>
  );
};
