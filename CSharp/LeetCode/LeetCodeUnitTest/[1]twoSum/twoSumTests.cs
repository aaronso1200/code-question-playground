using System;
using System.Security.Claims;
using LeetCode._1_twoSum;
using NUnit.Framework;

namespace LeetCodeUnitTest
{
    [TestFixture]
    public class TwoSumTest
    {
        
        [Test]
        [TestCase(new []{1,2,3,4,5},3, new []{0,1})]
        [TestCase(new []{3,2,4},6, new []{1,2})]
        [TestCase(new []{1,4,7,1,1,1,1,1},11, new []{1,2})]
        public void Test1(int[] inputNums, int target, int[] expectResult)
        {
            TwoSumSolution twosum = new TwoSumSolution();
            int[] result = twosum.TwoSum(inputNums,target);
            CollectionAssert.AreEquivalent(expectResult,result);
        }
    }
}