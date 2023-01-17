# mfe-shopping


Lets build a micro frontend Using Module Federation in Angular. We can build a sample shopping cart app.

Module Federation allows loading Micro Frontends at runtime. Module Federation is an integrated part of web pack 5, and hence, it works with all modern web frameworks. In order to allow loading separately compiled and deployed micro frontends, Module Federation defines two roles: the host and the remote that is a container and your micro frontends.

Since angular 12 angular CLI uses the webpack 5 so we can easily add the module federation plugin using ng add @angular-architects/module-federation in both of container and your micro frontend. We just have to configure exposed moduled in the container as well as micro frontend


![A shopping cart example using Module Federation ](mfe-shopping.png "Module Federation shopping cart example")

We see a banner with a shopping cart and an user accounts section, and products all within a shell. The shopping cart is its own app. The products are their own as well. All connected within the shell. 

And lets see now.