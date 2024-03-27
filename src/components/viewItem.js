import React from "react";
import "./view.css"; // Import the CSS file for styling

const View = (props) => {
  const item = props.obj;

  return (
    <div className="view-container">
      <h2>Recipe Details</h2>
      <table>
        <tbody>
          
          <tr>
            <td>Calories</td>
            <td>{item.calories}</td>
          </tr>
          <tr>
            <td>Ingredients</td>
            <td>
              <ul>
                {item.ingredientLines.map((res, index) => (
                  <li key={index}>{res}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>Nutrients Inside this dish</td>
            <td>
              <ul>
               
                <li>
                  {`${item.totalNutrients.FASAT.label} = 
                  ${item.totalNutrients.FASAT.quantity}
                  ${item.totalNutrients.FASAT.unit}`}
                </li>
                <li>
                  {`${item.totalNutrients.FAT.label} = 
                  ${item.totalNutrients.FAT.quantity}
                  ${item.totalNutrients.FAT.unit}`}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default View;
