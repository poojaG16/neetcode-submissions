class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
         orgLen = len(nums)
         numSet = set(nums)
         setLen = len(numSet)
         if orgLen != setLen:
            return True
         else:
            return False

            
