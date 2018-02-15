let project = new Project('Heaps Test');
project.addAssets('Assets/**');
project.addSources('Sources');
project.addLibrary('heaps');
resolve(project);
