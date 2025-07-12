import trimesh
import os

# Ensure script always writes to its own directory
script_dir = os.path.dirname(os.path.abspath(__file__))
out_path = os.path.join(script_dir, 'cube.glb')

cube = trimesh.creation.box(extents=(1, 1, 1))
cube.export(out_path)
print(f'cube.glb generated at {out_path}') 