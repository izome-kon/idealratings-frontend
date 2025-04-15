import { Person } from "../types";

interface Props {
    persons: Person[];
}

export const PersonTable = ({ persons }: Props) => {
    if (persons.length === 0) {
        return (
            <div className="text-center p-4 text-gray-500">
                No results found.
            </div>
        )
    }

    return (
        <table className="table-auto w-full border">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">First Name</th>
                    <th className="border p-2">Last Name</th>
                    <th className="border p-2">Phone</th>
                    <th className="border p-2">Country</th>
                    <th className="border p-2">Address</th>
                </tr>
            </thead>
            <tbody>
                {persons.map((p, idx) => (
                    <tr key={idx}>
                        <td className="border p-2">{p["first name"]}</td>
                        <td className="border p-2">{p["last name"]}</td>
                        <td className="border p-2">{p["telephone code"] + p["telephone number"]}</td>
                        <td className="border p-2">{p["country"]}</td>
                        <td className="border p-2">{p.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}