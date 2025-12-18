
try:
    with open('script.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    truncated = lines[:]
    if truncated[-1].strip().startswith('});'):
        truncated.pop()
    
    # Add TWO braces
    truncated.append('} });\n')
    
    with open('test_script.js', 'w', encoding='utf-8') as f:
        f.writelines(truncated)
    print("Created test_script.js")
except Exception as e:
    print(e)
