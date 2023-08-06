import styles from "./auth.form.module.scss";
import { useForm } from "@/modules/form/hooks/useForm";
import { signInValidation } from "@/modules/form/validation/auth/signIn.validation";
import { Input } from "@/common/ui/Input/Input";
import { Button } from "@/common/ui/Button/Button";
import { IAuthSighIn } from "@/modules/auth/interfaces/auth";

export const SignInForm = () => {
  const { values, handleChange, handleSubmit, errors } = useForm<IAuthSighIn>({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: signInValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input error={errors?.email || ""} onChange={handleChange} value={values.email} id={"email"} name={"email"} placeholder={"Email"} />
      <Input
        error={errors?.password || ""}
        value={values.password}
        onChange={handleChange}
        id={"password"}
        name={"password"}
        type={"password"}
        placeholder={"Password"}
      />
      <Button type={"submit"}>Send</Button>
    </form>
  );
};
