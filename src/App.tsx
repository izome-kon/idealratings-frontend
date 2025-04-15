import { useState } from "react";
import { PersonTable } from "./components/PersonTable";
import usePersons from "./hooks/usePersons";
import logo from './assets/logo.png';
const getDataFrom = () => {
  if (import.meta.env.VITE_BACKEND_ENV === 'nodejs')
    return 'CSV File + Nodejs server & MongoDB'
  return 'CSV File + .NET Core API & MSSQL'
}
function App() {
  const [nameFilter, setNameFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const { persons, loading } = usePersons({ name: nameFilter, country: countryFilter });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Company Logo" className="h-10" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Person Details</h1>
      <h5 className="font-bold mb-4">Data From  {getDataFrom()}</h5>
      <div className="flex flex-row justify-between gap-4">
        <input
          type="text"
          placeholder="Filter by name..."
          className="border p-2 rounded w-full mb-4"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by country..."
          className="border p-2 rounded w-full mb-4"
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
        />
      </div>

      {loading ? <p>Loading...</p> : <PersonTable persons={persons} />}
    </div>
  );
}

export default App;