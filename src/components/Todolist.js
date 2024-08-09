import React, { useState } from "react";
import "./Todo.css";
import { Link } from "react-router-dom";

const Todolist = () => {
  const [inputvalue, setInputvalue] = useState("");
  const [status, setStatus] = useState([
    {
      name: "Add Event",
      completed: false,
    },
  ]);

  const handlechange = (e) => {
    setInputvalue(e.target.value);
  };

  const handleadd = (e) => {
    e.preventDefault();
    if (inputvalue.length > 0) {
      setStatus([...status, { name: inputvalue }]);
    } else {
      alert("Please Enter Task");
    }
    setInputvalue("");
  };

  const handledelete = (i) => {
    const newstatus = [...status];
    newstatus.splice(i, 1);
    setStatus(newstatus);
  };

  const handleDone = (index) => {
    const newstatus = status.map((item, i) => {
      if (i === index) {
        return { ...item, completed: true };
      }
      return item;
    });
    setStatus(newstatus);
  };

  const handleclear = () => {
    setInputvalue("");
  };

  const incompletetask = status.filter((item) => !item.completed);
  const completedtask = status.filter((item) => item.completed);

  return (
    <div style={{ backgroundColor: "#081c29" }}>
      <nav className="navbar navbar-expand-lg nav-barlogo">
        <div className="container container_nav">
          <a
            className="animate__animated animate__bounceInLeft animate__slower navbar-brand text-white"
            href="#"
          >
            <img
              src="https://cdn-icons-png.freepik.com/512/1351/1351514.png"
              width="80px"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="animate__animated animate__lightSpeedInRight animate__slower navbar-nav ms-auto">
              <Link to="/todo-list" style={{ textDecoration: "none" }}>
                <a
                  className="nav-link active text-white mx-4"
                  aria-current="page"
                  href="#home"
                >
                  Todo-List
                </a>
              </Link>
              <Link to="/portfolio_page" style={{ textDecoration: "none" }}>
                <a className="nav-link text-white mx-4" href="#about">
                  Portfolio
                </a>
              </Link>

              <Link to="/ecommerce_page" style={{ textDecoration: "none" }}>
                <a className="nav-link text-white mx-4" href="#services">
                  E-commerce
                </a>
              </Link>
              <Link to="/wether" style={{ textDecoration: "none" }}>
                <a className="nav-link text-white mx-2" href="#contactform">
                  Wethet-Application
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="main">
        <form className="todo-form">
          <h2 className="todo-heading"> Todo - List </h2>
          <div className="todo-div">
            <input
              className="todoinput"
              placeholder="Enter Events...."
              type="text"
              value={inputvalue}
              onChange={handlechange}
            />
            {inputvalue && (
              <button className="tod_clear_button" onClick={handleclear}>
                &times;
              </button>
            )}

            <button className="todobtn" onClick={handleadd}>
              ADD
            </button>
          </div>
        </form>

        <div className="todo_list">
          <h2 className="dailytasks text-white"> Daily - Task's </h2>
          <table className="todo-table">
            <tr className="todo-row">
              <th className="todo_sno"> S.no </th>
              <th className="todo_sno"> Task_Name </th>
              <th className="todo_sno"> Completed </th>
              <th className="todo_sno"> Action </th>
            </tr>
            {incompletetask.map((val, i) => {
              return (
                <tr key={i} className="todo_list2">
                  <td className="todo_sno">{i + 1}</td>
                  <td className="todo_sno">{val.name}</td>
                  <td className="todo-done">
                    <button
                      className="todo-done2"
                      onClick={() => handleDone(i)}
                    >
                      Done
                    </button>
                  </td>
                  <td className="todo_sno">
                    <button
                      className="todo-delete"
                      onClick={() => handledelete(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>

        {/* complete tasks */}

        <div className="todo_list">
          <h2 className="completedtasks text-white"> Completed - Task's </h2>
          <table className="todo-table">
            <tr className="todo-row">
              <th className="todo_sno"> S.no </th>
              <th className="todo_sno"> Task_Name </th>
              <th className="todo_sno"> Completed </th>
              <th className="todo_sno"> Action </th>
            </tr>
            {completedtask.map((val, i) => {
              return (
                <tr key={i} className="todo_list2">
                  <td className="todo_sno">{i + 1}</td>
                  <td className="todo_sno">{val.name}</td>
                  <td className="todo-done">
                    {val.completed ? (
                      <i className="fa-solid fa-check correct-icon"></i>
                    ) : (
                      <button
                        className="todo-done2"
                        onClick={() => handleDone(i)}
                      >
                        Done
                      </button>
                    )}
                  </td>
                  <td className="todo_sno">
                    <button
                      className="todo-delete"
                      onClick={() => handledelete(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
