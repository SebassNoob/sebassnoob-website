import json
import os

fp_name = os.path.dirname(os.path.abspath(__file__))

def get_projects() -> dict:
  with open(f'{fp_name}/content/projects/projects.json') as f:
    projects = json.load(f)
  return projects