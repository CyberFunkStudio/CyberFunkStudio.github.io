UV Reveal Animate

Demonstrates how to animate the UVs of a texture (material.map.offset.y), to move an alpha mask
and reveal the tree model, making it appear to grow.

This uses AFrame's built in animation component to drive parameters of a material on a model
buried deep inside of a gltf.

matClipPlane.js is the component that manages the gltf mode (the tree), and handles the animation.
Usually, the animation component works on an attribute directly. But since the attribute is in a material,
inside a gltf, with many other models and materials, we have to animate an attribute on the component, and 
inside the component, expose the parameter we want to change and use this attribue to drive it.

The tree has UVs r