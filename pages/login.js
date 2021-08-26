import React, { useState } from "react";
import { useRouter } from "next/router";
import { auth } from "/utils/nhost";
import {
  Text,
  Stack,
  Input,
  Button,
  Center,
  Heading,
  Box,
} from "@chakra-ui/react";

//import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa"; //different signin options
import Container from "/components/ContainerComponent";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Layout from "../components/layout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  //const GITHUB_LOGIN = `${process.env.NEXT_PUBLIC_NHOST_BACKEND}/auth/providers/github`; //github login
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await auth.login(email, password);
    } catch (error) {
      return alert("Login Failed! Please Try again.");
    }

    router.push("/");
  }

  return (
    <div>
      <Header/>
    <Container>
      <Heading as="h1" textAlign="center">
        Login
      </Heading>
      <Center>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoFocus
            mt={[2, 4]}
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            mt={[2, 4]}
          />
          <Box mx="auto" width="100%">
            <Button
              colorScheme="green"
              width="45%"
              mt={[2, 4]}
              ml={4}
              type="submit"
            >
              Log In
            </Button>
            <Button
              colorScheme="red"
              width="45%"
              mt={[2, 4]}
              ml={4}
              as="a"
              href="/"
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Center>
      <Text mt={4} textAlign="center">
        Don't have an account? <a href="/signup">Click here to Sign Up</a>
      </Text>
    </Container>
    <Footer/>
    </div>
  );
}