class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            let nl = numbers[left];
            let nr = numbers[right];

            if (nl + nr > target) {
                right--;
            } else if (nl + nr < target) {
                left++;
            }else{
                return [left+1, right+1]
            }
        }
        return [];
    }
}
