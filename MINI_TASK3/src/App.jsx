import React, { useState, useEffect } from "react";
import ShowList from "./components/ShowList";
import AddShow from "./components/AddShow";

const App = () => {

  const [shows, setShows] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.tvmaze.com/shows");

        if (!response.ok) {
          throw new Error("Not Able To Fetch");
        }

        const data = await response.json();

        const first15Shows = data.slice(0, 15).map((show) => ({
          ...show,
          status: "Plan to Watch"
        }));

        setShows(first15Shows);
        console.log(first15Shows);
      } catch (error) {
        console.log(error.message);
        setError("Not Able To Fetch");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <h1>Please Wait .. .. </h1>
  }

  if (error) {
    return <h2 style={{ color: "red" }} >Something Went Wrong</h2>
  }

  const filteredList = shows
    .filter((show) => show.name.toLowerCase().includes(searchQuery.toLowerCase()) || show.genres.some(g => g.toLowerCase().includes(searchQuery.toLowerCase())));

  const handleAddShow = (show) => {
    const createdShow = {
      id: Date.now(),
      name: show.name,
      genres: [show.genre],
      image: { medium: show.image },
      rating: { average: show.rating },
      status: "Plan to Watch"
    };

    setShows([...shows, createdShow]);
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <h1 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#0f172a", marginBottom: "0.5rem" }}>
        Watchlist Tracker
      </h1>
      <p style={{ color: "#64748b", marginBottom: "2rem" }}>
        Tracking {shows.length} shows from TVMaze
      </p>
      <AddShow onAdd={handleAddShow} />

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Show"
      />

      <ShowList shows={filteredList} />
    </div>
  )
}

export default App;