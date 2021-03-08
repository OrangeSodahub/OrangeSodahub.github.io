# MARKDOWN-USAGE


<!-- toc -->

Markdown is a lightwight markup language with a compact typographical syntax that allows people to focus more on content than typography. It uses easy-to-read and easy-to-write plain text format to write documents, can be mixed with HTML, can export HTML, PDF and its own .md format files. Markdown is widely used on websites such as Github and Wikipedia, as well as on major blogging platforms like WordPress, Drupal and Short Book because of its simplicity, efficiency, ease of reading and writing.

You can try and feel it online [Markdown Online Compiler](https://markdown.com.cn/editor/).

## Markdown Heading Syntax

To create a title, add a well sign `#` before the word or the phrase which you want to make the title's name. The number of that sign `#` represents the level of the title. As the level increases, the title's size decrease arrordingly.For example, adding three #s creates a third-level Header<h3>.

|         Markdown         |            HTML             |     Preview     |
| :----------------------: | :-------------------------: | :-------------: |
|   `# Heading level 1`    | `<h1>Heading level 1 </h1>` | Heading level 1 |
|   `## Heading level 2`   | `<h2>Heading level 2</h2>`  | Heading level 2 |
|  `### Heading level 3`   | `<h3>Heading level 3 </h3>` | Heading level 3 |
|  `#### Heading level 4`  | `<h4>Heading level 4 </h4>` | Heading level 4 |
| `##### Heading level 5`  | `<h5>Heading level 5 </h5>` | Heading level 5 |
| `###### Heading level 6` | `<h6>Heading level 6 </h6>` | Heading level 6 |

### Optional Grammar

You can also add any number of signs `==` below the text to identify first level headings, or `--` signs to identify second level headings.

For example, you typed one text and then press Enter, move the cursor below the piece of text, type several = signs and you succeed to make that piece of text your title.

### Attention

Different Markdown applicantions handle Spaces between # and title inconsistently. For compatibility, use a space to seperate # from the title.

|      Do this       |   Don't do this   |
| :----------------: | :---------------: |
| `# Here's Heading` | `#Here's Heading` |

## Paragraph Syntax

To create a new paragraph, separate one or more lines of text with blank lines, at this point, you can see a downward light-colored arrow on the right of the cursor and then press Enter.

|            Markdown             |                  HTML                  |            Preview            |
| :-----------------------------: | :------------------------------------: | :---------------------------: |
| `I really like using Markdown.` | `<p>I really like using Markdown.</p>` | I really like using Markdown. |

### Attention

Remenber not to use `spaces` or `tabs` to indent paragraphs.

## Linefeed Syntax

To create a newline, add two or more Spaces to the end of a line then press Enter.

|                         Markdown                          |                             HTML                             |                       Preview                        |
| :-------------------------------------------------------: | :----------------------------------------------------------: | :--------------------------------------------------: |
| `This is the first line.`  `And this is the second line.` | `<p>This is the first line.<br>And this is the second line,</p>` | This is the first line. And this is the second line. |

### Attention

Nearly every Markdown applicantion supports two or more Spaces for line feeds, known as trailing whitespace, but this is controversial because it's hard to trailing whitespace directly in an editor, and many people add two Spaces to every sentence intentionally or unintentionally. For this reason, you may want to wrap lines in ways other than closing Spaces. Fortunately, almost every Markdown applicantion supports another way to wrap a line: the `br` tag of HTML.

And for compatibility, add a "closing space" to the end of the line or an HTML "br" tag to wrap the line. Remenber the two letters are enclosed by a pair of Angle brackets.

There are two other methods which you'd better not use. CommonMark and several other lightweight markup languages support line wrapping by adding a backslah \ to the end of a line, but not all Markdown applicantions support this, so it is not recommended for compatibility reasons. And at least two lightweight markup languages allow you to wrap lines without adding anything at the end of a line, just by typing retrun.
