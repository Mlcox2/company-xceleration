from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
source = root / 'public' / 'assets' / 'images' / 'logo.png'
out = root / 'public' / 'assets' / 'images' / 'logo-dark.png'

if not source.exists():
    raise FileNotFoundError(f'Missing source logo: {source}')

img = Image.open(source).convert('RGBA')
navy = (12, 22, 49, 255)

pixels = img.load()
width, height = img.size

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if a == 0:
            continue

        is_white = r > 220 and g > 220 and b > 220
        is_orange = r > 180 and g < 180 and b < 150

        if is_white:
            pixels[x, y] = navy
        elif not is_orange and (r < 25 and g < 25 and b < 25):
            pixels[x, y] = navy

img.save(out)
print(f'Created {out}')
