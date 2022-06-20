# blog-ember-json

> This README outlines the details of collaborating on this Ember application.
> For this project, I used a JSON database provided by [Typicode](https://jsonplaceholder.typicode.com/), with two types of interpolating data: [Users](https://jsonplaceholder.typicode.com/users), and [Posts](https://jsonplaceholder.typicode.com/posts)

## This Version

> This version uses JsonAPI, instead of RestAPI (only using REST on serializers, owe to the incompatible json format provided by typicode)
> This version also has a custom pagination made to update dynamically, with the number of posts

------------------

> You can check this version online on [Github](https://github.com/iurianu/ember-blog-json-api), or deployed on [Netlify](https://ember-blog-json-api.netlify.app/)

> This version is an improved version of the blog app created after the youtube tutorial, which you can check on [Github](https://github.com/iurianu/ember-blog-rest-api), and on [Netlify](https://iurianu-ember-blog.netlify.app/)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

### Configure App to work with SCSS, and Bootstrap, and install Font Awesome

* `ember install ember-cli-sass bootstrap`
* `ember install @fortawesome/ember-fontawesome`
* `npm i --save-dev @fortawesome/free-brands-svg-icons`
* `npm i --save-dev @fortawesome/free-regular-svg-icons`

* change `styles/app.css` to `styles/app.scss`
* in `styles/app.scss` add the line `@import 'bootstrap';`
* add the following lines to your `ember-cli-build.js` file
* I also added Font Awesome, to be able to use the Ember Models in Footer

```javascript

// module.exports = function (defaults) {
//   let app = new EmberApp(defaults, {
 module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['node_modules/bootstrap/scss'],
    },
  });
  app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');

  return app.toTree();
//
//  return app.toTree();

```

> In an `asses/scripts` component I added some javascript required for bootstrap's tooltips, and I use it on the `application.hbs` template, together with the `header`, and `footer` component.

```javascript
<script>     
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
</script>
```
