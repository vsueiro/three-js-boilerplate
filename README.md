# three-js-boilerplate

## Class-based Version

The [`class-version/`](https://github.com/vsueiro/three-js-boilerplate/tree/main/class-version) is a _personal_ template for creating **more complex projects**, focused on [data visualization](https://en.wikipedia.org/wiki/Data_and_information_visualization) organized in a way I like:

- JavaScript classes for most things (including as wrappers for [three.js](https://threejs.org/)’ classes)
- Structured into separate files (JS and CSS native imports)
- Includes [d3.js](https://d3js.org/) for reading `.csv` and `.json` files and APIs, with a callback when all Promises are resolved
- Utilizes pointer events (instead of mouse and touch) to define hover and click states on objects in the scene, which I learned from [morozig’s Stack Overflow answer](https://stackoverflow.com/questions/17130940/retrieve-the-same-offsetx-on-touch-like-mouse-event#answer-70515315)
- Supports zoom and orbit with “inertia”, using [BrianSantoso’s OrbitControls + Trackball hack](https://github.com/mrdoob/three.js/issues/13080#issuecomment-677780430)
- Allows for any world size – just change the CSS, and the JS adjusts automatically
- Responsive world (3D and 2D)
- Comes with 2D render on top of the 3D renderer (for labels, etc)
- Uses Freya Holmer’s transition (exponential decay), from [“Lerp smoothing is broken”](https://youtu.be/LSNQuFEDOyQ)

No build steps or package managers – all native web standards.

## Global Variables Version

The [`global-variables-version/`](https://github.com/vsueiro/three-js-boilerplate/tree/main/global-variables-version) is just a minimal and responsive setup for trying out **simpler projects**. I may also recommend students to this version.
