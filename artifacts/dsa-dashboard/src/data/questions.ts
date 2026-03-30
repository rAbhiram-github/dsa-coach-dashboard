export type Category = "Arrays" | "Strings" | "Linked List" | "Stack & Queue" | "Trees" | "Graphs" | "Dynamic Programming";
export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Question {
  id: number;
  title: string;
  category: Category;
  difficulty: Difficulty;
  problem: {
    explanation: string;
    example: { input: string; output: string };
    intuition: string;
  };
  algorithm: string[];
  code: {
    python: string;
    java: string;
  };
  complexity: {
    time: string;
    timeExplanation: string;
    space: string;
    spaceExplanation: string;
  };
}

export const questions: Question[] = [
  // ARRAYS
  {
    id: 1,
    title: "Two Sum",
    category: "Arrays",
    difficulty: "Easy",
    problem: {
      explanation: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      example: { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
      intuition: "Instead of using a nested loop, we can use a hash map to remember the values we have seen so far and their indices. For each number, we check if its complement (target - current number) exists in the map."
    },
    algorithm: [
      "Initialize an empty hash map to store elements and their indices.",
      "Iterate through the array.",
      "For each element, calculate the complement (target - element).",
      "If the complement is in the map, return the current index and the complement's index.",
      "Otherwise, add the current element and its index to the map."
    ],
    code: {
      python: `def twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []`,
      java: `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement)) {\n                return new int[] { map.get(complement), i };\n            }\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}`
    },
    complexity: {
      time: "O(n)", timeExplanation: "We traverse the list containing n elements exactly once.",
      space: "O(n)", spaceExplanation: "The hash map stores at most n elements."
    }
  },
  {
    id: 2,
    title: "Best Time to Buy and Sell Stock",
    category: "Arrays",
    difficulty: "Easy",
    problem: {
      explanation: "You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
      example: { input: "prices = [7,1,5,3,6,4]", output: "5 (Buy at 1, sell at 6)" },
      intuition: "To get the maximum profit, we need to buy at the lowest possible price and sell at the highest possible price after the buy day. We can keep track of the minimum price seen so far and the maximum profit we can get."
    },
    algorithm: [
      "Initialize min_price to infinity and max_profit to 0.",
      "Iterate through each price in the array.",
      "If the current price is less than min_price, update min_price.",
      "Otherwise, calculate the profit (current price - min_price).",
      "If the profit is greater than max_profit, update max_profit."
    ],
    code: {
      python: `def maxProfit(prices):\n    min_price = float('inf')\n    max_profit = 0\n    for price in prices:\n        if price < min_price:\n            min_price = price\n        elif price - min_price > max_profit:\n            max_profit = price - min_price\n    return max_profit`,
      java: `class Solution {\n    public int maxProfit(int[] prices) {\n        int minPrice = Integer.MAX_VALUE;\n        int maxProfit = 0;\n        for (int price : prices) {\n            if (price < minPrice) {\n                minPrice = price;\n            } else if (price - minPrice > maxProfit) {\n                maxProfit = price - minPrice;\n            }\n        }\n        return maxProfit;\n    }\n}`
    },
    complexity: {
      time: "O(n)", timeExplanation: "Single pass through the array.",
      space: "O(1)", spaceExplanation: "Only two variables are used."
    }
  },
  {
    id: 3,
    title: "Contains Duplicate",
    category: "Arrays",
    difficulty: "Easy",
    problem: {
      explanation: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      example: { input: "nums = [1,2,3,1]", output: "true" },
      intuition: "A hash set stores unique elements. If we try to add an element that is already in the set, we know a duplicate exists."
    },
    algorithm: [
      "Initialize an empty hash set.",
      "Iterate over the elements in the array.",
      "If the element is already in the set, return true.",
      "Otherwise, add the element to the set.",
      "If the loop finishes without finding a duplicate, return false."
    ],
    code: {
      python: `def containsDuplicate(nums):\n    seen = set()\n    for num in nums:\n        if num in seen:\n            return True\n        seen.add(num)\n    return False`,
      java: `class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        Set<Integer> seen = new HashSet<>();\n        for (int num : nums) {\n            if (!seen.add(num)) {\n                return true;\n            }\n        }\n        return false;\n    }\n}`
    },
    complexity: {
      time: "O(n)", timeExplanation: "We visit each element at most once. Hash set lookups are O(1) on average.",
      space: "O(n)", spaceExplanation: "The space is proportional to the number of unique elements."
    }
  },
  {
    id: 4,
    title: "Maximum Subarray",
    category: "Arrays",
    difficulty: "Medium",
    problem: {
      explanation: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
      example: { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6 (Subarray [4,-1,2,1])" },
      intuition: "Kadane's Algorithm: A negative prefix sum will only decrease the sum of a future subarray. If our running sum becomes less than 0, we should reset it to 0 and start a new subarray."
    },
    algorithm: [
      "Initialize current_sum to 0 and max_sum to negative infinity.",
      "Iterate through the array.",
      "Add the current element to current_sum.",
      "Update max_sum if current_sum is greater than max_sum.",
      "If current_sum drops below 0, reset it to 0."
    ],
    code: {
      python: `def maxSubArray(nums):\n    max_sum = float('-inf')\n    current_sum = 0\n    for num in nums:\n        current_sum += num\n        if current_sum > max_sum:\n            max_sum = current_sum\n        if current_sum < 0:\n            current_sum = 0\n    return max_sum`,
      java: `class Solution {\n    public int maxSubArray(int[] nums) {\n        int maxSum = Integer.MIN_VALUE;\n        int currentSum = 0;\n        for (int num : nums) {\n            currentSum += num;\n            if (currentSum > maxSum) {\n                maxSum = currentSum;\n            }\n            if (currentSum < 0) {\n                currentSum = 0;\n            }\n        }\n        return maxSum;\n    }\n}`
    },
    complexity: {
      time: "O(n)", timeExplanation: "We iterate through the array exactly once.",
      space: "O(1)", spaceExplanation: "No extra space required."
    }
  },
  {
    id: 5,
    title: "Merge Intervals",
    category: "Arrays",
    difficulty: "Medium",
    problem: {
      explanation: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.",
      example: { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" },
      intuition: "If we sort the intervals by their start time, any overlapping intervals will be adjacent. We can build our merged list by checking the last added interval against the current one."
    },
    algorithm: [
      "Sort the intervals based on their start times.",
      "Initialize a list 'merged' with the first interval.",
      "Iterate through the remaining intervals.",
      "If the current interval's start is <= the last merged interval's end, merge them by updating the end time.",
      "Otherwise, add the current interval to 'merged'."
    ],
    code: {
      python: `def merge(intervals):\n    if not intervals: return []\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for i in range(1, len(intervals)):\n        last_end = merged[-1][1]\n        if intervals[i][0] <= last_end:\n            merged[-1][1] = max(last_end, intervals[i][1])\n        else:\n            merged.append(intervals[i])\n    return merged`,
      java: `class Solution {\n    public int[][] merge(int[][] intervals) {\n        if (intervals.length <= 1) return intervals;\n        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n        List<int[]> merged = new ArrayList<>();\n        int[] current = intervals[0];\n        merged.add(current);\n        for (int[] interval : intervals) {\n            if (interval[0] <= current[1]) {\n                current[1] = Math.max(current[1], interval[1]);\n            } else {\n                current = interval;\n                merged.add(current);\n            }\n        }\n        return merged.toArray(new int[merged.size()][]);\n    }\n}`
    },
    complexity: {
      time: "O(n log n)", timeExplanation: "Sorting takes O(n log n) time. The linear scan takes O(n).",
      space: "O(n)", spaceExplanation: "The result list requires space, and sorting algorithms generally take O(log n) to O(n) space."
    }
  },
  {
    id: 6,
    title: "Product of Array Except Self",
    category: "Arrays",
    difficulty: "Medium",
    problem: {
      explanation: "Return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Must be done in O(n) time and without division.",
      example: { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
      intuition: "The product of everything except nums[i] is the product of everything to the left of i, multiplied by everything to the right of i."
    },
    algorithm: [
      "Initialize the answer array with 1s.",
      "Do a left-to-right pass, calculating the running product of elements to the left, storing it in the answer array.",
      "Do a right-to-left pass, keeping a running product of elements to the right.",
      "Multiply the right running product with the value already in the answer array."
    ],
    code: {
      python: `def productExceptSelf(nums):\n    n = len(nums)\n    res = [1] * n\n    left = 1\n    for i in range(n):\n        res[i] = left\n        left *= nums[i]\n    right = 1\n    for i in range(n-1, -1, -1):\n        res[i] *= right\n        right *= nums[i]\n    return res`,
      java: `class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        int n = nums.length;\n        int[] res = new int[n];\n        int left = 1;\n        for (int i = 0; i < n; i++) {\n            res[i] = left;\n            left *= nums[i];\n        }\n        int right = 1;\n        for (int i = n - 1; i >= 0; i--) {\n            res[i] *= right;\n            right *= nums[i];\n        }\n        return res;\n    }\n}`
    },
    complexity: {
      time: "O(n)", timeExplanation: "Two passes through the array.",
      space: "O(1)", spaceExplanation: "Excluding the output array, we only use two variables for the running products."
    }
  },
  {
    id: 7,
    title: "Rotate Array",
    category: "Arrays",
    difficulty: "Medium",
    problem: {
      explanation: "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
      example: { input: "nums = [1,2,3,4,5,6,7], k = 3", output: "[5,6,7,1,2,3,4]" },
      intuition: "If we reverse the entire array, then reverse the first k elements, and finally reverse the remaining n-k elements, we get the correctly rotated array in-place."
    },
    algorithm: [
      "Compute k = k % n (in case k is larger than the array length).",
      "Reverse the entire array.",
      "Reverse the first k elements.",
      "Reverse the rest of the array from index k to the end."
    ],
    code: {
      python: `def rotate(nums, k):\n    k = k % len(nums)\n    def reverse(start, end):\n        while start < end:\n            nums[start], nums[end] = nums[end], nums[start]\n            start += 1\n            end -= 1\n    reverse(0, len(nums) - 1)\n    reverse(0, k - 1)\n    reverse(k, len(nums) - 1)`,
      java: `class Solution {\n    public void rotate(int[] nums, int k) {\n        k %= nums.length;\n        reverse(nums, 0, nums.length - 1);\n        reverse(nums, 0, k - 1);\n        reverse(nums, k, nums.length - 1);\n    }\n    private void reverse(int[] nums, int start, int end) {\n        while (start < end) {\n            int temp = nums[start];\n            nums[start] = nums[end];\n            nums[end] = temp;\n            start++;\n            end--;\n        }\n    }\n}`
    },
    complexity: {
      time: "O(n)", timeExplanation: "Each element is reversed twice at most.",
      space: "O(1)", spaceExplanation: "In-place reversal."
    }
  },
  {
    id: 8,
    title: "Missing Number",
    category: "Arrays",
    difficulty: "Easy",
    problem: {
      explanation: "Given an array containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
      example: { input: "nums = [3,0,1]", output: "2" },
      intuition: "The sum of the first n numbers is n*(n+1)/2. The difference between this expected sum and the actual sum of the array is the missing number."
    },
    algorithm: [
      "Compute the length of the array n.",
      "Calculate the expected sum as n * (n + 1) / 2.",
      "Calculate the actual sum of all elements in the array.",
      "Return the difference: expected sum - actual sum."
    ],
    code: {
      python: `def missingNumber(nums):\n    n = len(nums)\n    expected_sum = n * (n + 1) // 2\n    actual_sum = sum(nums)\n    return expected_sum - actual_sum`,
      java: `class Solution {\n    public int missingNumber(int[] nums) {\n        int n = nums.length;\n        int expectedSum = n * (n + 1) / 2;\n        int actualSum = 0;\n        for (int num : nums) {\n            actualSum += num;\n        }\n        return expectedSum - actualSum;\n    }\n}`
    },
    complexity: {
      time: "O(n)", timeExplanation: "Summing the array takes O(n) time.",
      space: "O(1)", spaceExplanation: "Only constant extra space is used."
    }
  },

  // STRINGS
  {
    id: 9,
    title: "Valid Palindrome",
    category: "Strings",
    difficulty: "Easy",
    problem: {
      explanation: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
      example: { input: "s = 'A man, a plan, a canal: Panama'", output: "true" },
      intuition: "Use two pointers, one starting from the beginning and one from the end. Skip non-alphanumeric characters. Compare the characters at the pointers, ignoring case."
    },
    algorithm: [
      "Initialize left pointer to 0 and right pointer to the end of the string.",
      "While left < right:",
      "Increment left if it's not alphanumeric.",
      "Decrement right if it's not alphanumeric.",
      "If both are alphanumeric, compare them (lowercase). If they differ, return false.",
      "Move both pointers inwards. If loop finishes, return true."
    ],
    code: {
      python: `def isPalindrome(s):\n    l, r = 0, len(s) - 1\n    while l < r:\n        while l < r and not s[l].isalnum():\n            l += 1\n        while l < r and not s[r].isalnum():\n            r -= 1\n        if s[l].lower() != s[r].lower():\n            return False\n        l += 1; r -= 1\n    return True`,
      java: `class Solution {\n    public boolean isPalindrome(String s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            while (l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;\n            while (l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;\n            if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return false;\n            l++; r--;\n        }\n        return true;\n    }\n}`
    },
    complexity: {
      time: "O(n)", timeExplanation: "We traverse the string at most once.",
      space: "O(1)", spaceExplanation: "Only pointers are used."
    }
  },
  {
    id: 10,
    title: "Longest Substring Without Repeating Characters",
    category: "Strings",
    difficulty: "Medium",
    problem: {
      explanation: "Given a string s, find the length of the longest substring without repeating characters.",
      example: { input: "s = 'abcabcbb'", output: "3 ('abc')" },
      intuition: "Use a sliding window. Expand the right side of the window. If we hit a duplicate, shrink the left side until the duplicate is removed."
    },
    algorithm: [
      "Initialize a set to keep track of characters in the window.",
      "Use two pointers, left and right, both starting at 0.",
      "Iterate right over the string. If s[right] is in the set, remove s[left] and increment left until the duplicate is gone.",
      "Add s[right] to the set.",
      "Update the max_length with the current window size (right - left + 1)."
    ],
    code: {
      python: `def lengthOfLongestSubstring(s):\n    char_set = set()\n    left = 0\n    max_len = 0\n    for right in range(len(s)):\n        while s[right] in char_set:\n            char_set.remove(s[left])\n            left += 1\n        char_set.add(s[right])\n        max_len = max(max_len, right - left + 1)\n    return max_len`,
      java: `class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        Set<Character> set = new HashSet<>();\n        int left = 0, max = 0;\n        for (int right = 0; right < s.length(); right++) {\n            while (set.contains(s.charAt(right))) {\n                set.remove(s.charAt(left++));\n            }\n            set.add(s.charAt(right));\n            max = Math.max(max, right - left + 1);\n        }\n        return max;\n    }\n}`
    },
    complexity: {
      time: "O(n)", timeExplanation: "Each character is visited at most twice (once by right pointer, once by left).",
      space: "O(min(m, n))", spaceExplanation: "Size of the set is bounded by the alphabet size (m) or string length (n)."
    }
  },
  // Continuing with condensed definitions to fit within tokens, providing high quality snippets
  {
    id: 11, title: "Valid Anagram", category: "Strings", difficulty: "Easy",
    problem: { explanation: "Given two strings s and t, return true if t is an anagram of s.", example: { input: "s='anagram', t='nagaram'", output: "true" }, intuition: "Count characters in both strings. If the frequency of every character matches, it's an anagram." },
    algorithm: [ "If lengths differ, return false.", "Create an array of size 26 for char counts.", "Increment count for chars in s, decrement for t.", "If any count is non-zero, return false." ],
    code: { python: "def isAnagram(s, t):\n    if len(s) != len(t): return False\n    counts = [0] * 26\n    for c1, c2 in zip(s, t):\n        counts[ord(c1)-97] += 1\n        counts[ord(c2)-97] -= 1\n    return all(x == 0 for x in counts)", java: "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] counts = new int[26];\n        for (int i=0; i<s.length(); i++) {\n            counts[s.charAt(i)-'a']++;\n            counts[t.charAt(i)-'a']--;\n        }\n        for (int c : counts) if (c != 0) return false;\n        return true;\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "One pass through the strings.", space: "O(1)", spaceExplanation: "Array size is fixed at 26." }
  },
  {
    id: 12, title: "Reverse Words in a String", category: "Strings", difficulty: "Medium",
    problem: { explanation: "Return a string of the words in reverse order concatenated by a single space.", example: { input: "'  hello world  '", output: "'world hello'" }, intuition: "Split the string by spaces, reverse the list of words, and join them with a single space." },
    algorithm: [ "Trim leading/trailing spaces.", "Split by one or more spaces to get a list of words.", "Reverse the list.", "Join the words with a single space." ],
    code: { python: "def reverseWords(s):\n    return ' '.join(s.split()[::-1])", java: "class Solution {\n    public String reverseWords(String s) {\n        String[] words = s.trim().split(\"\\\\s+\");\n        StringBuilder sb = new StringBuilder();\n        for (int i = words.length - 1; i >= 0; i--) {\n            sb.append(words[i]);\n            if (i > 0) sb.append(\" \");\n        }\n        return sb.toString();\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "Splitting and joining takes O(n).", space: "O(n)", spaceExplanation: "Storing the list of words." }
  },
  {
    id: 13, title: "Longest Common Prefix", category: "Strings", difficulty: "Easy",
    problem: { explanation: "Find the longest common prefix string amongst an array of strings.", example: { input: "['flower','flow','flight']", output: "'fl'" }, intuition: "Start by assuming the first string is the prefix. Compare it with the next, shrink it until it matches, and repeat for all strings." },
    algorithm: [ "If array is empty, return empty string.", "Let prefix = first string.", "For each string, while it doesn't start with prefix, shorten prefix by 1 char.", "Return prefix." ],
    code: { python: "def longestCommonPrefix(strs):\n    if not strs: return ''\n    pref = strs[0]\n    for s in strs[1:]:\n        while not s.startswith(pref):\n            pref = pref[:-1]\n            if not pref: return ''\n    return pref", java: "class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        if (strs.length == 0) return \"\";\n        String pref = strs[0];\n        for (int i=1; i<strs.length; i++) {\n            while (strs[i].indexOf(pref) != 0) {\n                pref = pref.substring(0, pref.length()-1);\n                if (pref.isEmpty()) return \"\";\n            }\n        }\n        return pref;\n    }\n}" },
    complexity: { time: "O(S)", timeExplanation: "S is sum of all characters in all strings.", space: "O(1)", spaceExplanation: "Only modifying pointers/substrings." }
  },
  {
    id: 14, title: "Count and Say", category: "Strings", difficulty: "Medium",
    problem: { explanation: "Generate the nth term of the count-and-say sequence.", example: { input: "n = 4", output: "'1211'" }, intuition: "Build the string iteratively. For the previous string, count consecutive identical characters and append 'count + character'." },
    algorithm: [ "Base case: if n=1 return '1'.", "Iterate from 2 to n.", "Read the previous string, count consecutive identical digits.", "Append the count followed by the digit to build the new string." ],
    code: { python: "def countAndSay(n):\n    res = '1'\n    for _ in range(n-1):\n        nxt, count = '', 1\n        for j in range(len(res)):\n            if j < len(res)-1 and res[j] == res[j+1]: count += 1\n            else:\n                nxt += str(count) + res[j]\n                count = 1\n        res = nxt\n    return res", java: "class Solution {\n    public String countAndSay(int n) {\n        String res = \"1\";\n        for (int i=1; i<n; i++) {\n            StringBuilder nxt = new StringBuilder();\n            int count = 1;\n            for (int j=0; j<res.length(); j++) {\n                if (j < res.length()-1 && res.charAt(j) == res.charAt(j+1)) count++;\n                else { nxt.append(count).append(res.charAt(j)); count = 1; }\n            }\n            res = nxt.toString();\n        }\n        return res;\n    }\n}" },
    complexity: { time: "O(2^n)", timeExplanation: "Length of sequence grows exponentially.", space: "O(2^n)", spaceExplanation: "String storage grows exponentially." }
  },
  {
    id: 15, title: "Roman to Integer", category: "Strings", difficulty: "Easy",
    problem: { explanation: "Convert a Roman numeral to an integer.", example: { input: "s = 'IX'", output: "9" }, intuition: "If a smaller numeral appears before a larger one, we subtract it. Otherwise, we add it." },
    algorithm: [ "Map numerals to values (I:1, V:5, etc.).", "Iterate through the string.", "If current char is smaller than next char, subtract its value from total.", "Otherwise, add its value." ],
    code: { python: "def romanToInt(s):\n    d = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}\n    ans = 0\n    for i in range(len(s)):\n        if i < len(s)-1 and d[s[i]] < d[s[i+1]]: ans -= d[s[i]]\n        else: ans += d[s[i]]\n    return ans", java: "class Solution {\n    public int romanToInt(String s) {\n        int ans = 0, num = 0;\n        for (int i = s.length()-1; i >= 0; i--) {\n            switch(s.charAt(i)) {\n                case 'I': num = 1; break;\n                case 'V': num = 5; break;\n                case 'X': num = 10; break;\n                case 'L': num = 50; break;\n                case 'C': num = 100; break;\n                case 'D': num = 500; break;\n                case 'M': num = 1000; break;\n            }\n            if (4 * num < ans) ans -= num;\n            else ans += num;\n        }\n        return ans;\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "One pass through the string.", space: "O(1)", spaceExplanation: "Map takes constant space." }
  },

  // LINKED LIST
  {
    id: 16, title: "Reverse Linked List", category: "Linked List", difficulty: "Easy",
    problem: { explanation: "Reverse a singly linked list.", example: { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" }, intuition: "Keep three pointers: prev, curr, and next. Iteratively make curr point to prev, then shift all pointers forward." },
    algorithm: [ "Init prev as null, curr as head.", "While curr is not null:", "Save next node.", "Point curr to prev.", "Move prev to curr, curr to next." ],
    code: { python: "def reverseList(head):\n    prev, curr = None, head\n    while curr:\n        nxt = curr.next\n        curr.next = prev\n        prev = curr\n        curr = nxt\n    return prev", java: "class Solution {\n    public ListNode reverseList(ListNode head) {\n        ListNode prev = null, curr = head;\n        while (curr != null) {\n            ListNode nxt = curr.next;\n            curr.next = prev;\n            prev = curr;\n            curr = nxt;\n        }\n        return prev;\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "We visit each node once.", space: "O(1)", spaceExplanation: "Done in place." }
  },
  {
    id: 17, title: "Detect Cycle in Linked List", category: "Linked List", difficulty: "Easy",
    problem: { explanation: "Determine if a linked list has a cycle in it.", example: { input: "head = [3,2,0,-4], pos = 1", output: "true" }, intuition: "Floyd's Tortoise and Hare: A fast pointer moves 2 steps, slow moves 1. If they meet, there is a cycle." },
    algorithm: [ "Init slow and fast pointers to head.", "While fast and fast.next are valid:", "Move slow by 1, fast by 2.", "If slow == fast, return true.", "Return false if loop terminates." ],
    code: { python: "def hasCycle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast: return True\n    return False", java: "public class Solution {\n    public boolean hasCycle(ListNode head) {\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n            if (slow == fast) return true;\n        }\n        return false;\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "At most one pass through the list if no cycle. If cycle, they meet in < n steps.", space: "O(1)", spaceExplanation: "Only two pointers." }
  },
  {
    id: 18, title: "Merge Two Sorted Lists", category: "Linked List", difficulty: "Easy",
    problem: { explanation: "Merge two sorted linked lists into one sorted list.", example: { input: "l1=[1,2,4], l2=[1,3,4]", output: "[1,1,2,3,4,4]" }, intuition: "Use a dummy head. Compare the heads of both lists, append the smaller one to the dummy, and advance that list's pointer." },
    algorithm: [ "Create dummy node and tail pointer.", "While both lists have nodes:", "Compare heads, append smaller to tail, advance that pointer.", "Append remaining nodes of the non-empty list to tail." ],
    code: { python: "def mergeTwoLists(l1, l2):\n    dummy = tail = ListNode()\n    while l1 and l2:\n        if l1.val < l2.val:\n            tail.next = l1; l1 = l1.next\n        else:\n            tail.next = l2; l2 = l2.next\n        tail = tail.next\n    tail.next = l1 or l2\n    return dummy.next", java: "class Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        ListNode dummy = new ListNode(0), tail = dummy;\n        while (l1 != null && l2 != null) {\n            if (l1.val < l2.val) { tail.next = l1; l1 = l1.next; }\n            else { tail.next = l2; l2 = l2.next; }\n            tail = tail.next;\n        }\n        if (l1 != null) tail.next = l1;\n        else tail.next = l2;\n        return dummy.next;\n    }\n}" },
    complexity: { time: "O(n+m)", timeExplanation: "We process each node once.", space: "O(1)", spaceExplanation: "We reuse existing nodes." }
  },
  // To reach 50, I'll provide condensed but complete data for the rest.
  {
    id: 19, title: "Find Middle of Linked List", category: "Linked List", difficulty: "Easy",
    problem: { explanation: "Return the middle node of the linked list.", example: { input: "[1,2,3,4,5]", output: "[3,4,5]" }, intuition: "Fast and slow pointers. Fast moves 2x speed, when it reaches the end, slow is at the middle." },
    algorithm: ["Init slow and fast to head.", "While fast and fast.next are valid, advance slow by 1, fast by 2.", "Return slow."],
    code: { python: "def middleNode(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow", java: "class Solution {\n    public ListNode middleNode(ListNode head) {\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        return slow;\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "One pass.", space: "O(1)", spaceExplanation: "Pointers only." }
  },
  {
    id: 20, title: "Remove Nth Node From End", category: "Linked List", difficulty: "Medium",
    problem: { explanation: "Remove the nth node from the end of the list and return its head.", example: { input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" }, intuition: "Maintain a gap of n between two pointers. When the fast pointer hits the end, the slow pointer is just before the target node." },
    algorithm: ["Create dummy pointing to head.", "Move fast pointer n steps ahead.", "Move slow and fast together until fast reaches last node.", "Skip the node after slow.", "Return dummy.next."],
    code: { python: "def removeNthFromEnd(head, n):\n    dummy = ListNode(0, head)\n    slow = fast = dummy\n    for _ in range(n): fast = fast.next\n    while fast.next:\n        slow = slow.next\n        fast = fast.next\n    slow.next = slow.next.next\n    return dummy.next", java: "class Solution {\n    public ListNode removeNthFromEnd(ListNode head, int n) {\n        ListNode dummy = new ListNode(0); dummy.next = head;\n        ListNode slow = dummy, fast = dummy;\n        for(int i=0; i<=n; i++) fast = fast.next;\n        while(fast != null) { slow = slow.next; fast = fast.next; }\n        slow.next = slow.next.next;\n        return dummy.next;\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "One pass.", space: "O(1)", spaceExplanation: "Constant pointers." }
  },
  {
    id: 21, title: "Intersection of Two Linked Lists", category: "Linked List", difficulty: "Easy",
    problem: { explanation: "Find the node at which two lists intersect.", example: { input: "listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]", output: "Node 8" }, intuition: "Two pointers traverse their lists. When they reach the end, they switch to the other list's head. They will meet at the intersection." },
    algorithm: ["Init pA=headA, pB=headB.", "While pA != pB:", "If pA is null, pA=headB. Else pA=pA.next.", "Same for pB.", "Return pA."],
    code: { python: "def getIntersectionNode(headA, headB):\n    a, b = headA, headB\n    while a != b:\n        a = a.next if a else headB\n        b = b.next if b else headA\n    return a", java: "public class Solution {\n    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n        ListNode a = headA, b = headB;\n        while (a != b) {\n            a = a == null ? headB : a.next;\n            b = b == null ? headA : b.next;\n        }\n        return a;\n    }\n}" },
    complexity: { time: "O(n+m)", timeExplanation: "Max 2 passes over both lists.", space: "O(1)", spaceExplanation: "Constant pointers." }
  },

  // STACK & QUEUE
  {
    id: 22, title: "Valid Parentheses", category: "Stack & Queue", difficulty: "Easy",
    problem: { explanation: "Given a string containing just brackets, determine if the input string is valid.", example: { input: "s = '()[]{}'", output: "true" }, intuition: "Use a stack. Push open brackets. For closed brackets, ensure it matches the top of the stack and pop." },
    algorithm: ["Init stack.", "For char in string: if open, push to stack.", "If close, pop from stack and check match. If empty or mismatch, return false.", "Return true if stack is empty at end."],
    code: { python: "def isValid(s):\n    stack = []\n    mapping = {')':'(', '}':'{', ']':'['}\n    for c in s:\n        if c in mapping:\n            if not stack or stack.pop() != mapping[c]: return False\n        else:\n            stack.append(c)\n    return not stack", java: "class Solution {\n    public boolean isValid(String s) {\n        Stack<Character> stack = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (c=='(') stack.push(')');\n            else if (c=='{') stack.push('}');\n            else if (c=='[') stack.push(']');\n            else if (stack.isEmpty() || stack.pop() != c) return false;\n        }\n        return stack.isEmpty();\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "One pass.", space: "O(n)", spaceExplanation: "Stack can hold all characters." }
  },
  {
    id: 23, title: "Implement Stack using Queues", category: "Stack & Queue", difficulty: "Easy",
    problem: { explanation: "Implement a LIFO stack using only two queues.", example: { input: "push(1), push(2), top(), pop()", output: "2, 2" }, intuition: "Use one queue. On push, add to back, then rotate all previous elements to the back so the new element is at the front." },
    algorithm: ["Push: add to q. Then, for size-1 iterations, pop from front and push to back.", "Pop/Top: Standard queue poll/peek.", "Empty: Check if q is empty."],
    code: { python: "from collections import deque\nclass MyStack:\n    def __init__(self):\n        self.q = deque()\n    def push(self, x):\n        self.q.append(x)\n        for _ in range(len(self.q)-1):\n            self.q.append(self.q.popleft())\n    def pop(self):\n        return self.q.popleft()\n    def top(self):\n        return self.q[0]\n    def empty(self):\n        return len(self.q) == 0", java: "class MyStack {\n    Queue<Integer> q = new LinkedList<>();\n    public void push(int x) {\n        q.add(x);\n        for(int i=1; i<q.size(); i++) q.add(q.remove());\n    }\n    public int pop() { return q.remove(); }\n    public int top() { return q.peek(); }\n    public boolean empty() { return q.isEmpty(); }\n}" },
    complexity: { time: "O(n) push, O(1) pop", timeExplanation: "Push rotates n elements.", space: "O(n)", spaceExplanation: "Queue size." }
  },
  {
    id: 24, title: "Min Stack", category: "Stack & Queue", difficulty: "Medium",
    problem: { explanation: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.", example: { input: "push(-2), push(0), push(-3), getMin()", output: "-3" }, intuition: "Keep a second stack that tracks the minimum value at each level of the main stack." },
    algorithm: ["Use two stacks: main and min_stack.", "Push: append to main. Append min(x, current min) to min_stack.", "Pop: pop from both.", "GetMin: return top of min_stack."],
    code: { python: "class MinStack:\n    def __init__(self):\n        self.st = []\n        self.min_st = []\n    def push(self, val):\n        self.st.append(val)\n        m = min(val, self.min_st[-1] if self.min_st else val)\n        self.min_st.append(m)\n    def pop(self):\n        self.st.pop(); self.min_st.pop()\n    def top(self):\n        return self.st[-1]\n    def getMin(self):\n        return self.min_st[-1]", java: "class MinStack {\n    Stack<Integer> st = new Stack<>();\n    Stack<Integer> minSt = new Stack<>();\n    public void push(int val) {\n        st.push(val);\n        minSt.push(minSt.isEmpty() ? val : Math.min(val, minSt.peek()));\n    }\n    public void pop() { st.pop(); minSt.pop(); }\n    public int top() { return st.peek(); }\n    public int getMin() { return minSt.peek(); }\n}" },
    complexity: { time: "O(1)", timeExplanation: "All ops are constant time.", space: "O(n)", spaceExplanation: "Two stacks." }
  },
  {
    id: 25, title: "Next Greater Element", category: "Stack & Queue", difficulty: "Easy",
    problem: { explanation: "Find the next greater element for each element of a subset array.", example: { input: "nums1 = [4,1,2], nums2 = [1,3,4,2]", output: "[-1,3,-1]" }, intuition: "Use a monotonic decreasing stack to find the next greater element for all items in nums2, map them, then lookup for nums1." },
    algorithm: ["Init stack and hash map.", "Iterate nums2. While stack top < current, pop it and map popped_val -> current.", "Push current to stack.", "Build result for nums1 using map (-1 if missing)."],
    code: { python: "def nextGreaterElement(nums1, nums2):\n    d, st = {}, []\n    for n in nums2:\n        while st and st[-1] < n:\n            d[st.pop()] = n\n        st.append(n)\n    return [d.get(n, -1) for n in nums1]", java: "class Solution {\n    public int[] nextGreaterElement(int[] nums1, int[] nums2) {\n        Map<Integer, Integer> map = new HashMap<>();\n        Stack<Integer> st = new Stack<>();\n        for(int n : nums2) {\n            while(!st.isEmpty() && st.peek() < n) map.put(st.pop(), n);\n            st.push(n);\n        }\n        int[] ans = new int[nums1.length];\n        for(int i=0; i<nums1.length; i++) ans[i] = map.getOrDefault(nums1[i], -1);\n        return ans;\n    }\n}" },
    complexity: { time: "O(n+m)", timeExplanation: "Each element processed twice max.", space: "O(n)", spaceExplanation: "Stack and Map." }
  },
  {
    id: 26, title: "Evaluate Reverse Polish Notation", category: "Stack & Queue", difficulty: "Medium",
    problem: { explanation: "Evaluate the value of an arithmetic expression in RPN.", example: { input: "['2','1','+','3','*']", output: "9" }, intuition: "Use a stack. Push numbers. When an operator is seen, pop two numbers, evaluate, and push result." },
    algorithm: ["Iterate tokens.", "If number, push to stack.", "If operator, pop two nums, apply operator (note division truncates toward zero), push result.", "Return stack top."],
    code: { python: "def evalRPN(tokens):\n    st = []\n    for t in tokens:\n        if t not in '+-*/': st.append(int(t))\n        else:\n            r, l = st.pop(), st.pop()\n            if t == '+': st.append(l+r)\n            elif t == '-': st.append(l-r)\n            elif t == '*': st.append(l*r)\n            else: st.append(int(l/r))\n    return st[0]", java: "class Solution {\n    public int evalRPN(String[] tokens) {\n        Stack<Integer> st = new Stack<>();\n        for (String t : tokens) {\n            if (t.equals(\"+\")) st.push(st.pop() + st.pop());\n            else if (t.equals(\"-\")) { int b=st.pop(), a=st.pop(); st.push(a-b); }\n            else if (t.equals(\"*\")) st.push(st.pop() * st.pop());\n            else if (t.equals(\"/\")) { int b=st.pop(), a=st.pop(); st.push(a/b); }\n            else st.push(Integer.parseInt(t));\n        }\n        return st.pop();\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "One pass.", space: "O(n)", spaceExplanation: "Stack size." }
  },
  {
    id: 27, title: "Daily Temperatures", category: "Stack & Queue", difficulty: "Medium",
    problem: { explanation: "Find number of days you have to wait after each day to get a warmer temperature.", example: { input: "T=[73,74,75,71,69,72,76,73]", output: "[1,1,4,2,1,1,0,0]" }, intuition: "Monotonic decreasing stack storing indices. Pop when current temp > top temp." },
    algorithm: ["Init answer array to 0, stack for indices.", "Iterate array.", "While stack and current temp > temp[stack top], pop stack, ans[popped] = i - popped.", "Push current index."],
    code: { python: "def dailyTemperatures(T):\n    ans = [0]*len(T)\n    st = []\n    for i, t in enumerate(T):\n        while st and T[st[-1]] < t:\n            prev = st.pop()\n            ans[prev] = i - prev\n        st.append(i)\n    return ans", java: "class Solution {\n    public int[] dailyTemperatures(int[] T) {\n        int[] ans = new int[T.length];\n        Stack<Integer> st = new Stack<>();\n        for(int i=0; i<T.length; i++) {\n            while(!st.isEmpty() && T[st.peek()] < T[i]) {\n                int prev = st.pop();\n                ans[prev] = i - prev;\n            }\n            st.push(i);\n        }\n        return ans;\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "Each index pushed/popped once.", space: "O(n)", spaceExplanation: "Stack size max n." }
  },

  // TREES
  {
    id: 28, title: "Maximum Depth of Binary Tree", category: "Trees", difficulty: "Easy",
    problem: { explanation: "Find the max depth of a tree (nodes along longest path from root to leaf).", example: { input: "[3,9,20,null,null,15,7]", output: "3" }, intuition: "Recursive DFS. Depth is 1 + max(depth(left), depth(right))." },
    algorithm: ["If root is null, return 0.", "Recursively get max depth of left and right.", "Return 1 + max(left, right)."],
    code: { python: "def maxDepth(root):\n    if not root: return 0\n    return 1 + max(maxDepth(root.left), maxDepth(root.right))", java: "class Solution {\n    public int maxDepth(TreeNode root) {\n        if(root == null) return 0;\n        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "Visit every node once.", space: "O(h)", spaceExplanation: "Recursion stack, h is height." }
  },
  {
    id: 29, title: "Invert Binary Tree", category: "Trees", difficulty: "Easy",
    problem: { explanation: "Invert a binary tree (swap left and right children).", example: { input: "[4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" }, intuition: "At each node, swap its left and right pointers, then recurse down." },
    algorithm: ["If node is null, return.", "Swap node.left and node.right.", "Recursively invert left and right.", "Return node."],
    code: { python: "def invertTree(root):\n    if not root: return None\n    root.left, root.right = invertTree(root.right), invertTree(root.left)\n    return root", java: "class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        if(root == null) return null;\n        TreeNode temp = root.left;\n        root.left = invertTree(root.right);\n        root.right = invertTree(temp);\n        return root;\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "Visit all nodes.", space: "O(h)", spaceExplanation: "Recursion depth." }
  },
  {
    id: 30, title: "Level Order Traversal", category: "Trees", difficulty: "Medium",
    problem: { explanation: "Return the level order traversal of a binary tree's nodes' values (BFS).", example: { input: "[3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" }, intuition: "Use a Queue for BFS. Keep track of level size to group nodes per level." },
    algorithm: ["Init queue with root.", "While queue is not empty, get current size.", "Iterate 'size' times, popping from queue, adding to level list.", "Push non-null children.", "Add level list to result."],
    code: { python: "from collections import deque\ndef levelOrder(root):\n    if not root: return []\n    res, q = [], deque([root])\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res", java: "class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        List<List<Integer>> res = new ArrayList<>();\n        if(root == null) return res;\n        Queue<TreeNode> q = new LinkedList<>();\n        q.add(root);\n        while(!q.isEmpty()) {\n            int size = q.size();\n            List<Integer> level = new ArrayList<>();\n            for(int i=0; i<size; i++) {\n                TreeNode node = q.poll();\n                level.add(node.val);\n                if(node.left != null) q.add(node.left);\n                if(node.right != null) q.add(node.right);\n            }\n            res.add(level);\n        }\n        return res;\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "Visit each node.", space: "O(n)", spaceExplanation: "Queue holds max n/2 nodes." }
  },
  {
    id: 31, title: "Validate Binary Search Tree", category: "Trees", difficulty: "Medium",
    problem: { explanation: "Determine if a valid BST.", example: { input: "[2,1,3]", output: "true" }, intuition: "Pass down a valid range (min, max) for each node. Node value must be between min and max." },
    algorithm: ["Helper function takes node, min, max.", "If node is null, return true.", "If val <= min or val >= max, return false.", "Recurse left (update max) and right (update min)."],
    code: { python: "def isValidBST(root, min_val=float('-inf'), max_val=float('inf')):\n    if not root: return True\n    if not (min_val < root.val < max_val): return False\n    return isValidBST(root.left, min_val, root.val) and isValidBST(root.right, root.val, max_val)", java: "class Solution {\n    public boolean isValidBST(TreeNode root) {\n        return helper(root, null, null);\n    }\n    private boolean helper(TreeNode node, Integer lower, Integer upper) {\n        if(node == null) return true;\n        if(lower != null && node.val <= lower) return false;\n        if(upper != null && node.val >= upper) return false;\n        return helper(node.left, lower, node.val) && helper(node.right, node.val, upper);\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "Visit each node.", space: "O(h)", spaceExplanation: "Recursion stack." }
  },
  {
    id: 32, title: "Lowest Common Ancestor of BST", category: "Trees", difficulty: "Easy",
    problem: { explanation: "Find the LCA of two nodes in a BST.", example: { input: "root=[6,2,8,0,4], p=2, q=8", output: "6" }, intuition: "Leverage BST property. If both p and q are smaller than root, LCA is in left subtree. If larger, in right. Else, root is LCA." },
    algorithm: ["If p and q < root, go left.", "If p and q > root, go right.", "Otherwise, return root."],
    code: { python: "def lowestCommonAncestor(root, p, q):\n    while root:\n        if p.val < root.val and q.val < root.val: root = root.left\n        elif p.val > root.val and q.val > root.val: root = root.right\n        else: return root", java: "class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        while(root != null) {\n            if(p.val < root.val && q.val < root.val) root = root.left;\n            else if(p.val > root.val && q.val > root.val) root = root.right;\n            else return root;\n        }\n        return null;\n    }\n}" },
    complexity: { time: "O(h)", timeExplanation: "Path down the tree.", space: "O(1)", spaceExplanation: "Iterative approach." }
  },
  {
    id: 33, title: "Diameter of Binary Tree", category: "Trees", difficulty: "Easy",
    problem: { explanation: "Compute the length of the longest path between any two nodes in a tree.", example: { input: "[1,2,3,4,5]", output: "3" }, intuition: "The longest path passes through some node. For each node, length is left_height + right_height. Keep track of global max." },
    algorithm: ["Init global max diameter to 0.", "DFS function returns height of node.", "Inside DFS, update max = max(max, left+right).", "Return 1 + max(left, right)."],
    code: { python: "class Solution:\n    def diameterOfBinaryTree(self, root):\n        self.ans = 0\n        def dfs(node):\n            if not node: return 0\n            l, r = dfs(node.left), dfs(node.right)\n            self.ans = max(self.ans, l + r)\n            return 1 + max(l, r)\n        dfs(root)\n        return self.ans", java: "class Solution {\n    int max = 0;\n    public int diameterOfBinaryTree(TreeNode root) {\n        dfs(root);\n        return max;\n    }\n    private int dfs(TreeNode node) {\n        if(node == null) return 0;\n        int l = dfs(node.left), r = dfs(node.right);\n        max = Math.max(max, l+r);\n        return 1 + Math.max(l, r);\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "Visit each node.", space: "O(h)", spaceExplanation: "Recursion stack." }
  },
  {
    id: 34, title: "Symmetric Tree", category: "Trees", difficulty: "Easy",
    problem: { explanation: "Check whether a tree is a mirror of itself.", example: { input: "[1,2,2,3,4,4,3]", output: "true" }, intuition: "A tree is symmetric if the left subtree is a mirror reflection of the right subtree." },
    algorithm: ["Use helper taking two nodes.", "If both null, true. If one null or values differ, false.", "Return helper(n1.left, n2.right) AND helper(n1.right, n2.left)."],
    code: { python: "def isSymmetric(root):\n    def isMirror(t1, t2):\n        if not t1 and not t2: return True\n        if not t1 or not t2 or t1.val != t2.val: return False\n        return isMirror(t1.left, t2.right) and isMirror(t1.right, t2.left)\n    return isMirror(root, root)", java: "class Solution {\n    public boolean isSymmetric(TreeNode root) {\n        return isMirror(root, root);\n    }\n    private boolean isMirror(TreeNode t1, TreeNode t2) {\n        if(t1==null && t2==null) return true;\n        if(t1==null || t2==null || t1.val != t2.val) return false;\n        return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "Visit each node.", space: "O(h)", spaceExplanation: "Recursion depth." }
  },

  // GRAPHS
  {
    id: 35, title: "Number of Islands", category: "Graphs", difficulty: "Medium",
    problem: { explanation: "Count the number of islands ('1's) surrounded by water ('0's).", example: { input: "grid = [['1','1','0'],['0','0','1']]", output: "2" }, intuition: "Iterate grid. When '1' is found, increment count and DFS/BFS to mark all connected '1's as visited ('0')." },
    algorithm: ["Iterate through all grid cells.", "If cell is '1', increment island count.", "Launch DFS to sink the island (turn adjacent 1s to 0s)."],
    code: { python: "def numIslands(grid):\n    if not grid: return 0\n    count = 0\n    def dfs(i, j):\n        if 0<=i<len(grid) and 0<=j<len(grid[0]) and grid[i][j]=='1':\n            grid[i][j] = '0'\n            map(dfs, (i+1, i-1, i, i), (j, j, j+1, j-1))\n    for i in range(len(grid)):\n        for j in range(len(grid[0])):\n            if grid[i][j] == '1':\n                dfs(i, j); count += 1\n    return count", java: "class Solution {\n    public int numIslands(char[][] grid) {\n        int count = 0;\n        for(int i=0; i<grid.length; i++) {\n            for(int j=0; j<grid[0].length; j++) {\n                if(grid[i][j] == '1') {\n                    dfs(grid, i, j); count++;\n                }\n            }\n        }\n        return count;\n    }\n    private void dfs(char[][] grid, int i, int j) {\n        if(i<0 || j<0 || i>=grid.length || j>=grid[0].length || grid[i][j]=='0') return;\n        grid[i][j] = '0';\n        dfs(grid, i+1, j); dfs(grid, i-1, j); dfs(grid, i, j+1); dfs(grid, i, j-1);\n    }\n}" },
    complexity: { time: "O(m*n)", timeExplanation: "Visit every cell.", space: "O(m*n)", spaceExplanation: "Worst case recursion stack for all 1s." }
  },
  {
    id: 36, title: "Clone Graph", category: "Graphs", difficulty: "Medium",
    problem: { explanation: "Return a deep copy of an undirected graph.", example: { input: "adjList = [[2,4],[1,3],[2,4],[1,3]]", output: "Deep clone" }, intuition: "Use a hash map to map original nodes to their clones. DFS/BFS to traverse and build neighbors." },
    algorithm: ["Use map: {original_node : cloned_node}.", "DFS: if node in map, return clone.", "Else, create clone, put in map.", "For each neighbor, append DFS(neighbor) to clone's neighbors.", "Return clone."],
    code: { python: "def cloneGraph(node):\n    oldToNew = {}\n    def dfs(n):\n        if not n: return None\n        if n in oldToNew: return oldToNew[n]\n        copy = Node(n.val)\n        oldToNew[n] = copy\n        for nei in n.neighbors:\n            copy.neighbors.append(dfs(nei))\n        return copy\n    return dfs(node)", java: "class Solution {\n    Map<Node, Node> map = new HashMap<>();\n    public Node cloneGraph(Node node) {\n        if(node == null) return null;\n        if(map.containsKey(node)) return map.get(node);\n        Node clone = new Node(node.val, new ArrayList<>());\n        map.put(node, clone);\n        for(Node nei : node.neighbors) {\n            clone.neighbors.add(cloneGraph(nei));\n        }\n        return clone;\n    }\n}" },
    complexity: { time: "O(V+E)", timeExplanation: "Visit each vertex and edge.", space: "O(V)", spaceExplanation: "Hash map to store V nodes." }
  },
  {
    id: 37, title: "Course Schedule", category: "Graphs", difficulty: "Medium",
    problem: { explanation: "Given numCourses and prerequisites, can you finish all courses?", example: { input: "num=2, prereq=[[1,0]]", output: "true" }, intuition: "Detect cycle in a directed graph. Use topological sort (Kahn's algorithm) or DFS coloring." },
    algorithm: ["Build adjacency list and compute in-degrees for all nodes.", "Push all nodes with in-degree 0 to a queue.", "While queue, pop, increment count of visited courses.", "Decrement in-degree of neighbors. If neighbor in-degree becomes 0, push to queue.", "Return count == numCourses."],
    code: { python: "from collections import deque\ndef canFinish(n, pre):\n    adj = [[] for _ in range(n)]\n    indegree = [0]*n\n    for c, p in pre:\n        adj[p].append(c)\n        indegree[c] += 1\n    q = deque([i for i in range(n) if indegree[i] == 0])\n    count = 0\n    while q:\n        curr = q.popleft()\n        count += 1\n        for nei in adj[curr]:\n            indegree[nei] -= 1\n            if indegree[nei] == 0: q.append(nei)\n    return count == n", java: "class Solution {\n    public boolean canFinish(int n, int[][] pre) {\n        List<Integer>[] adj = new List[n];\n        int[] ind = new int[n];\n        for(int i=0; i<n; i++) adj[i] = new ArrayList<>();\n        for(int[] p : pre) { adj[p[1]].add(p[0]); ind[p[0]]++; }\n        Queue<Integer> q = new LinkedList<>();\n        for(int i=0; i<n; i++) if(ind[i]==0) q.add(i);\n        int count = 0;\n        while(!q.isEmpty()) {\n            int curr = q.poll(); count++;\n            for(int nei : adj[curr]) if(--ind[nei]==0) q.add(nei);\n        }\n        return count == n;\n    }\n}" },
    complexity: { time: "O(V+E)", timeExplanation: "Process all vertices and edges.", space: "O(V+E)", spaceExplanation: "Adjacency list size." }
  },
  {
    id: 38, title: "Word Ladder", category: "Graphs", difficulty: "Hard",
    problem: { explanation: "Shortest transformation sequence from beginWord to endWord.", example: { input: "hit -> cog", output: "5" }, intuition: "Shortest path in unweighted graph = BFS. Two words have an edge if they differ by 1 letter." },
    algorithm: ["Add wordList to set.", "Init Queue with (beginWord, 1).", "BFS: Pop word and step.", "For each char in word, try all 26 letters. If new word == endWord, return step+1.", "If in set, remove from set, push to Q."],
    code: { python: "from collections import deque\ndef ladderLength(beginWord, endWord, wordList):\n    wordSet = set(wordList)\n    q = deque([(beginWord, 1)])\n    while q:\n        w, d = q.popleft()\n        if w == endWord: return d\n        for i in range(len(w)):\n            for c in 'abcdefghijklmnopqrstuvwxyz':\n                newW = w[:i] + c + w[i+1:]\n                if newW in wordSet:\n                    wordSet.remove(newW)\n                    q.append((newW, d+1))\n    return 0", java: "class Solution {\n    public int ladderLength(String begin, String end, List<String> list) {\n        Set<String> set = new HashSet<>(list);\n        Queue<String> q = new LinkedList<>(); q.add(begin);\n        int step = 1;\n        while(!q.isEmpty()) {\n            int size = q.size();\n            for(int i=0; i<size; i++) {\n                char[] w = q.poll().toCharArray();\n                if(String.valueOf(w).equals(end)) return step;\n                for(int j=0; j<w.length; j++) {\n                    char old = w[j];\n                    for(char c='a'; c<='z'; c++) {\n                        w[j] = c; String nw = String.valueOf(w);\n                        if(set.contains(nw)) { set.remove(nw); q.add(nw); }\n                    }\n                    w[j] = old;\n                }\n            }\n            step++;\n        }\n        return 0;\n    }\n}" },
    complexity: { time: "O(M^2 * N)", timeExplanation: "M=len(word), N=num words. String generation takes M.", space: "O(N)", spaceExplanation: "Set and Queue." }
  },
  {
    id: 39, title: "Flood Fill", category: "Graphs", difficulty: "Easy",
    problem: { explanation: "Fill a 2D image starting from a pixel with a new color.", example: { input: "sr=1, sc=1, newColor=2", output: "Filled grid" }, intuition: "Standard DFS/BFS starting from the given pixel, coloring connected components that have the original color." },
    algorithm: ["Get original color. If same as new color, return image.", "DFS: If out of bounds or not original color, return.", "Change color to newColor, recurse in 4 directions."],
    code: { python: "def floodFill(image, sr, sc, newColor):\n    old = image[sr][sc]\n    if old == newColor: return image\n    def dfs(r, c):\n        if 0<=r<len(image) and 0<=c<len(image[0]) and image[r][c]==old:\n            image[r][c] = newColor\n            list(map(dfs, (r+1,r-1,r,r), (c,c,c+1,c-1)))\n    dfs(sr, sc)\n    return image", java: "class Solution {\n    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {\n        if(image[sr][sc] == newColor) return image;\n        dfs(image, sr, sc, image[sr][sc], newColor);\n        return image;\n    }\n    private void dfs(int[][] img, int r, int c, int old, int nC) {\n        if(r<0 || c<0 || r>=img.length || c>=img[0].length || img[r][c]!=old) return;\n        img[r][c] = nC;\n        dfs(img, r+1, c, old, nC); dfs(img, r-1, c, old, nC);\n        dfs(img, r, c+1, old, nC); dfs(img, r, c-1, old, nC);\n    }\n}" },
    complexity: { time: "O(m*n)", timeExplanation: "Process each pixel at most once.", space: "O(m*n)", spaceExplanation: "Recursion depth." }
  },
  {
    id: 40, title: "Rotting Oranges", category: "Graphs", difficulty: "Medium",
    problem: { explanation: "Return min minutes until no cell has a fresh orange. Rotten oranges rot adjacent ones per minute.", example: { input: "grid = [[2,1,1],[1,1,0],[0,1,1]]", output: "4" }, intuition: "Multi-source BFS. Start BFS simultaneously from all initial rotten oranges." },
    algorithm: ["Count fresh oranges. Add all rotten to queue.", "BFS level by level. Each level = 1 minute.", "Pop rotten, rot valid neighbors, decrease fresh count.", "Return time if fresh == 0 else -1."],
    code: { python: "from collections import deque\ndef orangesRotting(grid):\n    q, fresh, time = deque(), 0, 0\n    for r in range(len(grid)):\n        for c in range(len(grid[0])):\n            if grid[r][c] == 1: fresh += 1\n            elif grid[r][c] == 2: q.append((r, c))\n    dirs = [(1,0),(-1,0),(0,1),(0,-1)]\n    while q and fresh > 0:\n        time += 1\n        for _ in range(len(q)):\n            r, c = q.popleft()\n            for dr, dc in dirs:\n                row, col = r+dr, c+dc\n                if 0<=row<len(grid) and 0<=col<len(grid[0]) and grid[row][col]==1:\n                    grid[row][col] = 2\n                    fresh -= 1\n                    q.append((row, col))\n    return time if fresh == 0 else -1", java: "class Solution {\n    public int orangesRotting(int[][] grid) {\n        Queue<int[]> q = new LinkedList<>();\n        int fresh = 0, time = 0;\n        for(int i=0; i<grid.length; i++){\n            for(int j=0; j<grid[0].length; j++){\n                if(grid[i][j]==2) q.add(new int[]{i,j});\n                else if(grid[i][j]==1) fresh++;\n            }\n        }\n        int[][] dirs = {{1,0},{-1,0},{0,1},{0,-1}};\n        while(!q.isEmpty() && fresh > 0){\n            time++;\n            int size = q.size();\n            for(int i=0; i<size; i++){\n                int[] pos = q.poll();\n                for(int[] d : dirs){\n                    int r=pos[0]+d[0], c=pos[1]+d[1];\n                    if(r>=0 && c>=0 && r<grid.length && c<grid[0].length && grid[r][c]==1){\n                        grid[r][c]=2; fresh--; q.add(new int[]{r,c});\n                    }\n                }\n            }\n        }\n        return fresh==0 ? time : -1;\n    }\n}" },
    complexity: { time: "O(m*n)", timeExplanation: "Visit each cell.", space: "O(m*n)", spaceExplanation: "Queue size." }
  },
  {
    id: 41, title: "Pacific Atlantic Water Flow", category: "Graphs", difficulty: "Medium",
    problem: { explanation: "Find all cells that can flow to both Pacific (top/left) and Atlantic (bottom/right) oceans.", example: { input: "heights grid", output: "List of coords" }, intuition: "Instead of going from each cell to oceans, start from oceans and go UP (to equal or higher elevation). DFS from both oceans, find intersection." },
    algorithm: ["Maintain two sets: pac and atl visited.", "Run DFS from top/left edges for pac, bottom/right for atl.", "DFS goes to neighbors with height >= current.", "Intersection of pac and atl sets are the valid cells."],
    code: { python: "def pacificAtlantic(heights):\n    if not heights: return []\n    ROWS, COLS = len(heights), len(heights[0])\n    pac, atl = set(), set()\n    def dfs(r, c, visit, prevHeight):\n        if (r, c) in visit or r<0 or c<0 or r>=ROWS or c>=COLS or heights[r][c] < prevHeight: return\n        visit.add((r, c))\n        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:\n            dfs(r+dr, c+dc, visit, heights[r][c])\n    for c in range(COLS):\n        dfs(0, c, pac, heights[0][c])\n        dfs(ROWS-1, c, atl, heights[ROWS-1][c])\n    for r in range(ROWS):\n        dfs(r, 0, pac, heights[r][0])\n        dfs(r, COLS-1, atl, heights[r][COLS-1])\n    return list(pac & atl)", java: "class Solution {\n    public List<List<Integer>> pacificAtlantic(int[][] heights) {\n        List<List<Integer>> res = new ArrayList<>();\n        int R = heights.length, C = heights[0].length;\n        boolean[][] pac = new boolean[R][C], atl = new boolean[R][C];\n        for(int c=0; c<C; c++){ dfs(heights, 0, c, pac, heights[0][c]); dfs(heights, R-1, c, atl, heights[R-1][c]); }\n        for(int r=0; r<R; r++){ dfs(heights, r, 0, pac, heights[r][0]); dfs(heights, r, C-1, atl, heights[r][C-1]); }\n        for(int r=0; r<R; r++) for(int c=0; c<C; c++)\n            if(pac[r][c] && atl[r][c]) res.add(Arrays.asList(r,c));\n        return res;\n    }\n    private void dfs(int[][] h, int r, int c, boolean[][] v, int prev) {\n        if(r<0||c<0||r>=h.length||c>=h[0].length||v[r][c]||h[r][c]<prev) return;\n        v[r][c] = true;\n        dfs(h, r+1, c, v, h[r][c]); dfs(h, r-1, c, v, h[r][c]);\n        dfs(h, r, c+1, v, h[r][c]); dfs(h, r, c-1, v, h[r][c]);\n    }\n}" },
    complexity: { time: "O(m*n)", timeExplanation: "Visit cells a constant number of times.", space: "O(m*n)", spaceExplanation: "Visited sets and recursion." }
  },

  // DYNAMIC PROGRAMMING
  {
    id: 42, title: "Climbing Stairs", category: "Dynamic Programming", difficulty: "Easy",
    problem: { explanation: "Takes n steps to reach top. Each time climb 1 or 2. How many distinct ways?", example: { input: "n=3", output: "3 (1+1+1, 1+2, 2+1)" }, intuition: "Fibonacci sequence. To reach step i, you either came from i-1 or i-2. So ways(i) = ways(i-1) + ways(i-2)." },
    algorithm: ["Use two variables to track previous two steps (like fibonacci).", "Init one = 1, two = 1.", "Loop n-1 times: temp=one, one=one+two, two=temp.", "Return one."],
    code: { python: "def climbStairs(n):\n    one, two = 1, 1\n    for _ in range(n - 1):\n        one, two = one + two, one\n    return one", java: "class Solution {\n    public int climbStairs(int n) {\n        int one = 1, two = 1;\n        for (int i=0; i<n-1; i++) {\n            int temp = one;\n            one = one + two;\n            two = temp;\n        }\n        return one;\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "Loop n times.", space: "O(1)", spaceExplanation: "Two variables." }
  },
  {
    id: 43, title: "Coin Change", category: "Dynamic Programming", difficulty: "Medium",
    problem: { explanation: "Fewest number of coins to make up a given amount.", example: { input: "coins=[1,2,5], amount=11", output: "3 (5+5+1)" }, intuition: "DP array where dp[i] is min coins for amount i. dp[i] = min(dp[i], 1 + dp[i-coin])." },
    algorithm: ["Init dp array of size amount+1 with infinity. dp[0] = 0.", "For each amount a from 1 to amount:", "For each coin in coins: if a - coin >= 0, dp[a] = min(dp[a], 1 + dp[a-coin]).", "Return dp[amount] if not infinity else -1."],
    code: { python: "def coinChange(coins, amount):\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for a in range(1, amount + 1):\n        for c in coins:\n            if a - c >= 0:\n                dp[a] = min(dp[a], 1 + dp[a - c])\n    return dp[amount] if dp[amount] != float('inf') else -1", java: "class Solution {\n    public int coinChange(int[] coins, int amount) {\n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, amount + 1);\n        dp[0] = 0;\n        for(int a=1; a<=amount; a++) {\n            for(int c : coins) {\n                if(a - c >= 0) dp[a] = Math.min(dp[a], 1 + dp[a - c]);\n            }\n        }\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n}" },
    complexity: { time: "O(amount * len(coins))", timeExplanation: "Nested loops.", space: "O(amount)", spaceExplanation: "DP array." }
  },
  {
    id: 44, title: "Longest Common Subsequence", category: "Dynamic Programming", difficulty: "Medium",
    problem: { explanation: "Find the length of the longest common subsequence between two strings.", example: { input: "text1 = 'abcde', text2 = 'ace'", output: "3 ('ace')" }, intuition: "2D DP array. If chars match, dp[i][j] = 1 + dp[i+1][j+1]. Else, max(dp[i+1][j], dp[i][j+1])." },
    algorithm: ["Create 2D DP matrix of size (m+1) x (n+1) initialized to 0.", "Iterate from bottom-right to top-left.", "If text1[i] == text2[j], add 1 to diagonal value.", "Else, take max of right and bottom values.", "Return dp[0][0]."],
    code: { python: "def longestCommonSubsequence(text1, text2):\n    dp = [[0]*(len(text2)+1) for _ in range(len(text1)+1)]\n    for i in range(len(text1)-1, -1, -1):\n        for j in range(len(text2)-1, -1, -1):\n            if text1[i] == text2[j]:\n                dp[i][j] = 1 + dp[i+1][j+1]\n            else:\n                dp[i][j] = max(dp[i][j+1], dp[i+1][j])\n    return dp[0][0]", java: "class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        int[][] dp = new int[text1.length()+1][text2.length()+1];\n        for(int i=text1.length()-1; i>=0; i--) {\n            for(int j=text2.length()-1; j>=0; j--) {\n                if(text1.charAt(i) == text2.charAt(j)) dp[i][j] = 1 + dp[i+1][j+1];\n                else dp[i][j] = Math.max(dp[i+1][j], dp[i][j+1]);\n            }\n        }\n        return dp[0][0];\n    }\n}" },
    complexity: { time: "O(n*m)", timeExplanation: "Nested loops.", space: "O(n*m)", spaceExplanation: "2D DP array." }
  },
  {
    id: 45, title: "0/1 Knapsack Problem", category: "Dynamic Programming", difficulty: "Medium",
    problem: { explanation: "Maximize value in knapsack of capacity W given weights and values of items.", example: { input: "W=50, wt=[10,20,30], val=[60,100,120]", output: "220" }, intuition: "DP state represents max value for capacity w. For each item, decide to include or exclude." },
    algorithm: ["Init DP array size W+1 with 0s.", "For each item i:", "Iterate capacity w from W down to wt[i].", "dp[w] = max(dp[w], val[i] + dp[w-wt[i]]).", "Return dp[W]."],
    code: { python: "def knapSack(W, wt, val, n):\n    dp = [0] * (W + 1)\n    for i in range(n):\n        for w in range(W, wt[i]-1, -1):\n            dp[w] = max(dp[w], val[i] + dp[w - wt[i]])\n    return dp[W]", java: "class Solution {\n    int knapSack(int W, int wt[], int val[], int n) {\n        int[] dp = new int[W + 1];\n        for(int i=0; i<n; i++) {\n            for(int w=W; w>=wt[i]; w--) {\n                dp[w] = Math.max(dp[w], val[i] + dp[w - wt[i]]);\n            }\n        }\n        return dp[W];\n    }\n}" },
    complexity: { time: "O(n*W)", timeExplanation: "Loop over items and capacity.", space: "O(W)", spaceExplanation: "Optimized to 1D array." }
  },
  {
    id: 46, title: "Longest Increasing Subsequence", category: "Dynamic Programming", difficulty: "Medium",
    problem: { explanation: "Find length of longest strictly increasing subsequence.", example: { input: "nums = [10,9,2,5,3,7,101,18]", output: "4 ([2,3,7,101])" }, intuition: "DP array where dp[i] is LIS ending at i. Compare with all previous elements." },
    algorithm: ["Init dp array with 1s.", "For i from 0 to n: For j from 0 to i:", "If nums[j] < nums[i], dp[i] = max(dp[i], 1 + dp[j]).", "Return max(dp)."],
    code: { python: "def lengthOfLIS(nums):\n    dp = [1] * len(nums)\n    for i in range(len(nums)):\n        for j in range(i):\n            if nums[j] < nums[i]:\n                dp[i] = max(dp[i], 1 + dp[j])\n    return max(dp)", java: "class Solution {\n    public int lengthOfLIS(int[] nums) {\n        int[] dp = new int[nums.length];\n        Arrays.fill(dp, 1);\n        int max = 1;\n        for(int i=0; i<nums.length; i++) {\n            for(int j=0; j<i; j++) {\n                if(nums[j] < nums[i]) dp[i] = Math.max(dp[i], 1 + dp[j]);\n            }\n            max = Math.max(max, dp[i]);\n        }\n        return max;\n    }\n}" },
    complexity: { time: "O(n^2)", timeExplanation: "Double loop. Can be optimized to O(n log n) with Binary Search.", space: "O(n)", spaceExplanation: "DP array." }
  },
  {
    id: 47, title: "House Robber", category: "Dynamic Programming", difficulty: "Medium",
    problem: { explanation: "Max money robbed without robbing adjacent houses.", example: { input: "nums = [2,7,9,3,1]", output: "12 (2+9+1)" }, intuition: "At each house i, max money is max(rob i + max from i-2, max from i-1)." },
    algorithm: ["Track two variables: rob1 (max from i-2) and rob2 (max from i-1).", "Iterate array: temp = max(n + rob1, rob2).", "rob1 = rob2; rob2 = temp.", "Return rob2."],
    code: { python: "def rob(nums):\n    rob1, rob2 = 0, 0\n    for n in nums:\n        temp = max(n + rob1, rob2)\n        rob1, rob2 = rob2, temp\n    return rob2", java: "class Solution {\n    public int rob(int[] nums) {\n        int rob1 = 0, rob2 = 0;\n        for(int n : nums) {\n            int temp = Math.max(n + rob1, rob2);\n            rob1 = rob2;\n            rob2 = temp;\n        }\n        return rob2;\n    }\n}" },
    complexity: { time: "O(n)", timeExplanation: "One pass.", space: "O(1)", spaceExplanation: "Two vars." }
  },
  {
    id: 48, title: "Word Break", category: "Dynamic Programming", difficulty: "Medium",
    problem: { explanation: "Can string be segmented into space-separated sequence of dictionary words?", example: { input: "s='leetcode', dict=['leet','code']", output: "true" }, intuition: "DP array where dp[i] is True if s[:i] can be segmented. Check if suffix is in dict and prefix dp is True." },
    algorithm: ["Init dp size len(s)+1 to False. dp[len(s)] = True (working backwards).", "Loop i from len(s)-1 down to 0.", "Loop over words: if s[i : i+len(w)] == w, dp[i] = dp[i + len(w)].", "Return dp[0]."],
    code: { python: "def wordBreak(s, wordDict):\n    dp = [False]*(len(s)+1)\n    dp[len(s)] = True\n    for i in range(len(s)-1, -1, -1):\n        for w in wordDict:\n            if i+len(w) <= len(s) and s[i:i+len(w)] == w:\n                dp[i] = dp[i+len(w)]\n            if dp[i]: break\n    return dp[0]", java: "class Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n        boolean[] dp = new boolean[s.length() + 1];\n        dp[s.length()] = true;\n        for(int i=s.length()-1; i>=0; i--) {\n            for(String w : wordDict) {\n                if(i+w.length() <= s.length() && s.substring(i, i+w.length()).equals(w)) {\n                    dp[i] = dp[i+w.length()];\n                }\n                if(dp[i]) break;\n            }\n        }\n        return dp[0];\n    }\n}" },
    complexity: { time: "O(n * m * k)", timeExplanation: "n=string len, m=num words, k=max word len.", space: "O(n)", spaceExplanation: "DP array." }
  },
  {
    id: 49, title: "Edit Distance", category: "Dynamic Programming", difficulty: "Hard",
    problem: { explanation: "Min operations (insert, delete, replace) to convert word1 to word2.", example: { input: "w1='horse', w2='ros'", output: "3" }, intuition: "2D DP. If chars match, dp[i][j] = dp[i-1][j-1]. Else, 1 + min(insert, delete, replace)." },
    algorithm: ["2D array (m+1)x(n+1).", "Fill first row and col with 0,1,2...", "If match: take diagonal.", "Else: 1 + min(top, left, diag)."],
    code: { python: "def minDistance(word1, word2):\n    dp = [[0]*(len(word2)+1) for _ in range(len(word1)+1)]\n    for i in range(len(word1)+1): dp[i][0] = i\n    for j in range(len(word2)+1): dp[0][j] = j\n    for i in range(1, len(word1)+1):\n        for j in range(1, len(word2)+1):\n            if word1[i-1] == word2[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n            else:\n                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])\n    return dp[-1][-1]", java: "class Solution {\n    public int minDistance(String w1, String w2) {\n        int[][] dp = new int[w1.length()+1][w2.length()+1];\n        for(int i=0; i<=w1.length(); i++) dp[i][0] = i;\n        for(int j=0; j<=w2.length(); j++) dp[0][j] = j;\n        for(int i=1; i<=w1.length(); i++) {\n            for(int j=1; j<=w2.length(); j++) {\n                if(w1.charAt(i-1) == w2.charAt(j-1)) dp[i][j] = dp[i-1][j-1];\n                else dp[i][j] = 1 + Math.min(dp[i-1][j-1], Math.min(dp[i-1][j], dp[i][j-1]));\n            }\n        }\n        return dp[w1.length()][w2.length()];\n    }\n}" },
    complexity: { time: "O(n*m)", timeExplanation: "Fill 2D grid.", space: "O(n*m)", spaceExplanation: "2D grid space." }
  },
  {
    id: 50, title: "Unique Paths", category: "Dynamic Programming", difficulty: "Medium",
    problem: { explanation: "Robot moving right/down to reach bottom-right. How many unique paths?", example: { input: "m=3, n=7", output: "28" }, intuition: "Paths to (r,c) = Paths to (r-1,c) + Paths to (r,c-1). Can optimize to 1D array." },
    algorithm: ["Init 1D DP array of size n with 1s.", "Loop m-1 times (rows).", "Loop from col 1 to n-1: dp[c] = dp[c] + dp[c-1].", "Return dp[n-1]."],
    code: { python: "def uniquePaths(m, n):\n    row = [1] * n\n    for _ in range(m - 1):\n        newRow = [1] * n\n        for j in range(1, n):\n            newRow[j] = newRow[j - 1] + row[j]\n        row = newRow\n    return row[-1]", java: "class Solution {\n    public int uniquePaths(int m, int n) {\n        int[] dp = new int[n];\n        Arrays.fill(dp, 1);\n        for(int i=1; i<m; i++) {\n            for(int j=1; j<n; j++) {\n                dp[j] += dp[j-1];\n            }\n        }\n        return dp[n-1];\n    }\n}" },
    complexity: { time: "O(m*n)", timeExplanation: "Loop rows and cols.", space: "O(n)", spaceExplanation: "1D DP array." }
  }
];
