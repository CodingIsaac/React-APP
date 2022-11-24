import { Fragment } from "react";
import DessertsList from "./desertList";

const desserts = [
    {
      name: "Chocolate Cake",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Ice Cream",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Tiramisu",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Cheesecake",
      calories: 600,
      createdAt: "2022-01-04",
    },
    {
        name: "Gelato",
        calories: 300,
        createdAt: "2022-01-04",
      },
  ];
  

function Dessets () {
    return ( 
        <Fragment>
        <h2>List of Deserts</h2>
        <DessertsList data={desserts} />
        </Fragment>
        
         );
}

export default Dessets;