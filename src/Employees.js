import { useEffect, useState } from "react";
import axios from "axios";
const Employees = () => {
  const [employeeDetails, setDetails] = useState([]);
  useEffect(() => {
    axios.get("employeeDetails.json").then((res) => {
      setDetails(res.data);
    })
  }, []);
  return (
    <div className="home">
      <h1>Employee Details</h1>
      <table id="employee">
        <tr >
          <th>S.No</th>
          <th>Name</th>
          <th>Location</th>
        </tr>
        {
          employeeDetails.map((val,index) => {
            return (

              <tr>
                <td>{index+1}</td>
                <td>{val.name}</td>
                <td>{val.loc}</td>
              </tr>

            )
          })
        }
      </table>

    </div>

  )
}
export default Employees;