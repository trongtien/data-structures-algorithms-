/*
	1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
	-> F(n) = F(n-1) + F(n-2)
*/

// O(2 ^ N)
function fibonacci(num){
	if(num <=1) return 1

	return fibonacci(num-1) + fibonacci(num -2) 
}

// O(2N)
function fibonacciMemoize(num, memo) {
	memo = memo || {}

	if(memo[num]) return memo[num]
	if(num <= 1) return 1

	return memo[num] = fibonacciMemoize(num-1, memo) +  fibonacciMemoize(num-2, memo)
}
