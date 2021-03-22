// Differences between cr and cy tokens
	 
	 // From File 1, CErc20Delegator.sol
	 // present in crTokens but not cyTokens
	 * @notice Sender repays a borrow belonging to borrower		
     * @param borrower the account with the debt being payed off		
     * @param repayAmount The amount to repay		
     * @return uint 0=success, otherwise a failure (see ErrorReporter.sol for details)		
     */		
    function repayBorrowBehalf(address borrower, uint repayAmount) external returns (uint) {		
        borrower; repayAmount; // Shh		
        delegateAndReturn();		
    }		

	// From file 2, CTokenInterfaces.sol
	// present in crTokens but not cyTokens
	   function repayBorrowBehalf(address borrower, uint repayAmount) external returns (uint);

	// File 3, ComptrollerInterface.sol files are identical
	
	// File 4, InterestRateModel.sol is identical as well