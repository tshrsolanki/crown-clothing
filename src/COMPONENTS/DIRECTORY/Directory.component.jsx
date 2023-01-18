import React from "react";
import { DirectoryItem } from "../DIRECTORY_ITEM/DirectoryItem.component";
import "./Directory.style.scss";
export const Directory = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://wallpapercave.com/wp/wp5979535.jpg",
      route: "shop/hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://dailywold.com/wp-content/uploads/2022/04/LeatherJackets-600x300-1.jpg",
      route: "shop/jackets",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://i0.wp.com/justfreshkicks.com/wp-content/uploads/2022/09/bcf16f53-8e6f-433c-894b-dac153098ef3.jpg?resize=640%2C407&ssl=1",
      route: "shop/sneakers",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://img.freepik.com/premium-photo/multicoloured-wardrobe-woman-room_126740-886.jpg?w=2000",
      route: "shop/womens",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://media.istockphoto.com/id/498152460/photo/fashionable-mens-clothing.jpg?s=170667a&w=0&k=20&c=rGmSasN9Vzxc4wgfrSS_S_62-nKybTBKT3KqAlTcRwM= ",
      route: "shop/mens",
    },
  ];
  return (
    <div className="directory-container">
      {categories.map((category, i) => {
        return <DirectoryItem category={category} />;
      })}
    </div>
  );
};
