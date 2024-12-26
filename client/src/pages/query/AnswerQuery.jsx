import React, { useEffect, useState } from 'react'
import './AnswerQuery.css';
import QueryCard from './QueryCard'
import AnswerCard from './AnswerCard'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../Context/auth';
import toast from 'react-hot-toast';



const AnswerQuery = () => {
  const {id} = useParams();
  const queryId =  id;
  const {user} = useAuth();
  const name = user.name;
  const email = user.email;
  const userId = user._id;
  

  const [data , setData] = useState({});
  const [ansData, setAnsData]  = useState([])
  const [ answer , setAnswer] = useState('')

  const submitAns =async(e)=>{
    e.preventDefault();
    try {
      let answering = await fetch(`http://localhost:5001/ans/answering`,{
        method:"POST",
        body:JSON.stringify({queryId,answer,name, email, userId}),
        headers:{
          "Content-Type": "application/json"
        },
      })
      answering = answering.json();
      if(answering){
         
        fetchAnswers();
        setAnswer('');
        toast.success("Answer submitted")
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  const fetchAnswers = async () => {
    try {
      const response = await fetch(`http://localhost:5001/ans/answers/${id}`,
        {
          method:"GET",
          
        }
      );
      const ansq = await response.json();
      console.log('Fetched Answers:', ansq); // Log the data to check
      setAnsData(ansq); // This will update the state with the new answer data
    } catch (error) {
      console.log('Error fetching answers:', error);
    }
  };
  

  const fetchQuery = async()=>{
       await fetch(`http://localhost:5001/query/query/${id}`)
      .then((resp)=> resp.json())
      .then((data)=> setData(data)
      ).catch((Error)=>{
        console.log(Error)
      })
    
    
  }

  useEffect(()=>{
  fetchQuery();
  fetchAnswers();
  },[id])

  return (
    <div className="answer-page-container">
      <QueryCard
        title={data.title}
        name={data.name}
        query={data.query}
        tags={data.tags}
        email={data.email}
        _id={data._id}
      />
      <div className="answer-card-container">
        { ansData.length >0 ?
        ansData.map((item) => (
          <AnswerCard
            key={item._id}
            id={item._id}
            answer={item.answer}
            name={item.name}
            email={item.email}
            userId={item.userId}
            fetchAnswerFun={fetchAnswers}
          />
        )):(
          <p>No answers yet.</p>
        )}
      </div>
      {/* Answer form */}
      <div className="answer-form-container">
        <form onSubmit={submitAns}>
          <div className="form-group">
            <label htmlFor="answer" className="form-label">Write your answer</label>
            <textarea
              id="answer"
              className="form-textarea"
              placeholder="Type Your answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AnswerQuery
