
import re

def analyze():
    try:
        with open('script.js', 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        stack = [] # Store ('{', line_num) or ('(', line_num)
        
        # Regex to find braces and parens, ignoring comments/strings roughly
        # This is a heuristic, might fail on complex regex literals or template strings with braces
        
        for i, line in enumerate(lines):
            # Remove single line comments
            code = re.sub(r'//.*', '', line)
            
            # Simple iteration over chars
            for char in code:
                if char in '{(':
                    stack.append((char, i+1))
                elif char == '}':
                    if not stack or stack[-1][0] != '{':
                        print(f"Error: Unexpected }} at line {i+1}")
                        return
                    stack.pop()
                elif char == ')':
                    if not stack or stack[-1][0] != '(':
                        print(f"Error: Unexpected ) at line {i+1}")
                        return
                    stack.pop()
        
        if stack:
            print(f"Error: Unclosed {stack[-1][0]} from line {stack[-1][1]}")
            # Print last few unclosed
            for item in stack[-5:]:
                 print(f"  Unclosed {item[0]} from line {item[1]}")

    except Exception as e:
        print(f"Exception: {e}")

analyze()

