"""Compatibility entrypoint: the current site is authored in React/TypeScript."""
from pathlib import Path
import subprocess
raise SystemExit(subprocess.call(['npm','run','build'],cwd=Path(__file__).resolve().parent))
