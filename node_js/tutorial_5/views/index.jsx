import React from "react";
import { Head } from "@react-ssr/express";
import "./index.css";
import Header from "./header";

const Index = ({ contentPages }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Cats, dogs and birds </title>
      </Head>

      <Header contentPages={contentPages}> </Header>

      <div className="root-page">
        <div className="website-description">
          <div>
            <h1>Welcome to the pets page </h1>
            <p>
              Here you can check random pictures of cats 😺 and dogs 🐶. You
              will be able to view the pictures in your browser or use the API
              and get the pictures in JSON format. On this page, you can also
              check the instructions on how to use this service. Have fun 🎉
            </p>
          </div>

          <img
            src={
              "https://chorus.stimg.co/21504194/ows_154117507482497.jpg?fit=crop&crop=faces"
            }
            alt=""
          />
        </div>

        <div className="docs-container">
          <div className="docs">
            <h2>Check the pictures in your browser:</h2>
            <p>
              In order to check the pictures of dogs, open
              http://(ourdomain)/api/dogs/html
            </p>
            <p>
              To check the pictures of cats, open
              http://(ourdomain)/api/cats/html
            </p>
          </div>

          <div className="docs">
            <h2>Use API</h2>
            <p>
              GET request to http://(ourdomain)/api/cats/json or
              http://(ourdomain)/api/dogs/json
            </p>
            <p>
              Example Response :
              "url":"https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg","animal":"cat","image_format_and_parameters":"jpg"
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
