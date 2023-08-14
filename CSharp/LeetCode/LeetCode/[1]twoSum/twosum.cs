using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Security;

namespace LeetCode._1_twoSum
{
    public class TwoSumSolution {
        public int[] TwoSum(int[] nums, int target)
        {
            List<int> result = new List<int> {};
            var storedSum = new Dictionary<int,int>();
            for (int i = 0 ;i<nums.Length; i++)
            {
                int num = nums[i];
                int substractNum = target - num;
                if (storedSum.ContainsKey(substractNum))
                {
                    result.Add(storedSum[substractNum]);
                    result.Add(i);
                    return result.ToArray();
                }

                storedSum.TryAdd(num,i);
            }

            return result.ToArray();
        }
    }
}