import React from "react";

function Employee(props) {
    return (
        <tr>
            <th scope="row"></th>
            <td>{props.Picture}</td>
            <td>{props.First}</td>
            <td>{props.Last}</td>
            <td>{props.Phone}</td>
            <td>{props.Email}</td>
        </tr>



    );
}

export default Employee;