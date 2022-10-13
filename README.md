# Static Site with Contentful

## Requirements
- NodeJS >= 10.16.3
- Contentful space (create an account and project [here](https://www.contentful.com/sign-up/))

## Installation
Run this command to install the project:
```bash
npm install
```
## Credentials
In order to run the project correctly you need to create an `.env` file with the contenful API keys. You can based on the `.env.example` file. Just replace the values of these two variables with your Contentful space credentials
```bash
CF_SPACE="YOUR_CONTENTFUL_SPACE_ID"
CF_ACCESS_TOKEN="YOUR_CONTENTFUL_SPACE_API_KEY"
```
To see instructions on how to get these values go to these links:

[Find Contentful space ID](https://www.contentful.com/help/find-space-id/)

[Create Contentful API keys](https://www.contentful.com/developers/docs/references/authentication/#:~:text=You%20can%20also%20create%20API,and%20create%20your%20first%20token.)

## Dev server
Run the dev server:
```bash
npm run dev
```
Open http://localhost:8080 using your browser to see the site.

## Build the site
Run this command to build the static site:
```bash
npm run build
```

This will output the site in a folder called `build/site`. Serve the `index.html` to see the site.

## Templates
Inside you templates all entry fields are available by the _Field ID_ as defined in your _Content model_. You can reference them directly in your template. For example:

```handlebars
<h3>{{caption}}</h3>
```

This will output the value of the entry's `caption` field. Note, that it's _Field ID_ which is used here and not the field _Name_.

Stacy adds a few special [helpers](https://handlebarsjs.com/#helpers) that you can use in your templates:

* `module <reference field>` - Include module entry referenced by the Reference type field. For example, given that you have a field with ID `paragraphs` and it is a list of references:

  ```handlebars
  {{#each paragraphs}}{{{module this}}}{{/each}}
  ```

* `asset <asset field>` - Include the referred asset, such an image. For example:

  ```handlebars
  {{asset picture}}
  ```

  Currently, only image assets are supported, for which an HTML `<img>` tag is rendered.

* `assetSrc <asset field>` - Get URL of the asset. For example:

  ```handlebars
  <img src="{{assetSrc picture}}">
  ```

* `assetTitle <asset field>` - Get title of the asset. For example:

  ```handlebars
  <img src="{{assetSrc picture}}" alt="{{assetTitle picture}}">
  ```

* `markdown <long text field>` - Render Markdown long text field. For example:

  ```handlebars
  {{{markdown description}}}
  ```

  Note the tripple-braces needed here because the helper generates HTML which needs not to be escaped.

* `richText <rich text field>` - Render rich text field. For example:

  ```handlebars
  {{{richText content}}}
  ```

  As with `markdown`, note the triple-braces.

* `json <field>` - Output internal Contentful JSON representation of the field. For example:

  ```handlebars
  <pre>{{json myField}}</pre>
  ```

  This helper may be useful for diagnosing problems.
