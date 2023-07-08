import React from "react";
import logo from "../../assets/logo.png";
import { SignupParent,
        SignupWrapper,
        FormHeader,
        FormContainer,
        FormFooter,
        LContainer
 } from "./sign.up.styles";
import { Link } from "react-router-dom";
import {
    FormControl,
    FormLabel, 
    Input,
    Button
} from "@chakra-ui/react";


// import { useDispatch } from "react-redux";


// import { setUser } from "../../slices/users";

const Signup = () => {
    
    /*const [form, setForm] = useState({
      fullname: "",
      email: "",
      phonenumber: "",
      password: "",
  
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
  
    const toast = useToast();
    // const dispatch = useDispatch();
  
    useEffect(() => {
      if (success) {
        toast({
          position: "top-left",
          render: () => (
            <Box color="white" p={3} bg="green.500" fontSize={15}>
              Sign up successful. Please check your mail for verification.
            </Box>
          ),
        });
      }
  
      if (error)
        toast({
          position: "top-right",
          render: () => (
            <Box color="white" p={3} bg="red.500" fontSize={15}>
              {error}
            </Box>
          ),
        });
    }, [success, toast, error]);
  
    const { fullname, email, phonenumber, password } = form;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!fullname || !phonenumber || !email || !password ) {
        toast({
          position: "top-right",
          render: () => (
            <Box color="white" p={3} bg="red.500" fontSize={15}>
              All fields are required!
            </Box>
          ),
        });
        return;
      }
  
      if (password !== confirmPassword) {
        toast({
          position: "top-right",
          render: () => (
            <Box color="white" p={3} bg="red.500" fontSize={15}>
              Passwords do not match
            </Box>
          ),
        });
        return;
      }
  
      setLoading(true);
  
      try {
        const { data } = await APIConfig.post("auth/register", form);
        console.log(data);
        // dispatch(
        //   setUser({
        //     fullname: data.fullname,
        //     email: data.local.email,
        //   })
        // );
        setLoading(false);
        setSuccess(true);
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    };*/
    return (
        <SignupParent>
            <SignupWrapper>
                <LContainer>
                    <img src={logo} alt="logo" />
                </LContainer>
                <FormContainer>
                    <form>
                        <FormHeader>
                           <h1> Sign Up</h1>
                          <h3>Create your Goldcart account</h3>  
                            
                        </FormHeader>
                        
                            
                        <FormControl marginBottom={"4px"}>
                            <FormLabel
                                fontSize="15"
                                fontWeight="400"
                                fontFamily="inherit"
                                paddingBlock="4px"
                            >
                                Name
                            </FormLabel>
                            <Input
                                type="name"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="First Name and Last Name"
                                name="First Name and Last Name"
                                borderRadius={"5px"}
                                width={"18rem"}
                            />
                        </FormControl>

                        <FormControl marginBottom={"7px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="4px">
                                Email Address
                            </FormLabel>
                            <Input
                                type="email"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Enter Email Address"
                                name="Email Address"
                                borderRadius={"5px"}
                                width={"18rem"}
                            />
                        </FormControl>

                        <FormControl mt={4} marginBottom={"7px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="4px">
                                Phone Number
                            </FormLabel>
                            <Input
                                type="phonenumber"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Enter Phone Number"
                                name="phonenumber"
                                borderRadius={"5px"}
                                width={"18rem"}
                            />
                        </FormControl>

                        <FormControl mt={4} marginBottom={"7px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="2px">
                                Password
                            </FormLabel>
                            <Input
                                type="password"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Password"
                                borderRadius={"5px"}
                                width={"18rem"}

                            />
                        </FormControl>



                        <FormControl marginBottom={"2px"}>
                            {" "}
                            <Button
                                colorScheme={"#CF9D3A"}
                                color={"#fff"}
                                width={"18.5rem"}
                                mt={4}
                                fontSize="12"
                                fontWeight="600"
                                fontFamily="inherit"
                                backgroundColor={"#CF9D3A"}
                                height={"2rem"}
                                marginBottom={"0.1rem"}
                                borderRadius={"5px"}
                                borderColor={"#CF9D3A"}
                                text="Sign Up"
                                
                            >
                               Sign Up
                              
             
                            </Button>
                        </FormControl>
                          
                         <FormFooter><p> Already have an account?          <Link to="/sign-in">Sign in</Link>
                          <br></br>  By signing up you accept our <Link>terms and condition &
                                private policy</Link></p>
                                </FormFooter>
                        </form>
                </FormContainer>
            </SignupWrapper>
        </SignupParent>

    );
};

export default Signup;