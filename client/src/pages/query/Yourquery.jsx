import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/auth';  // Assuming your auth context is set up
import QueryCard from './QueryCard';
import './Yourquery.css';

const Yourquery = () => {
  const { user } = useAuth();  // Assuming user info is available via useAuth
  const userId = user._id;
  const [data, setData] = useState([]);
  console.log(data);

  const Yourqueries = async () => {
    try {
      const response = await fetch(`https://q-a-e2s5.onrender.com/query/yours-query`, {
        method: 'POST',
        body: JSON.stringify({ userId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Yourqueries();
  }, [userId]);

  return (
    <div className="your-query-container">
      {data.length === 0 ? (
        <div className="h-screen">
          <h1 className="no-queries-message">Not posted any Query yet</h1>
        </div>
      ) : null}

      <div className="query-card-container">
        {data.map((item) => {
          return (
            <QueryCard
              key={item._id}
              title={item.title}
              query={item.query}
              _id={item._id}
              name={item.name}
              YoursQuery={true}
              yourQueriesFun={Yourqueries}
              tags={item.tags}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Yourquery;
