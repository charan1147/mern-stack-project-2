import { useState } from "react";
import "./StudentForm.css"

function StudentForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const student = { name, age, course };

    try {
      const res = await fetch("http://localhost:5002/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Student added:", data);

        // Clear the form fields after successful submission
        setName("");
        setAge("");
        setCourse("");
      } else {
        console.error("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>Add the Student to the Database</h2>
      <input
        type="text"
        placeholder="Enter the Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Enter the Student Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enter the Student Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
