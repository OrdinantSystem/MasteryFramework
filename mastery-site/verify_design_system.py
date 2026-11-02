"""Compatibility entrypoint for the shared React build and validation gate."""
from pathlib import Path
import subprocess
raise SystemExit(subprocess.call(['npm','run','check'],cwd=Path(__file__).resolve().parent))
