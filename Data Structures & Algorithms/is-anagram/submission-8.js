class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        for(let char of s){
            if(t.indexOf(char) < 0){
                return false;
            }
            t = t.replace(char, "");
        }
        return true;
    }
}
