import { useState } from "react";
import { ContainerLogin } from "../components/Containerpage/style";
import { Form } from "../components/Form/form";
import { Title } from "../components/Title/style";
import { Subtitle } from "../components/Subtitle/styles";
import { Checkbox } from "../components/CheckBox";
import { Input } from "../components/Input";
import { Button } from "../components/Button"

const Login = () => {
  const [stateLogin, setStateLogin] = useState("");
  const [statePassword, setStatePassword] = useState("");

  const doLogin = async () => {
    const result = await postLogin(stateLogin, statePassword);
    if (result.logged) {
      window.location.href = "/";
      return;
    }
    alert(result.message);
  };
  return (
    <ContainerLogin>
      <div className="leftContainer">
        <Form>
          <div className="textLoginContainer">
            <Subtitle>Seja bem vindo!</Subtitle>
            <Title fontSize={36}>Realize seu login</Title>
          </div>
          <Input
            label={"Email"}
            placeholder={"Insira seu Email"}
            inputState={stateLogin}
            inputSetState={setStateLogin}
          />
          <Input
            label={"Senha"}
            placeholder={"Insira sua Senha"}
            inputState={statePassword}
            inputSetState={setStatePassword}
          />
          <div id="checkbox-remember">
            <div className="checkboxDiv">
              <Checkbox />
              <Subtitle>Lembrar-me</Subtitle>
            </div>
            <div className="rememberDiv">
              <Subtitle>Esqueci minha senha</Subtitle>
            </div>
          </div>
          <Button text="Entrar" variant="login" onClick={() => doLogin()} />
        </Form>
      </div>
      <div></div>
    </ContainerLogin>
  );
};

export default Login;
