import React from "react";

const Table = () => {
  const products = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];

  function classe(elt) {
    let x = "true";
    elt.stocked ? (x = "true") : (x = "false");
    return x;
  }

  return (
    <>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {products.map((element) => (
            <tr>
              <td class={classe(element)}>{element.name}</td>
              <td>{element.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
