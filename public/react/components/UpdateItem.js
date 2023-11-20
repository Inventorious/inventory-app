import React from "react";

export const UpdateForm = ({ fetchItems, singlePageData, setIsUpdatePage }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  async function handleUpdateItem(item) {
    const res = await fetch(`${apiURL}/items/${item.id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        description: description,
        category: category,
        price: price,
        image: image,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    setName("");
    setDescription("");
    setCategory("");
    setPrice(0);
    setImage("");
    setIsAddPage(false);
    fetchItems();
  }

  return (
    <>
      <form onSubmit={handleUpdateItem(singlePageData)}>
        <input
          className="input"
          name="name"
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        ></input>
        <input
          className="input"
          name="description"
          type="text"
          placeholder="Item description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        ></input>
        <input
          className="input"
          type="text"
          name="category"
          placeholder="Item category"
          value={category}
          onChange={(e) => {
            console.log(category);
            setCategory(e.target.value);
          }}
          required
        ></input>
        <input
          className="input"
          type="number"
          name="price"
          placeholder="Item price (number)"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          required
        ></input>
        <input
          className="input"
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        ></input>
        <button className="button" type="submit">
          Submit Changes
        </button>
      </form>
    </>
  );
};
