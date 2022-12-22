import './App.css';
import companyData from './Company Details.json';
import UserData from './User Details.json';
import addressData from './Address.json';
import { useState } from 'react';

console.log({ companyData }, { UserData }, { addressData });
function App() {
  const [initialValue, setInitialValue] = useState();
  const [nameSearchValue, setNameSearchValue] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;

    setInitialValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameAndID = companyData.filter(
      (item) => item.company_name == initialValue || item.id == initialValue
    );
    setNameSearchValue(nameAndID);
    console.log({ nameAndID }, { companyData }, { initialValue });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        Enter value: {initialValue} <br />
        <input
          type="text"
          name="name"
          value={initialValue}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {nameSearchValue &&
          nameSearchValue.length > 0 &&
          nameSearchValue.map((item) => {
            <ol>
              <li>
                name: {item.company_name} + id: {item.id} + total employee:{item.no_of_employees}
              </li>
            </ol>;
          })}
      </div>
    </div>
  );
}

export default App;
