const path = require('path');

let project = new Project('Heaps Test');
project.addAssets('Assets/**');
project.addSources('Sources');
project.addLibrary('heaps');
project.addDefine('resourcesPath=' + path.resolve('Libraries', 'heaps', 'samples', 'res'));
resolve(project);
