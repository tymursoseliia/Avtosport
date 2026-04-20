import os, re

dirs = ['src']
exts = ['.tsx', '.ts', '.js', '.jsx', '.md', '.txt', '.html']
replacements = [
  (r'СД-СЕРВИС', 'АВТОСПОРТ'),
  (r'СД-Сервис', 'Автоспорт'),
  (r'Сд-сервис', 'Автоспорт'),
  (r'sd-service', 'avtosport'),
  (r'214012, Смоленская область, г Смоленск, Ново-Московская ул, д\. 2/8, офис 305', '610048, Кировская область, г. Киров, ул. Московская, д. 166А, этаж/помещ. 2/15')
]

for d in dirs:
    for root, _, files in os.walk(d):
        for f in files:
            if any(f.endswith(e) for e in exts):
                path = os.path.join(root, f)
                with open(path, 'r', encoding='utf-8') as file:
                    content = file.read()
                mod = False
                for s, r in replacements:
                    if re.search(s, content):
                        content = re.sub(s, r, content)
                        mod = True
                if mod:
                    with open(path, 'w', encoding='utf-8') as file:
                        file.write(content)
                    print(f"Updated: {path}")
print("Готово!")
