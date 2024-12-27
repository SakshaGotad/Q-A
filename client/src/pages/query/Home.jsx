import React, { useState, useEffect } from 'react';
import QueryCard from './QueryCard';
import './Home.css'; 

const Home = () => {
  const [queries, setQueries] = useState([]);

  
  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await fetch('https://q-a-e2s5.onrender.com/query/all-queries');
        const data = await response.json();
        setQueries(data);  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchQueries();
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-title">All Queries</h2>
      <div className="query-list">
        {queries.length > 0 ? (
          queries.map((queryItem) => (
            <QueryCard
              key={queryItem._id} 
              title={queryItem.title}
              email={queryItem.email}
              query={queryItem.query}
              name={queryItem.name}
              tags={queryItem.tags}
              _id ={queryItem._id}
            />
          ))
        ) : (
          <p className="no-queries-message">
            <span>No queries found!</span>
            <br />
            Try posting one.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
