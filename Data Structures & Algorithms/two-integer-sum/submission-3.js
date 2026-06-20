class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        let n;
        for (n = 0; n < nums.length; n++) {
            let diff = target - nums[n];
            if (map.has(diff)) {
                return [map.get(diff), n];
            }
            map.set(nums[n], n);
        }
    }
}
