Frontend Project Template
=========================

This project template shows how to use [Sprockets](https://github.com/sstephenson/sprockets) 
in combination with [guard-sprockets](https://github.com/pferdefleisch/guard-sprockets) 
to have your very own [asset pipeline](http://guides.rubyonrails.org/asset_pipeline.html) 
for projects of any kind. Learn more about [Guard](https://github.com/guard/guard).

Prerequisites
-------------

* Ruby
* [Bundler](http://gembundler.com/)


Usage
-----

Install required Ruby gems with Bundler (you only need to do this once)

    $ bundle install

Start Guard

    $ bundle exec guard start


Customization
-------------

Using my sample code is probably not very useful so you will more than likely want to 
edit the following files:

### Guardfile

Change this to configure where your Sprockets manifest file and assets are located.

Full documentation is available on the 
[guard-sprockets](https://github.com/pferdefleisch/guard-sprockets) Github page.

### Manifest files

`lib/js/application.js`

`lib/js/application.css`

These are the JS and CSS manifest files. Any source files you'd like concatenated 
and/or compiled should be listed in this manifest file.

Full documentation is availble on the [Sprockets](https://github.com/sstephenson/sprockets) 
Github page.