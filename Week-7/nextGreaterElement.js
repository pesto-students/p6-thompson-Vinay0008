function nextgreaterelement(arr, n)
      {
        var next, i, j;
        for (i = 0; i < n; i++)
        {
          next = -1;
          for (j = i + 1; j < n; j++)
          {
            if (arr[i] < arr[j])
            {
              next = arr[j];
              break;
            }
          }
          console.log(arr[i] + " -- " + next);
        }
      }
 
      
      var arr = [6, 8, 0, 1,3];
      var n = arr.length;
      nextgreaterelement(arr, n);

    //   Time Complexity: O(N2) 
    //   Auxiliary Space: O(1)