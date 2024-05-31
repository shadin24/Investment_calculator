import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const result = calculateInvestmentResults(input);
  
  // Assuming the initial investment is provided in the input or is the first year investment
  const initialInvestment = input.initialInvestment || result[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((yearData, index) => {
          // Calculate total interest up to the current year
          const totalInterest = yearData.valueEndOfYear - initialInvestment - (yearData.annualInvestment * (index + 1));
          
          // Calculate the total amount invested up to the current year
          const totalAmountInvested = initialInvestment + (yearData.annualInvestment * (index + 1));

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
