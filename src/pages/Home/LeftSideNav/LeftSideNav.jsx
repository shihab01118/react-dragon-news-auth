import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">All Category</h2>
      <div>
        {categories?.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="text-lg font-semibold pl-8 py-4 block"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
