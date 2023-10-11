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
          <td>{retrievedFormData.wbc}</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">{retrievedFormData.wbcr}</td>
          <td>4.0 - 10.0</td>
        </tr>
        <tr>
          <td>LYMPH%</td>
          <td>{retrievedFormData.lymphp}</td>
          <td>
           %
          </td>
          <td className="upperCase">{retrievedFormData.lymphpr}</td>
          <td>20.0 - 40.0</td>
        </tr>
        <tr>
          <td>MID%</td>
          <td>{retrievedFormData.midp}</td>
          <td>
          X10<sup>9/I</sup>
          </td>
          <td className="upperCase">{retrievedFormData.midpr}</td>
          <td>1.0 - 15.0</td>
        </tr>
        <tr>
          <td>GRAN%</td>
          <td>{retrievedFormData.granp}</td>
          <td>
          X10<sup>9/I</sup>
          </td>
          <td className="upperCase">{retrievedFormData.granpr}</td>
          <td>50 - 70</td>
        </tr>
        <tr>
          <td>LPH</td>
          <td>{retrievedFormData.lph}</td>
          <td>
            X11.20
          </td>
          <td className="upperCase">{retrievedFormData.lphr}</td>
          <td>0.6 - 4.1</td>
        </tr>
        <tr>
          <td>MID#</td>
          <td>{retrievedFormData.midh}</td>
          <td>
            X10<sup>9/</sup>
          </td>
          <td className="upperCase">{retrievedFormData.midhr}</td>
          <td>0.1 - 1.8</td>
        </tr>
        <tr>
          <td>GRAN#</td>
          <td>{retrievedFormData.granh}</td>
          <td>
          X10<sup>9/</sup>
          </td>
          <td className="upperCase">{retrievedFormData.granhr}</td>
          <td>2.0 - 7.8</td>
        </tr>
        <tr>
          <td>HGB</td>
          <td>{retrievedFormData.hgb}</td>
          <td>
            g/dl
          </td>
          <td className="upperCase">{retrievedFormData.hgbr}</td>
          <td>11.0 - 16.0</td>
        </tr>
        <tr>
          <td>RBC</td>
          <td>{retrievedFormData.rbc}</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">{retrievedFormData.rbcr}</td>
          <td>3.50 - 5.50</td>
        </tr>
        <tr>
          <td>HCT</td>
          <td>{retrievedFormData.htc}</td>
          <td>
            %
          </td>
          <td className="upperCase">{retrievedFormData.htcr}</td>
          <td>36.0 - 48.0</td>
        </tr>
        <tr>
          <td>MCV</td>
          <td>{retrievedFormData.mcv}</td>
          <td>
            fl
          </td>
          <td className="upperCase">{retrievedFormData.mcvr}</td>
          <td>80.0 - 99.0</td>
        </tr>
        <tr>
          <td>MCH</td>
          <td>{retrievedFormData.mch}</td>
          <td>
            Pg
          </td>
          <td className="upperCase">{retrievedFormData.mchr}</td>
          <td>26.0 - 32.0</td>
        </tr>
        <tr>
          <td>MCHC</td>
          <td>{retrievedFormData.mchc}</td>
          <td>
            6g/dl
          </td>
          <td className="upperCase">{retrievedFormData.mchcr}</td>
          <td>32.0 - 36.0</td>
        </tr>
        <tr>
          <td>RDW-CV</td>
          <td>{retrievedFormData.rdwcv}</td>
          <td>
            %
          </td>
          <td className="upperCase">{retrievedFormData.rdwcvr}</td>
          <td>11.5 - 14.5</td>
        </tr>
        <tr>
          <td>RDW-SD</td>
          <td>{retrievedFormData.rdwsd}</td>
          <td>
            FI
          </td>
          <td className="upperCase">{retrievedFormData.rdwsdr}</td>
          <td>35.0 - 56.0</td>
        </tr>
        <tr>
          <td>PLT</td>
          <td>{retrievedFormData.plt}</td>
          <td>
            X10<sup>9/I</sup>
          </td>
          <td className="upperCase">{retrievedFormData.pltr}</td>
          <td>150 - 450</td>
        </tr>
        <tr>
          <td>MPV</td>
          <td>{retrievedFormData.mpv}</td>
          <td>
            FI
          </td>
          <td className="upperCase">{retrievedFormData.mpvr}</td>
          <td>6.0 - 14.0</td>
        </tr>
        <tr>
          <td>PDW</td>
          <td>{retrievedFormData.pdw}</td>
          <td>
            %
          </td>
          <td className="upperCase">{retrievedFormData.pdwr}</td>
          <td>8.0 - 18.0</td>
        </tr>
        <tr>
          <td>PCT</td>
          <td>{retrievedFormData.pct}</td>
          <td>
           %
          </td>
          <td className="upperCase">{retrievedFormData.pctr}</td>
          <td>0.11 - 0.28</td>
        </tr>
      </table>
    </div>
  );
};

export default CbcReport;
