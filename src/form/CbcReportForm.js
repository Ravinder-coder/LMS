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
    localStorage.setItem('data', formDataString);

      navigate("/report");
  };


  return (
    <div className="flex justify-center">
      <div className="container w-3/5 mt-8 p-6">
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
              id="name"
              name="name"
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
              id="date"
              name="date"
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
              id="age"
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
              id="sex"
              name="sex"
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium">
              Ref
            </label>
            <input
              type="text"
              id="ref"
              name="ref"
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                WBC
              </label>
              <input
                type="text"
                id="input1"
                name="WBC"
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
                id="input2"
                name="WBCR"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label  className="block text-gray-600 font-medium">
                WBC
              </label>
              <input
                type="text"
                id="input1"
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
                id="input2"
                name="wbcr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
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
                id="input2"
                name="LYMPHpr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="MIDp"
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
                id="input2"
                name="MIDpr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="GRANp"
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
                id="input2"
                name="GRANpr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="LPH"
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
                id="input2"
                name="LPHr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="MIDh"
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
                id="input2"
                name="MIDhr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="GRANh"
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
                id="input2"
                name="GRANhr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="HGB"
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
                id="input2"
                name="HGBr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="RBC"
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
                id="input2"
                name="RBCr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="HCT"
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
                id="input2"
                name="HCTr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="MCV"
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
                id="input2"
                name="MCVr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="MCH"
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
                id="input2"
                name="MCHr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="MCHC"
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
                id="input2"
                name="MCHCr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="RDW-CV"
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
                id="input2"
                name="RDW-CVr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="RDW-SD"
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
                id="input2"
                name="RDW-SDr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="PLT"
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
                id="input2"
                name="PLTr"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="MPV"
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
                id="input2"
                name="input2"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="PDW"
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
                id="input2"
                name="input2"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
                id="input1"
                name="PCT"
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
                id="input2"
                name="input2"
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                required
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
