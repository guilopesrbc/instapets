import "./styles.css";
import { ChangeEvent, FormEvent, useState } from "react";
interface LoginProps {
  loginType: "login" | "signup" | undefined;
}

function Login({ loginType }: LoginProps) {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLogin("");
    setPassword("");
  };

  return (
    <>
      <div className="login-container">
        {loginType === "login" ? <h1>Login</h1> : <h1>Criar conta</h1>}
        <form onSubmit={submit}>
          <input type="text" placeholder="Login" value={login} onChange={changeLogin} required/>
          <input type="password" placeholder="Senha" value={password} onChange={changePassword}/>
          <input type="submit" value={loginType === "login" ? "Entrar" : "Criar conta"}/>
        </form>
        {loginType === "login" ? (
          <a href="/signup">Criar conta</a>
        ) : (
          <a href="/login">Já tenho conta</a>
        )}
      </div>
    </>
  );
}

export default Login; 