
with open('script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(2600, 5150):
    line = lines[i]
    if line.startswith('}') or line.startswith('});'):
        print(f"Line {i+1}: {line.strip()}")

