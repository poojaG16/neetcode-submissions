class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sorted_s = ''.join(sorted(s))
        sorted_t = ''.join(sorted(t))
        s_dict = { ch: s.count(ch) for ch in s}
        t_dict = { ch: t.count(ch) for ch in t}

        cnt = 0
        if len(s_dict) == len(t_dict):
            for ch in s_dict:
                if ch in t_dict:
                    if s_dict[ch] == t_dict[ch]:
                        cnt +=1
        else:
            return False
            
        if cnt != len(t_dict):
            return False
        else:
            return True


         