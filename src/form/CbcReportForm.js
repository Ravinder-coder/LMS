import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CbcReportForm =() =>{
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formDataString = JSON.stringify(formData);
    console.log(formDataString);
    localStorage.removeItem('data');
    localStorage.setItem('data', formDataString);

    navigate("/report");
  };


  return (
    <div className="flex justify-center">
      <div className="container w-full md:w-3/5 md:mt-8 p-6">
        <form
          className="bg-white p-8 rounded shadow-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold mb-4">CBC Report</h2>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label  className="block text-gray-600 font-medium">
              Age
            </label>
            <input
              type="number"
              name="age"
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium">
              sex
            </label>
            <input
              type="text"
              name="sex"
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label  className="block text-gray-600 font-medium">
              Date
            </label>
            <input
              type="date"
              name="date"
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium">
              Ref
            </label>
            <input
              type="text"
              name="ref"
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                WBC
              </label>
              <input
                type="text"
                name="wbc"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="wbcr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                LYMPH%
              </label>
              <input
                type="text"
                name="lymphp"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="lymphpr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                MID%
              </label>
              <input
                type="text"
                name="midp"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="midpr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                GRAN%
              </label>
              <input
                type="text"
                name="granp"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="granpr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                LPH
              </label>
              <input
                type="text"
                name="lph"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="lphr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                MID#
              </label>
              <input
                type="text"
                name="midh"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="midhr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                GRAN#
              </label>
              <input
                type="text"
                name="granh"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="granhr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                HGB
              </label>
              <input
                type="text"
                name="hgb"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="hgbr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                RBC
              </label>
              <input
                type="text"
                name="rbc"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="rbcr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                HCT
              </label>
              <input
                type="text"
                name="hct"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="hctr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                MCV
              </label>
              <input
                type="text"
                name="mcv"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="mcvr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                MCH
              </label>
              <input
                type="text"
                name="mch"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="mchr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                MCHC
              </label>
              <input
                type="text"
                name="mchc"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="mchcr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                RDW-CV
              </label>
              <input
                type="text"
                name="rdwcv"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="rdwcvr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                RDW-SD
              </label>
              <input
                type="text"
                name="rdwsd"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="rdwsdr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                PLT
              </label>
              <input
                type="text"
                name="plt"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="pltr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                MPV
              </label>
              <input
                type="text"
                name="mpv"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="mpvr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                PWD
              </label>
              <input
                type="text"
                name="pdw"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="pdwr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                PCT
              </label>
              <input
                type="text"
                name="pct"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label  className="block text-gray-600 font-medium">
                Result
              </label>
              <input
                type="text"
                name="pctr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="text-center mt-5">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Print
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CbcReportForm;
