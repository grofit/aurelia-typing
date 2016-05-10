export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-typing');

    aurelia.start().then(a => a.setRoot('src/app'));
}