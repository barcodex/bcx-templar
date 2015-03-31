# bcx-templar

This module wraps text-processor library called bcx-temple, providing an access to file system templates, thus becoming a template-processing engine.

We believe in "convention over configuration" principle, so the module assumes that template files are stored in "templates" folder and all of them have .html extension.

So, when doTemplate('goodName', data) is called, the code will look for the file called "goodName.html" in "templates" folder.

Besides doTemplate, module has also a method called loopTemplate and it allows to process the same template in the loop - as many iteration as many objects are specified with data array in the second parameter.

## Installation

```
npm install bcx-templar
```

## Example

This module comes with example.js. Run it with node to see how it works:

```
node example.js
```

## Extension

Feel free to fork the project and use your own modifier sets. Just change dependencies in package.json and require different libraries in the top of index.js.
