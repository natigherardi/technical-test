import { MultiSelect } from "primereact/multiselect";
import { useState } from "react";

const CategoriesMultiselect = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = [
    { name: "Food", code: "food" },
    { name: "Clothes", code: "clothes" },
    { name: "Toiletries", code: "toiletries" },
    { name: "Free shipping", code: "free-shipping" },
    { name: "New", code: "new" },
    { name: "Offer", code: "offer" },
    { name: "Limited edition", code: "limited-edition" },
  ];

  return (
    <div className="card flex justify-content-center">
      <MultiSelect
        value={selectedCategories}
        onChange={(e) => {
          setSelectedCategories(e.value);
        }}
        options={categories}
        optionLabel="name"
        optionValue="code"
        display="chip"
        placeholder="Select categories"
        maxSelectedLabels={3}
        className="w-full md:w-20rem"
      />
    </div>
  );
};

export default CategoriesMultiselect;
