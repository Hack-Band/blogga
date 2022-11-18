from pathlib import Path

import environ

env = environ.Env()

# Project base directory
BASE_DIR = Path(__file__).parent.parent

# Set default values for env variables if they are not set
env.read_env(BASE_DIR / ".env")
