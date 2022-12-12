// // Function to sort the array of 0s, 1s and 2s
// let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
// let n = arr.length;

// function sortArr(arr, n) {
//   let i,
//     cnt0 = 0,
//     cnt1 = 0,
//     cnt2 = 0;
//   //Switch case method

//   // switch (arr[i]) {
//   //   case 0:
//   //     cnt0++;
//   //     break;
//   //   case 1:
//   //     cnt1++;
//   //     break;
//   //   case 2:
//   //     cnt2++;
//   //     break;
//   // }
//   for (i = 0; i < n; i++) {
//     if (arr[i] == 0) {
//       cnt0++;
//     } else if (arr[i] == 1) {
//       cnt1++;
//     } else arr[i] == 2;
//     {
//       cnt2++;
//     }
//   }

//   // Update the array
//   i = 0;

//   // Store all the 0s in the beginning
//   while (cnt0 > 0) {
//     arr[i++] = 0;
//     cnt0--;
//   }

//   // Then all the 1s
//   while (cnt1 > 0) {
//     arr[i++] = 1;
//     cnt1--;
//   }

//   // Finally all the 2s
//   while (cnt2 > 0) {
//     arr[i++] = 2;
//     cnt2--;
//   }

//   printArr(arr, n);
// }

// // Function calling
// sortArr(arr, n);

// // Print the sorted array
// function printArr() {
//   for (let i = 0; i < n; i++) console.log(arr[i]);
// }

/**
 * Space Complexity - O(1) (As we are not using any extra spaces which is dependent on N)
 * Time Complexity - O(N) (As we are traversing through the entire array once)
 */

function sort0and1(arr, size)
{
    let type0 = 0;
    let type1 = size - 1;
     
    while (type0 < type1)
    {
        if (arr[type0] == 1)
        {
             if (arr[type1] != 1)
            {  
              // Swap
              arr[type1] = arr[type1] + arr[type0];
              arr[type0] = arr[type1] - arr[type0];
              arr[type1] = arr[type1] - arr[type0];
             }
            type1--;
        }
        else
            type0++;
    }
}
 
// Driver Code
let arr = [ 0, 1, 0, 1, 1, 1 ];
let i, arr_size = arr.length;
 
sort0and1(arr, arr_size);
 
console.log("Array after sorting is ");
for(i = 0; i < arr_size; i++)
    console.log(arr[i] + " ");