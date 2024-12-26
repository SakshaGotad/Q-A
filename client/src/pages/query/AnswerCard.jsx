import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiTwotoneDelete } from 'react-icons/ai';
import { useAuth } from '../../Context/auth';
import './AnswerCard.css';
import toast from 'react-hot-toast';
const AnswerCard = ({ name, email, answer, id, fetchAnswerFun, userId }) => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
//   const [updatedAnswer, setUpdatedAnswer] = useState(answer);
  const [newAns, setNewAns] = useState(answer);

  const handleUpdateClick = () => {
    setShowModal(true);
  };

  const handleDeleteClick = async() => {
     // Your delete logic here
    try {
        const yes = window.confirm("Are you sure want to delete ?")
       if(yes){
        const deleteQuery =  await fetch(`http://localhost:5001/ans/delete-answer/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })

        if(deleteQuery){
            fetchAnswerFun();
            toast.success("Answer deleted successfully")
        }
    }
    } catch (error) {
        console.log(error);
    }
    console.log("Answer deleted!");
    
  };

  const handleUpdateAnswer = async() => {
    // Handle answer update API request here
    try {
        const yes = window.confirm(" Are you sure want to Update ?")
    if(yes){
        let update = await fetch(`http://localhost:5001/ans/edit-answer/${id}`,
            {
                method:"PUT",
                body:JSON.stringify({answer:newAns}),
                headers:{
                    "Content-Type": "application/json"
                },})
         update = await update.json();
         if(update){
            toast.success("Answer updated successfully");
            fetchAnswerFun();
         }
    }
    // console.log("Updated Answer:", updatedAnswer);
    setShowModal(false);
    // fetchAnswerFun();
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="answer-card">
      <div className="answer-card-header">
        <div>
          <h3 className="answer-card-title">{name}</h3>
          <p className="answer-card-email">{email}</p>
        </div>
        {userId === user._id && (
          <div className="answer-card-actions">
            <button
              className="edit-btn"
              onClick={handleUpdateClick}
            >
              <FaEdit />
            </button>
            <button
              className="delete-btn"
              onClick={handleDeleteClick}
            >
              <AiTwotoneDelete />
            </button>
          </div>
        )}
      </div>
      <p className="answer-card-content">{answer}</p>

      {/* Modal for updating the answer */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Update Answer</h3>
            <textarea
              value={newAns}
              onChange={(e) => setNewAns(e.target.value)}
              className="textarea"
              placeholder="Update your answer"
            />
            <div className="modal-actions">
              <button
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button className="update-btn" onClick={handleUpdateAnswer}>
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnswerCard;
