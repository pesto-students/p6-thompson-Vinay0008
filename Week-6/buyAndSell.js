const bestTimeToBuy = (arr) => {
  
  let minBuyPrice = arr[0]
  let profit
  let maxProfit = 0
  
  for(i=0; i<arr.length; i++) {
    minBuyPrice = Math.min(minBuyPrice, arr[i])
    profit = arr[i] - minBuyPrice
    maxProfit = Math.max(profit, maxProfit)
  }
  
  return maxProfit
  
}

console.log(bestTimeToBuy([7,1,5,3,6,4]))
console.log(bestTimeToBuy([1,2,3]))

/**
 * Space Complexity - O(1) (As we didn't use any extra spaces which is dependent on N)
 * Time Complexity - O(N) (As we are iterating once through the entire loop once)
 */

