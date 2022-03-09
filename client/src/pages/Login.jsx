//import { Button } from "@material-ui/core"
import styled from "styled-components"
//import { Button } from "@material-ui/core";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://cdn.vox-cdn.com/thumbor/blXC2JyP5cqQs3YIAgunJm1ANbM=/0x0:3840x2160/1320x0/filters:focal(0x0:3840x2160):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13329371/RDR2_Screenshot_094_copy.jpg")
      center;
  background-size: cover;
  display: wrap;
  align-items: center;
  /* justify-content: top; */
`;

const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: darkred;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

// function Login({currentUser, setCurrentUser}) {
//     const navigate = useNavigate();
//     const [errors, setErrors] = useState([]);
//     // const path = `/rooms/${roomID}`
//     const [formData, setFromData] = useState({
//       username: "",
//       password: "",
//     });


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create Account</Title>
            <Form>
                <Input placeholder="first name"/>
                <Input placeholder="last name"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
            </Form>
        </Wrapper>
    </Container>
  );
};

export default Login;