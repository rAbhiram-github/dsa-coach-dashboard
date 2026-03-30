import streamlit as st
import json

# Sample: Load questions from a Python list (converted from your questions.ts)
questions = [
    {
        "id": 1,
        "title": "Two Sum",
        "category": "Arrays",
        "difficulty": "Easy",
        "problem": {
            "explanation": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
            "example": {"input": "nums = [2,7,11,15], target = 9", "output": "[0,1]"},
            "intuition": "Instead of using a nested loop, we can use a hash map to remember the values we have seen so far and their indices. For each number, we check if its complement (target - current number) exists in the map."
        },
        "algorithm": [
            "Initialize an empty hash map to store elements and their indices.",
            "Iterate through the array.",
            "For each element, calculate the complement (target - element).",
            "If the complement is in the map, return the current index and the complement's index.",
            "Otherwise, add the current element and its index to the map."
        ],
        "code": {
            "python": "def twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []",
            "java": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement)) {\n                return new int[] { map.get(complement), i };\n            }\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}"
        },
        "complexity": {
            "time": "O(n)",
            "timeExplanation": "We traverse the list containing n elements exactly once.",
            "space": "O(n)",
            "spaceExplanation": "The hash map stores at most n elements."
        }
    },
    # ... (add more questions here, or load from a JSON file)
]

st.title("DSA Interview Dashboard (Streamlit)")

# Sidebar filters
difficulties = list(set(q["difficulty"] for q in questions))
categories = list(set(q["category"] for q in questions))

difficulty = st.sidebar.selectbox("Difficulty", ["All"] + sorted(difficulties))
category = st.sidebar.selectbox("Category", ["All"] + sorted(categories))

filtered = [q for q in questions if (difficulty == "All" or q["difficulty"] == difficulty) and (category == "All" or q["category"] == category)]

for q in filtered:
    with st.expander(f"{q['title']} [{q['difficulty']}] - {q['category']}"):
        st.markdown(f"**Problem:** {q['problem']['explanation']}")
        st.markdown(f"**Example:** `{q['problem']['example']['input']}` → `{q['problem']['example']['output']}`")
        st.markdown(f"**Intuition:** {q['problem']['intuition']}")
        st.markdown("**Algorithm:**")
        for step in q['algorithm']:
            st.markdown(f"- {step}")
        st.markdown("**Python Code:**")
        st.code(q['code']['python'], language="python")
        st.markdown("**Java Code:**")
        st.code(q['code']['java'], language="java")
        st.markdown(f"**Time Complexity:** {q['complexity']['time']} — {q['complexity']['timeExplanation']}")
        st.markdown(f"**Space Complexity:** {q['complexity']['space']} — {q['complexity']['spaceExplanation']}")
