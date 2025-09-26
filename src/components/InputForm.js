import { useState } from 'react';
import axios from 'axios';
import './InputForm.css';


function InputForm() {
const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [IdNum, setIdNum] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await axios.post(
      'savoterchecker.runasp.net', //this is the url for my server app
      { Name, Surname, IdNum }
    );
    
    setResult(res.data);
  } catch (err) {
    // If the server returns a JSON error payload, this prints it:
    if (err.response) {
      console.error('Status:', err.response.status);
      console.error('Data:', err.response.data);
      console.error('Headers:', err.response.headers);
      alert(
        `Server responded 400:\n` +
        JSON.stringify(err.response.data, null, 2)
      );
    } else {
      console.error(err);
      alert('Network or unexpected error: ' + err.message);
    }
  }}

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Voter Eligibility Checker</h1>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="firstName">First Name</label>
          <input
            className="input"
            value={Name}
            onChange={e => setName(e.target.value)}
            placeholder="First Name"
            required
          />
          <label htmlFor="Surname">Surname</label>
          <input
            className="input"
            value={Surname}
            onChange={e => setSurname(e.target.value)}
            placeholder="Surname"
            required
          />
          <label htmlFor="IdNum">ID Number</label>
          <input
           //type="password"
            className="input"
            value={IdNum}
            onChange={e => setIdNum(e.target.value)}
            placeholder="ID Number"
            required
          />
          <button type="submit" className="button">Check</button>
        </form>
        
        {result && (
          <div className="result">
            <p>Age: {result.age}</p>
            <p>Gender: {result.gender}</p>
            <p>Citizen: {result.isCitizen ? 'Yes' : 'No'}</p>
            <p>Eligible to Vote: {result.isCitizen && result.age>=18 ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default InputForm;
