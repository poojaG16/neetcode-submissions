class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let set = {}
        let res = [];
        for(let s of strs){
            let str = s.split('').sort().join('');
            
            if(!set[str]){
                set[str] = [s];
            }else{
                set[str] = [...set[str], s]
            }
        }
        for(let i in set){
            res = [...res, set[i]]
        }
        return res;
    }
}
