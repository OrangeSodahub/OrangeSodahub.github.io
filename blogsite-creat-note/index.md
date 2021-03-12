# BLOGSITE-BUILD-NOTE


<!-- toc -->

I've jot down here the essentials of creating my first blog using Hugo for future reference.Even though there are a lot of resources and instructions on the Internet, it is still more convenient to view mine. Also, the official website of Hugo offers the most correct, formal descriptions and guidelines for everyone but, that's too flexible and hard to percisely find out what we individually really need. And here I write down the most concise procedures from the new user's perspective. 

> Tips: the words or pharses which are set bold in order to draw your attention are important, they usually are the name of file or foldr you 'll operate or some shortcode you 'll type them yourself and so on. And some paragraph that are framed in gray squares apparantly contains the codes and you can directly copy them through click the button in the upper right without typing them in the flesh. Attention.

[for windows user]

## INSTALL CHOCOLATE

More info: [https://chocolatey.org](https://chocolatey.org)

Simply explanation: the Chocolaty is a tool we use to install and setup the hugo.

- First, ensure that you are using an **administrative shell** - you can also install as a non-admin, check out [Non-Administrative Installation](https://docs.chocolatey.org/en-us/choco/setup#non-administrative-install).

- Install with powershell.exe

  With PowerShell, you must ensure [Get-ExecutionPolicy](https://go.microsoft.com/fwlink/?LinkID=135170) is not Restricted. We suggest using **Bypass** to bypass the policy to get things installed or **AllSigned** for quite a bit more security :

  Run **Get-ExecutionPolicy**. If it returns **Restricted**, then run **Set-ExecutionPolicy** AllSigned or **Set-ExecutionPolicy Bypass -Scope Process**.

  Now run the following command:Paste the text into your shell and press Enter.

  ```
  Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
  ```

- Wait a few seconds for the command to complete.

- Type **choco** to see your choco version or **choco -** to see more instructions.

## INSTALL HUGO

There are many other methods to install hugo:

- Directly download the source file and configure manually. Then Download the appropriate version for your platform from [Hugo Releases](https://github.com/gohugoio/hugo/releases).
- Chocolatey(Windows) for whom uses Chocolaey for package management.
- Scoop(Windows) for whom uses Scoop for package management.

Here we use Chocolatey for package management, you can install Hugo with the following cmd code:

install with chocolatey.ps1

```
choco install hugo -confirm
```

Or the "extended" Sass/Scss version:

```
choco install hugo-extended -confirm
```

Wait and if you see no errors occur then Hugo is ready.

## BUILD A SITE AND CREAT A POST

- Select a folder as your site's root directory. Any name of it is OK.

- Go to the root directory and run the CMD command:

  ```
  hugo new site XXX
  ```

  Here "XXX" is your site's name then you'll see it generates a new folder named "XXX" and that is your really site's local directory. If you succeed, you'll see a new folder named "XXX" right in the current directory.

- Double click the site's folder to go to the site's local directory and run the CMD command:

  ```
  hugo new posts/my-first-post.md
  ```

  Here "posts" is the name of the folder that contains your .md post file named "my-first-post". Double click the "content" folder and you'll see it.

At this time a basic site has been successfully built. And untill now all the steps are so easy and simple to finish because they are the ways everyone must pass as the fundermental.

## SIMPLY CONFIGURE YOUR SITE

### Quickly comfigure a theme

Comfigure a theme for you site and make it look different and personal. That's to say use many of CSS files and JS filse and others to decorate, configure the pages according to your will, like clothing a puppy, to make it more like a real website. 

> Tips: As a new user I've been puzzled and beset here for a long time because ignorance of the construction of these new things. I looked up to so many many information and material including others' blogsite-build-note or experiences. And if you really want to be more clear about the construction then [[BLOGSITE-CONSTRUCTI]]() can help you. It also help you to understand how to config your site first.

Here are steps of quick method:

- First enter the website of hugo themes: https://themes.gohugo.io/

- Glance over the diverse hugo themes and select one theme you prefer to and click it.

- On the theme page,  you can browse the style of the theme . Find the "**Quick Start**" (maybe it dosen't exsist then skip current and subsequent steps.) or find directly the command to add the repository into your Hugo Project repository as a submodule. The command like this:

  ```
  git submodule add https://github.com/luizdepra/hugo-coder.git themes/hugo-coder
  ```

- Configure your **config.toml** which can be found in the site's root directory. You can only change the **theme** configuration to the name of your wanted theme's name. Or a recommended way is copy the **config.toml** inside the exampleSite in the theme's directory which you just added and it can be seen in the **themes** folder.

- (If you find the "Quick Start" before then skip current and subsequent setps) If it doesn't exist the command you can directly clone the theme to local then do like this: on the top or the page of the theme you can't miss the two or sometimes three or other quantitis buttons right left, behind the heading. Find the one which the word "DOWNLOAD" on it. Click it and go to the source webpage "Github repository" and again find the button which represent "**DOWNLOAD**". Simply choose "DOWNLOAD as ZIP" and unzip. 

- Once you download them to your root directory then copy or cut them and paste to the folder "themes". Last, back to root directory and find a file named "**.gitmodules**" to open it. You'll find several similar statements if you have the experience of using command "git submodule". Write one in their image and the url is right the URL of the webpage which you download the zip source from. Or directly just refer to this:

  ```
  [submodule "themes/ananke"]
  	path = themes/ananke
  	url = https://github.com/budparr/gohugo-theme-ananke.git
  ```

  You must replace the name of theme and the path and the url accordingly.

- Open the file "**config.toml**" and find the line "theme", add the name of your choice and the simplest configuration is already set. Further you can modify some of configurations in the config.toml arrording to your preference but that will be detailed explained [here,]() not in the current post.

- Run the CMD command **hugo server -D**  or **hugo server** in the site's root directory to see the result at `http://localhost:1313/. The fomer which contains "-D" means all of your post files will be pushed to local server whether or not it's labled as draft, so the latter only show the posts which have the "false" value of the "draft".  

### Correctly edit your post

Our post files are saved as the form of markdown and in the "content" folder. We should only input what we want to show on the site in these files. For briefness and convenience, we can use "**Typora**" or just "**VScode**" to edit these files. The former is recommended.

[More info about Typora:]: https://typora.io/	"a very nice markdown editor"

And if you use the VScode you cannnot view of some of the styles of markdwon languages.

## POST TO WEBPAGES

A local visalbe blogsite has already been built basically and now it's time to push it to webpages online so that everyone that connects to internet can browse it. Here we have many methods, like Github pages, Gitee pages, and Gitlab pages. Each of them has its own merits. I'll explain some differences among them later.

Here we use Github pages. 

1. First you must own a github account. That's not difficult. Go to http://github.com and sign up.

2. Creat a new repository and give it name "XXX.github.io". "XXX" equals to your account name. Besides the name can only be this one, not any others. That's the only rule.

3. Then we need Git. (If you don't have or don't know it, here[Git][https://www.zonlin.cn/Git/]) Go back to your root directory and run the CMD command **hugo**, if no errors or warnings occur then your site is already successfully post to a new folder named "**public**" in the root. Change the current directory to "**public**", right-click to choose the "**Git bash here**" then a new command line window will start. Now we need to connect the local repostiory with the remote repostiory(Github repo), use git commands:

   ```
   git remote add origin https://github.com/Your account name/Your repository name.git
   git remote -v #Check the address of your remote repository
   git remote rm origin #Disconnect the local repo with the remote.
   ```

   If you want to connect not only one remote reprository then add it just like the first line above. 

   ```
   git remote add XXX XXX
   ```

   The first "XXX" represents the nickname of your remote repo---you need it to call it in local. The second "XXX" is your repo's address like the first line.

   Once you successfully connect the local and the remote, now push all of your contents to your remote repository so that Github pages could configure your site online automatically. Remember the following commands:

   ```
   git add .
   git commit -m "your annotation"
   git push -u origin master
   ```

   Some solutions of errors:

## ENRICH YOUR STYLES

> In this section many indexs are offered to you to direct to another page or pages that describe a certain topic. You can over view all of them here and choose one or more. And that's a necessary situation so if something is so brief that it could be explain within several lines then no links are necessary.

### Make your contents searchable---Algolia

As our posts becoming more and more, how to search for a certain topic we want through some key words? The biggest drawback is the lost of search. That's it---algolia. Go to [SEARCH-WITH-ALGOLIA](https://www.zonlin.cn/search-with-algolia/) and achieve it.

### Configure the TOC(table of content)

### Add the comment plugin

### Add pages view record and dispaly

### Add statistical function


