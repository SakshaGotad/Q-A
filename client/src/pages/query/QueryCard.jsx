import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { AiTwotoneDelete } from 'react-icons/ai';
import './QueryCard.css';  // Assuming the CSS will be in this file
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const QueryCard = ({ query, name, tags, title, email, YoursQuery,yourQueriesFun,_id }) => {

  const [updateQuery , setUpdatedQuery] = useState(query);

  const handleDeleteQuery = async() => {
    // Implement the delete functionality here
    try {
      console.log(_id)
     await fetch(`http://localhost:5001/query/delete-query/${_id}`,
      {
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        }
      }
     )
     yourQueriesFun() 
toast.success("Query Deleted successfully")
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateQuery = async() => {
    // Implement the update functionality here
    try {
      console.log(_id)
      const response = await fetch(`http://localhost:5001/query/update-query/${_id}`,
        {
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({query:updateQuery})
        }
      )
      const result = response.json();
      if(result){
        yourQueriesFun();
        toast.success("Your query updated")
      }
    } catch (error) {
      console.log(error)
      toast.error("something went wrong");
    }
  };

  return (
    <div className="query-card">
      <div className="query-card-header">
        <Link to={`/polls/${_id}`}>
        <h1 className="query-card-title">{title}</h1>
        <div className="query-card-user">
          <p className="query-card-user-name">{name}</p>
          <span className="query-card-user-email">{email}</span>
        </div>
        <p className="query-card-content">{query}</p>
        </Link>
      </div>

      <div className="query-card-tags">
  {(tags || '').split(',').map((tag, index) => (
    <span key={index} className="query-card-tag">{tag}</span>
  ))}
</div>


      <div className="query-card-footer">
        {/* <button className="like-btn">
          <FaHeart />
        </button> */}

        {YoursQuery && (
          <>
            {/* Edit Button */}
            <button className="edit-btn" onClick={() => document.getElementById('update-modal').style.display = 'block'}>
              <FiEdit />
            </button>

            {/* Delete Button */}
            <button onClick={handleDeleteQuery} className="delete-btn">
              <AiTwotoneDelete />
            </button>
          </>
        )}
      </div>

      {/* Modal for updating query */}
      <div id="update-modal" className="update-modal">
        <div className="update-modal-content">
          <h2>Update Your Query</h2>
          <textarea
            value={updateQuery}
            onChange={e => setUpdatedQuery(e.target.value)}
            placeholder="Type your updated query"
          />
          <div className="modal-actions">
            <button className="modal-update-btn" onClick={handleUpdateQuery}>
              Update
            </button>
            <button className="modal-close-btn" onClick={() => document.getElementById('update-modal').style.display = 'none'}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryCard;
