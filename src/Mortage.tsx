import calculatorempty from './assets/illustration-empty.svg';
import calculator from './assets/icon-calculator.svg';

const Mortage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-5 justify-center">
      <div className="rounded-2xl w-full max-w-[1000px] shadow-lg bg-white flex flex-row">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-start m-9">
          <div className="flex justify-between mb-2">
            <h1 className="text-2xl">Mortgage Calculator</h1>
            <p className="cursor-pointer mt-1 underline">Clear All</p>
          </div>
          
          {/* Form for Mortgage Details */}
          <form className="mt-2">
            {/* Mortgage Amount */}
            <div className="mb-4">
              <label htmlFor="mortgageAmount" className="block mb-5">Mortgage Amount:</label>
              <div className="flex items-center border rounded">
                <span className="bg-smoke p-2 w-[50px] flex justify-center items-center">£</span>
                <input 
                  type="number" 
                  id="mortgageAmount" 
                  name="mortgageAmount" 
                  className="border border-smoke p-2 w-full focus:outline-none" 
                  placeholder="Enter amount" 
                />
              </div>
            </div>

            {/* Mortgage Term and Interest Rate Side by Side */}
            <div className="flex mb-4">
              {/* Mortgage Term */}
              <div className="flex-1 mr-2">
                <label htmlFor="mortgageTerm" className="block mb-3">Mortgage Term:</label>
                <div className="flex items-center border rounded">
                  <input
                    type="number"
                    id="mortgageTerm"
                    name="mortgageTerm"
                    className="border border-smoke p-2 w-full focus:outline-none"
                    placeholder="Enter years"
                  />
                  <span className="bg-smoke p-2 w-[100px] flex justify-center items-center">years</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="flex-1 ml-2">
                <label htmlFor="interestRate" className="block mb-3">Interest Rate:</label>
                <div className="flex items-center border rounded">
                  <input
                    type="number"
                    id="interestRate"
                    name="interestRate"
                    className="border border-smoke p-2 w-full focus:outline-none"
                    placeholder="Enter rate"
                  />
                  <span className="bg-smoke p-2 w-[50px] flex justify-center items-center">%</span>
                </div>
              </div>
            </div>

            {/* Mortgage Type in Separate Text Boxes */}
            <div className="mb-4">
              <label className="block mb-1">Mortgage Type:</label>
              <div className="flex flex-col">
                <div className="border border-smoke hover:border-lime active:bg-lime-100 rounded mb-2">
                  <label className="flex items-center p-2">
                    <input type="radio" name="mortgageType" value="repayment" />
                    <span className="ml-2">Repayment</span>
                  </label>
                </div>
                <div className="border border-smoke hover:border-lime rounded">
                  <label className="flex items-center p-2">
                    <input type="radio" name="mortgageType" value="interest-only" />
                    <span className="ml-2">Interest Only</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <button type="submit" className="rounded-3xl flex flex-row justify-center items-center bg-lime w-[250px] text-white "><img src={calculator} /><b className="text-black m-2">Calculate Repayments</b></button>
          </form>
        </div>
        
        {/* Right Side */}
        <div className="flex-1 rounded-tr-2xl rounded-br-2xl rounded-tl-1xl rounded-bl-[80px] bg-darkblue p-5">
          <div className="flex flex-col justify-center items-center h-full">
            <img src={calculatorempty} alt='calculator' className="mx-auto" />
            <h1 className='text-white text-2xl'>Results shown here</h1>
            <p className='text-gray-400 mt-3 text-center'>
              complete the form and click "calculate repayments" to <br />
              <span className="block text-center">see what your monthly repayments would be.</span>
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Mortage;
