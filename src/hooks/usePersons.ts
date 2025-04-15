import { useEffect, useState } from "react";
import { Person, PersonFilter } from "../types";
import { API_BASE } from "../constants/app";


const getFilterQuery = (filter?: PersonFilter) => {

    const query = new URLSearchParams();
    if (!filter)
        return query;
    if (filter.name.trim() !== '') query.append("name", filter.name);
    if (filter.country.trim() !== '') query.append("country", filter.country);

    return query;
}
const usePerson = (filter?: PersonFilter) => {
    const [persons, setPersons] = useState<Person[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const res = await fetch(`${API_BASE}/person?${getFilterQuery(filter)}`);
                    const data = await res.json();
                    setPersons(data);
                } catch (err) {
                    console.error("Error fetching persons", err);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }, 300);
        return () => clearTimeout(timer);
    }, [filter?.name, filter?.country]);

    return { persons, loading };
}

export default usePerson;