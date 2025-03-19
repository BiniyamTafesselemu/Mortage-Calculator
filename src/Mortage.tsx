// Import necessary libraries and assets
import { connect } from 'react-redux'; // Import connect function
import { ShowResults, setMortgageType } from './action/Action'; // Import action creators
import calculatorempty from './assets/illustration-empty.svg';
import calculator from './assets/icon-calculator.svg';
import { z, ZodType } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Define the properties for the Mortgage component
interface MortgageProps {
    showResults: boolean;
    ShowResults: () => void;
    setMortgageType: (type: string) => void;
}

// Define the form data structure
type FormData = {
    mortgageAmount: number;
    mortgageTerm: number;
    interestRate: number;
    mortgageType: string;
};

// Zod schema for form validation
const schema: ZodType<FormData> = z.object({
    mortgageAmount: z.preprocess(
        (value) => (value === "" ? undefined : Number(value)),
        z.number().min(1, { message: "This field is required" })
    ),
    mortgageTerm: z.preprocess(
        (value) => (value === "" ? undefined : Number(value)),
        z.number().min(1, { message: "This field is required" })
    ),
    interestRate: z.preprocess(
        (value) => (value === "" ? undefined : Number(value)),
        z.number().min(1, { message: "This field is required" })
    ),
    mortgageType: z.string().min(1, { message: "This field is required" }),
});

// Mortgage component definition
const Mortgage = ({ showResults, ShowResults, setMortgageType }: MortgageProps) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        ShowResults();
    };

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
                    <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
                        {/* Mortgage Amount */}
                        <div className="mb-4">
                            <label htmlFor="mortgageAmount" className="block mb-5">Mortgage Amount:</label>
                            <div className={`flex items-center border rounded ${errors.mortgageAmount ? 'border-red-500' : 'border-lightblue'}`}>
                                <span className={`p-2 w-[50px] flex justify-center items-center ${errors.mortgageAmount ? 'bg-red-500' : 'bg-smoke'}`}>£</span>
                                <input
                                    type="number"
                                    id="mortgageAmount"
                                    {...register("mortgageAmount")}
                                    onInput={(e) => {
                                        const target = e.target as HTMLInputElement;
                                        if (Number(target.value) <= 0) target.value = "";
                                    }}
                                    className="p-2 w-full focus:outline-none"
                                    placeholder="Enter amount"
                                />
                            </div>
                            {errors.mortgageAmount && (
                                <p className="text-red-500 text-sm mt-1">{errors.mortgageAmount.message}</p>
                            )}
                        </div>
                        {/* Mortgage Term and Interest Rate Side by Side */}
                        <div className="flex mb-4">
                            {/* Mortgage Term */}
                            <div className="flex-1 mr-2">
                                <label htmlFor="mortgageTerm" className="block mb-3">Mortgage Term:</label>
                                <div className={`flex items-center border rounded ${errors.mortgageTerm ? 'border-red-500' : 'border-lightblue'}`}>
                                    <input
                                        type="number"
                                        id="mortgageTerm"
                                        {...register("mortgageTerm")}
                                        onInput={(e) => {
                                            const target = e.target as HTMLInputElement;
                                            if (Number(target.value) <= 0) target.value = "";
                                        }}
                                        className="p-2 w-full focus:outline-none"
                                        placeholder="Enter years"
                                    />
                                    <span className={`p-2 w-[100px] flex justify-center items-center ${errors.mortgageTerm ? 'bg-red-500' : 'bg-smoke'}`}>years</span>
                                </div>
                                {errors.mortgageTerm && (
                                    <p className="text-red-500 text-sm mt-1">{errors.mortgageTerm.message}</p>
                                )}
                            </div>
                            {/* Interest Rate */}
                            <div className="flex-1 ml-2">
                                <label htmlFor="interestRate" className="block mb-3">Interest Rate:</label>
                                <div className={`flex items-center border rounded ${errors.interestRate ? 'border-red-500' : 'border-lightblue'}`}>
                                    <input
                                        type="number"
                                        id="interestRate"
                                        {...register("interestRate")}
                                        onInput={(e) => {
                                            const target = e.target as HTMLInputElement;
                                            if (Number(target.value) <= 0) target.value = "";
                                        }}
                                        className="p-2 w-full focus:outline-none"
                                        placeholder="Enter rate"
                                    />
                                    <span className={`p-2 w-[50px] flex justify-center items-center ${errors.interestRate ? 'bg-red-500' : 'bg-smoke'}`}>%</span>
                                </div>
                                {errors.interestRate && (
                                    <p className="text-red-500 text-sm mt-1">{errors.interestRate.message}</p>
                                )}
                            </div>
                        </div>
                        {/* Mortgage Type in Separate Text Boxes */}
                        <div className="mb-4">
                            <label className="block mb-1">Mortgage Type:</label>
                            <div className="flex flex-col">
                                <Controller
                                    name="mortgageType"
                                    control={control}
                                    render={({ field }) => (
                                        <>
                                            <div
                                                className={`border border-smoke hover:border-lime active:bg-lime-100 rounded mb-2 ${field.value === 'repayment' ? 'bg-lime-100' : ''}`}
                                            >
                                                <label className="flex items-center p-2">
                                                    <input
                                                        type="radio"
                                                        {...field}
                                                        value="repayment"
                                                        onChange={(e) => {
                                                            field.onChange(e.target.value);
                                                            setMortgageType('repayment');
                                                        }}
                                                    />
                                                    <span className="ml-2">Repayment</span>
                                                </label>
                                            </div>
                                            <div
                                                className={`border border-smoke hover:border-lime rounded ${field.value === 'interest-only' ? 'bg-lime-100' : ''}`}
                                            >
                                                <label className="flex items-center p-2">
                                                    <input
                                                        type="radio"
                                                        {...field}
                                                        value="interest-only"
                                                        onChange={(e) => {
                                                            field.onChange(e.target.value);
                                                            setMortgageType('interest-only');
                                                        }}
                                                    />
                                                    <span className="ml-2">Interest Only</span>
                                                </label>
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            {errors.mortgageType && (
                                <p className="text-red-500 text-sm mt-1">{errors.mortgageType.message}</p>
                            )}
                        </div>
                        {/* Calculate Button */}
                        <button
                            type="submit"
                            className="rounded-3xl flex flex-row justify-center items-center bg-lime w-[250px] text-white mt-[30px]"
                        >
                            <img src={calculator} alt="calculator" />
                            <b className="text-black m-2">Calculate Repayments</b>
                        </button>
                    </form>
                </div>
                {/* Right Side */}
                <div className="flex-1 rounded-tr-2xl rounded-br-2xl rounded-tl-1xl rounded-bl-[80px] bg-darkblue p-5">
                    {showResults ? (
                        <div className="flex flex-col justify-center items-center h-full">
                            <img src={calculatorempty} alt='calculator' className="mx-auto" />
                            <h1 className='text-white text-2xl'>Results shown here</h1>
                            <p className='text-gray-400 mt-3 text-center'>
                                Complete the form and click "calculate repayments" to <br />
                                <span className="block text-center">see what your monthly repayments would be.</span>
                            </p>
                        </div>
                    ) : (
                        <div className='m-5'>
                            <h5 className='text-white text-2xl'>Your results</h5>
                            <p className='text-gray-400 mt-4'>Your results are shown below based on the information<br />
                                you provided. To adjust the results, edit the form and<br />
                                click "calculate repayments" again.</p>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='bg-black w-full mt-[30px] border-t-lime border-t-3 rounded-[5px] p-5 mb-[80px]'>
                                    <h1 className='text-gray-400'>Your monthly repayments</h1>
                                    <h1 className='text-4xl text-lime mt-5'>£ 1,786.86</h1>
                                    <hr className='mt-[30px] text-gray-600'></hr>
                                    <p className='mt-5 text-gray-400'>Total you'll repay over the term</p>
                                    <h1 className='text-2xl text-white'>£ 1,786.86</h1>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Map state and dispatch to props
interface RootState {
    showResults: {
        showResults: boolean;
        mortgageType: string | null;
    };
}

const mapStateToProps = (state: RootState) => ({
    showResults: state.showResults.showResults,
    mortgageType: state.showResults.mortgageType,
});

const mapDispatchToProps = {
    ShowResults,
    setMortgageType,
};

// Connect the component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Mortgage);