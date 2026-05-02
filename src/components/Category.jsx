"use client";

import { Button } from "@heroui/react";
import { useEffect, useState } from "react";

const Category = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch("/category.json");
      const data = await res.json();
      setCategories(data);
    };

    fetchCategory();
  }, []);

  const buttonClass = (category) =>
    `justify-start ${
      selectedCategory === category ? "bg-blue-600 text-white" : ""
    }`;

  return (
    <aside className="w-full shrink-0 rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:w-64">
      <h3 className="mb-4 text-lg font-bold text-gray-800">Categories</h3>
      <div className="flex flex-row flex-wrap gap-3 lg:flex-col">
        <Button
          className={buttonClass("All")}
          onPress={() => setSelectedCategory("All")}
        >
          All
        </Button>

        {categories.map((category) => (
          <Button
            className={buttonClass(category.name)}
            key={category.id}
            onPress={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </aside>
  );
};

export default Category;
