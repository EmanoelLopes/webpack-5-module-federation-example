# Microfrontends with Webpack 5 Module Federation

## Microfrontends
Martin Fowler defined the Micro-Frontend architecture as "an architectural style where independently deliverable frontend applications are composed into a greater whole". Simply, a Micro-Frontend is a portion of a webpage (not the entire page). In the Micro-Frontend Architecture, there is a "Host" or a "Container"page that can host one or more Micro-Frontends. The Host/Container page can also share some of its own Micro-Frontend components.

## Webpack
webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

## Module Federation

## Main Concepts

### Terminology

host

    The currently running application that is hosting federated remote modules.

remote

    A reference to an external federated module.

expose:

    A module that is exported from an application is “exposed".

module:

    The smallest unit of shareable code. Can be a single file.

bi-directional host:

    A webpack build that is both a host consuming remotes and a remote being consumed by other hosts.


## GOOD READS:

### References:

[Micro Frontends on Martin Fowler's site](https://martinfowler.com/articles/micro-frontends.html)

[Micro Frontends Technology Radar by ThoughtWorks](https://www.thoughtworks.com/pt/radar/techniques/micro-frontends)

[Module Federation]

[Webpack 5 Module Federation Plugin](https://webpack.js.org/concepts/module-federation/#modulefederationplugin-high-level)

[Webpack 5 Module Federation Examples in Github](https://github.com/module-federation/module-federation-examples/tree/master/self-healing)

[Micro Frontend Blog](https://microfrontends.info/microfrontends/)

### Articles:

[Deploying Micro Frontends to AWS Step by Step Using React, Webpack 5, and Module Federation](https://engineering.telia.no/blog/micro-frontends-with-webpack-module-federation)

[Micro frontends with Webpack Module Federation](https://medium.com/swlh/deploying-micro-frontends-to-aws-step-by-step-using-react-webpack-5-and-module-federation-3f97f6f1658c)
