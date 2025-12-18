import re

# Read the file
with open('script.js', 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

print(f"Original length: {len(content)}")

# Find the last occurrence ofDOMContentLoaded closure or just the last safe closure
# We know the corruption is around line 5390
# Let's simple search for the last "});" before index 190000 (approximate) 
# or just take the first 5350 lines and find the last closure there.

lines = content.split('\n')
safe_content = '\n'.join(lines[:5350])

# Find the last valid function closer
last_closure = safe_content.rfind('});')

if last_closure != -1:
    print(f"Found safe closure at {last_closure}")
    # Keep everything up to the closure
    new_content = safe_content[:last_closure+3]
    
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("✅ File truncated successfully")
else:
    print("❌ Could not find safe closure")
