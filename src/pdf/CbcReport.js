import React from "react";

const CbcReport = () => {

  const data = localStorage.getItem('data');
  const retrievedFormData = JSON.parse(data);

  return (
    <div className="wrapper">
      <table>
        <tr>
          <th colspan="2">PT. Name {retrievedFormData.name}</th>
          <th>{retrievedFormData.date}</th>
        </tr>
        <tr>
          <td>Age :- {retrievedFormData.age}</td>
          <td>Sex :- {retrievedFormData.sex}</td>
          <td>Akashdeep</td>
        </tr>
        <tr>
          <td colspan="3">REF By:- {retrievedFormData.ref}</td>
        </tr>
      </table>
      <table>
        <tr>
          <th>Parameter</th>
          <th colspan="2">Result</th>
          <th>Low/High</th>
          <th>Ref. Range</th>
        </tr>
        <tr>
          <td>WBC</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">N</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>LYMPH%</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>MID%</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>GRAN%</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>LPH</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>MID#</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>GRAN#</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>HGB</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>RBC</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>HCT</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>MCV</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>MCH</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>MCHC</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>RDW-CV</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>RDW-SD</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>PLT</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>MPV</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>PDW</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>PCT</td>
          <td>5.9</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">n</td>
          <td>4.0 - 10.0</td>
        </tr>
      </table>
    </div>
  );
};

export default CbcReport;
