
import os
import markdown

def get_blogposts():


    file_paths = [f"{os.getcwd()}/server/content/blogContent/{file}" for file in os.listdir(f"{os.getcwd()}/server/content/blogContent") if os.path.isfile(f"{os.getcwd()}/server/content/blogContent/{file}")]

    res = []
    for f in file_paths:
        with open(f, 'r') as file:
            res.append(markdown.markdown(file.read()))


    return res