"use client";

import { Button } from "@heroui/react";
import React, { useEffect, useState } from "react";

const Category = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch("/category.json");
      const data = await res.json();
      setCategories(data);
    };

    fetchCategory();
  }, []);

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      <Button onPress={() => setSelectedCategory("All")}>
        All
      </Button>

      {categories.map((category) => (
        <Button
          key={category.id}
          onPress={() => setSelectedCategory(category.name)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default Category;