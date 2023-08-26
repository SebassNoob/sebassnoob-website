import json
import os
import markdown

fp_name = os.path.dirname(os.path.abspath(__file__))

def get_projects() -> dict:
  with open(f'{fp_name}/content/projects/projects.json') as f:
    projects = json.load(f)
  return projects

def get_skills() -> dict:
  with open(f'{fp_name}/content/skills/skills.json') as f:
    skills_items = json.load(f).items()

  # list of file paths (md) to open
  to_open = [item[1]['description'] for item in skills_items]
  
  # open each file and add to skills dict
  for item, fp in zip(skills_items, to_open):
    with open(f'{fp_name}/content/skills/{fp}') as f:
      res = markdown.markdown(f.read())

      item[1]['description'] = res

  # convert from items to dict
  skills = dict(skills_items)
  return skills