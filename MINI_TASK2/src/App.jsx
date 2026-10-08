import React, {useState , useEffect} from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const[products , setProducts] = useState([]);
  const[loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const[searchQuery , setSearchQuery] = useState("");

  const [selectedCategory , setSelectedCategory] = useState("All");

  const [sortBy , setSortBy] = useState("default");

  const categories = ["All", ...new Set(products.map((product) => product.category))];

  const filteredProducts = products
  .filter((product) => (product.title.toLowerCase().includes(searchQuery.toLowerCase())))
  .filter((product) => selectedCategory === "All" || product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a,b) => {
    if(sortBy === "low") return a.price - b.price;
    if(sortBy === "high") return b.price - a.price;

    return 0;
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try{
          setLoading(true);
          const response = await fetch("https://fakestoreapi.com/products");

          if(!response.ok){
            throw new Error("Not Able to fetch data")
          }

          const data = await response.json();
          setProducts(data);
          console.log(data);
      }catch(error){
        console.log(error.message);
        setError("Failed to load products");
      }finally{
        setLoading(false);
      }
    }

    fetchProducts();
  },[]);

  if(loading){
    return <h2>Loading... .. </h2>
  }

  if(error){
    return <h2 style={{color : "red"}}>Error In Fetching Data</h2>
  }

  return (
    <>
      <h1>Product List</h1>
      <p>Total number of items fetched: {products.length}</p>

      <input style={{padding: "20px" , marginBottom: "20px", borderRadius: "10px"}}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder= "Search Product"
      />

      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat} >{cat}</option>
        ))}
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="default">Sort By Price: Default</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>

      {sortedProducts.length === 0 ? (<p>No products found with matching search</p>) : (<ProductList data={sortedProducts} />)}
    </>
  )
}

export default App;