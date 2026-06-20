class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sorted_s = ''.join(sorted(s))
        sorted_t = ''.join(sorted(t))
        s_dict = {}
        t_dict = {}
        for ch in sorted_s:
            if ch in s_dict:
                s_dict[ch] += 1
            else:
                s_dict[ch] = 1
        for ch in sorted_t:
            if ch in t_dict:
                t_dict[ch] += 1
            else:
                t_dict[ch] = 1

        cnt = 0
        if len(s_dict) == len(t_dict):
            for ch in s_dict:
                if ch in t_dict:
                    if s_dict[ch] == t_dict[ch]:
                        cnt +=1
                else:
                    return False
        else:
            return False
        if cnt != len(t_dict):
            return False
        else:
            return True


         