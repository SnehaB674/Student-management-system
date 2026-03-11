import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {

    setStudents([
      { id: 1, name: "Sneha", email: "sneha@gmail.com", age: 21 },
      { id: 2, name: "Rahul", email: "rahul@gmail.com", age: 22 }
    ]);

    setLoading(false);

  }, []);

  const addStudent = () => {

    if (name && email && age) {

      const newStudent = {
        id: students.length + 1,
        name: name,
        email: email,
        age: age
      };

      setStudents([...students, newStudent]);

      setName("");
      setEmail("");
      setAge("");

    }

  };

  const deleteStudent = (index) => {

    const data = [...students];
    data.splice(index, 1);
    setStudents(data);

  };

  return (

    <div className="container">

      <h2>Student Management System</h2>

      {/* FORM ROW */}

      <div className="form-row">

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button className="add-btn" onClick={addStudent}>
          ➕ Add
        </button>

      </div>

      {/* BUTTON ROW */}

      <div className="action-row">

        <button className="search-btn">
          🔍 Search
        </button>

        <button className="download-btn">
          ⬇ Download
        </button>

      </div>

      {/* TABLE */}

      {loading ? (
        <p>Loading...</p>
      ) : (

        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {students.map((s, index) => (

              <tr key={s.id}>

                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.age}</td>

                <td>

                  <button className="edit-btn">
                     Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(index)}
                  >
                     Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>

  );

}

export default App;