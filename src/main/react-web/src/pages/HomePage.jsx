import React, { useEffect, useContext, useState } from "react";
import { useResource } from "react-request-hook";
import { useOktaAuth } from "@okta/okta-react";
import { Container } from "react-bootstrap";
import StateContext from "../store/Contexts";
import Category from "../components/Category/Category";
import axios from "axios";

const HomePage = () => {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  const { authState, oktaAuth } = useOktaAuth();
  const [categories, setCategories] = useState([]);

  const [userInfo, saveUserInfo] = useResource(() => ({
    url: "/api/users/",
    method: "post",
    data: user,
  }));

  useEffect(() => {
    async function getData() {
      const response = await axios.get("/api/category/");
      console.log(response.data);
      setCategories(response.data);
    }
    getData();
  }, []);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      dispatch({ type: "LOGOUT" });
    } else {
      oktaAuth
        .getUser()
        .then((info) => {
          dispatch({
            type: "LOGIN",
            userName: info.preferred_username,
            firstName: info.given_name,
            lastName: info.family_name,
            email: info.email,
            zipcode: "",
            state: "",
            city: "",
            phoneNumber: "",
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [authState, oktaAuth]);

  useEffect(() => {
    if (authState && authState.isAuthenticated && user.userName != "") {
      saveUserInfo(user);
    }
  }, [user]);

  return (
    <header className="App-header">
      <Container>
        {categories.map((category) => {
          if (category.movies.length > 0) {
            return (
              <Category
                key={category.categoryId}
                title={category.category}
                movies={category.movies}
              />
            );
          }
        })}
      </Container>
    </header>
  );
};

export default HomePage;

