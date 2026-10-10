import React, {useState , useEffect} from "react";
import DisplayPosts from "./components/DisplayPosts";

const App = () => {

  const[data, setData] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error , setError] = useState(null);

  const[currentpage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastPost = currentpage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = data.slice(indexOfFirstPost,indexOfLastPost);

  const totalPages = Math.ceil(data.length / postsPerPage); // 30 / 10 = 3 Pages

  const pageNumbers = [];
  for(let i = 1; i <= totalPages; i++){
    pageNumbers.push(i);
  }

  useEffect(() => {
    const fetchData = async () => {
      try{
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if(!response.ok){
          throw new Error("Not Able To Fetch Data");
        }

        
        const posts = await response.json();
        const sliceData = posts.slice(0,30);
        setData(sliceData);
        console.log(sliceData);
      }catch(error){
        setError("Error : " + Error)
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  },[])

  return (
    <>
      <h2>List of Posts</h2>
      <p>Number of Items present: {data.length}</p>

      <DisplayPosts data={currentPosts} />


      <div>
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentpage === 1}
        >
          Prev
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)} 
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentpage === totalPages}
        >
          Next
        </button>


      </div>
    </>
  )
};

export default App;