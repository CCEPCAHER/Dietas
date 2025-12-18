
import re

def analyze():
    with open('script.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    stack = [] 
    
    # 2599 is start of DOMContentLoaded. We assume it opens { ( and (
    # But for simplicity, let's start counting from start.
    
    for i, line in enumerate(lines):
        # Strip comments
        code = re.sub(r'//.*', '', line).strip()
        if not code: continue
        
        # Skip regex lines (heuristic)
        if '/' in code and ('[' in code or '(' in code): 
            # This is too aggressive, might skip valid code.
            # But let's try to just count { and }
            pass

        for char in code:
            if char == '{':
                stack.append(('{', i+1))
            elif char == '}':
                if stack and stack[-1][0] == '{':
                    stack.pop()
                else:
                    print(f"Excess }} at line {i+1}")
            elif char == '(':
                stack.append(('(', i+1))
            elif char == ')':
                if stack and stack[-1][0] == '(':
                    stack.pop()
                else:
                    pass # Ignore extra ) for now as regex might confuse
    
    if stack:
        print(f"Unclosed blocks: {len(stack)}")
        print(f"Last unclosed: {stack[-1]}")
        # Print first few unclosed after 3151
        for item in stack:
            if item[1] > 3150:
                 print(f"Unclosed {item[0]} at {item[1]}")
                 break

analyze()

