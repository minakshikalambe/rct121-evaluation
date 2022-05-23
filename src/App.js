import React, { useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";
import { useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [ratingSalary, setRatingSalary]= useState("asc");
  useEffect(()=>{
    fetchData({
      page, 
      ratingSalary,
    });
  },[page,ratingSalary])

  const fetchData = async ({page,ratingSalary
  }) => {
    setLoading(true);
    axios({
      method: "get",
      url: "https://json-server-mocker-masai.herokuapp.com/candidates",
      params: {
        _page: page,
        _limit: 5,
        _sort: "salary",
        _order: `${ratingSalary}`,
      }
    })
    .then(res => {
      console.log(res)
      setData(res.data);
      setLoading(false);
    })
    .catch(err => {
      setError(true);
      setLoading(false);
      console.log(err)
    })
  } 
  
  return (
    <div className="App">
      <div>
      { loading && <div>loading</div>}
        <Button id="SORT_BUTTON"  title={`Sort by Ascending Salary`} onClick={()=>setRatingSalary(ratingSalary)}/>
        <Button title="PREV" id="PREV" disabled={page===1} onClick={() => setPage(page - 1)}/>
        <Button id="NEXT" title="NEXT" onClick={() => setPage(page + 1)} />
      </div>
      {data.map((item) => <CandidateCard key={item.id} {...item} />)}
    </div>
  );
}
