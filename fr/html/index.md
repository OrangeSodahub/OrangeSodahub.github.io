# HTML


## Something about HTML

### What is HTML?

- HTML is a language used to describe web pages.
- HTML is Hyper Text Markup Language.
- Markup language is a set of markup tags.
- HTML uses markup tags to describe Web pages.

### HTML tag

HTML markup tags are often referred to as HTML tags.

- HTML tags are keywords surrounded by Angle brackets, such as \<HTML\>.
- HTML tags usually come in pairs, such as \<b> and \</b>.
- The first tag in a tag pair is the start tag and the second tag is the end tag.
- Start and end tags are also known as open and closed tags.

### HTML document = Web page

- HTML documents describe Web pages.
- HTML documents contain HTML tags and plain text.
- HTML documents are also called Web pages.

## HTML editor

### 2.1 Use Notepad or TextEdit to edit HTML

Also you can use a professional HTML editor to write HTML.

- Adobe Dreamweaver
- Microsoft Expression Web
- CoffeeCup HTML Editor

Here are four steps fo using text editor to build a web page.

1. Start Notepad.

2. Type the HTML code in the Notepad. e.g.:

   ```
   <!DOCTYPE HTML>
   <html>
   <body>
   
   <h1>Heading level 2</h1>
   
   <p>Paragraph 1</p>
   
   </body>
   </html>
   ```

3. Save the files as HTML

   Select "Save As" from the file menu in Notepad and there are no differences between the extension .htm and .html.

4. Run the HTML file in a browser

   Start the browser and select "Open" from "File" from File menu or directly double click the HTML file you just saved. Then you can see the content you just typed in the Web page.

## HTML Basic

Here are four the most commonly used HTML tags:

### HTML Heading

HTML headings are defined wtih tags \<h1>-\<h6>. e.g.:

```
<h1>Heading level 1<\h1>
<h2>Heading level 2<\h2>
<h3>Heading level 3<\h3>
```

### HTML Paragraph

HTML paragraphs are defined with tags \<p>. e.g.:

```
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

### HTML Link

HTML links are defined with tags \<a>. e.g.:

```
<a href="https://orangesodahub.github.io">This is a link.</a>
```

Specify the address of the link in the "herf" attribute.

### HTML Image

HTML images are defined with tags \<img>. e.g.:

```
<img src="orangesoda.jpg" width="100" height="20" />
```

The name and size of the image are provided as attributes.

## HTML Element

HTML doucments are defined by HTML elements.

HTML element refers to all the codes from the start tag to the end tag.

### HTML Element Syntax

- HTML element begin with openning tag.
- HTML element terminates with closing tag.
- The content of the element is the content between the start tag and the end tag.
- Some HTML elements have empty content.
- An empty element is closed in the start tag (namely ends with the end of the start tag), like how the HTML images are defined.
- Most HTML elements can have attributes.

### Nested HTML Element

Most HTML elements are allowed to be nested (can include other HTML elements). HTML documents consist of nested HTML elements.

### Empty HTML Element

The HTML elements which have no content are called Empty HTML Element and they are closed in the start tag.  

For example, \<br> is an empty element without closing tag. (\<br> tag defines linefeed) In XHTML, XML, and future versions of HTML, all elements must be closed.

Adding slash in the start tag like \<br/> is the right way to close the empty elements.

### Use Lowercase Tag

HTML tags are not case sensitive. W3C recommends lowercase in HTML4 and Lowercase is mandatory in future (X) version of HTML.


