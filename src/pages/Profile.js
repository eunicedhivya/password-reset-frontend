// import } from "react";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContextProvider";
import Cookies from "js-cookie";
// import BarChart from "../components/BarChart";

function Profile() {
  const { loggedIn } = useContext(AuthContext);
  console.log("loggedIn", loggedIn);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  // const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getMeInfo();
    return () => {};
  }, []);

  async function getMeInfo() {
    const url = "https://password-reset-ed.herokuapp.com/users/me";
    // const url = "http://localhost:4000/users/me";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ token: Cookies.get("token") }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("Success:", data);
        setFirstName(data.fname);
        setLastName(data.lname);
        setEmailId(data.email);
        // history.push("/");
      });

    // const url2 = "https://urlshortener-clone.herokuapp.com/users/datapoints";
    // const url2 = "http://localhost:4000/users/datapoints";
    // fetch(url2, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": true,
    //   },
    //   body: JSON.stringify({ token: Cookies.get("token") }),
    // })
    //   .then((data) => data.json())
    //   .then((data) => {
    //     console.log("data", data);
    //     setChartData(data);
    //   });
  }

  // const dataLabels = chartData.map(function (itm) {
  //   return itm._id;
  // });
  // const dataPoints = chartData.map(function (itm) {
  //   return itm.count;
  // });

  return (
    <div className="container">
      <main>
        <div className="row g-5 justify-content-center">
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Profile</h4>
            <div className="row">
              <small className="text-muted">First Name</small>
              <h6 className="my-0">{firstName}</h6>
            </div>
            <div className="row">
              <small className="text-muted">Last Name</small>
              <h6 className="my-0">{lastName}</h6>
            </div>
            <div className="row">
              <small className="text-muted">Email ID</small>
              <h6 className="my-0">{emailId}</h6>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
