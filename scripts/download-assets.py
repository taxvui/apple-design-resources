"""Fetch the original public Apple previews using only Python's standard library."""
import concurrent.futures
import json
from pathlib import Path
import time
import urllib.request

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = json.loads((ROOT / 'scripts/assets.json').read_text())

def download(entry):
    relative, url = entry
    target = ROOT / relative
    if target.is_file() and target.stat().st_size:
        return relative
    target.parent.mkdir(parents=True, exist_ok=True)
    for attempt in range(3):
        try:
            request = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(request, timeout=60) as response:
                data = response.read()
            if not data:
                raise ValueError('Empty asset response')
            temporary = target.with_suffix(target.suffix + '.tmp')
            temporary.write_bytes(data)
            temporary.replace(target)
            return relative
        except Exception:
            if attempt == 2:
                raise
            time.sleep(attempt + 1)

if __name__ == '__main__':
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        results = list(pool.map(download, MANIFEST.items()))
    print(f'Ready: {len(results)} Apple preview assets.')
