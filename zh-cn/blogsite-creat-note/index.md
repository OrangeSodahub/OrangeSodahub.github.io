# HUGO建站


<!-- toc -->

I've jot down here the essentials of creating my first blog using Hugo for future reference.Even though there are a lot of resources and instructions on the Internet, it is still more convenient to view mine.

[windows]

## INSTALL CHOCOLATE

More info: [https://chocolatey.org](https://chocolatey.org)/

- First, ensure that you are using an **administrative shell** - you can also install as a non-admin, check out [Non-Administrative Installation](https://docs.chocolatey.org/en-us/choco/setup#non-administrative-install).

- Install with powershell.exe

  With PowerShell, you must ensure [Get-ExecutionPolicy](https://go.microsoft.com/fwlink/?LinkID=135170) is not Restricted. We suggest using `Bypass` to bypass the policy to get things installed or `AllSigned` for quite a bit more security :

  Run `Get-ExecutionPolicy`. If it returns `Restricted`, then run `Set-ExecutionPolicy AllSigned` or `Set-ExecutionPolicy Bypass -Scope Process`.

  Now run the following command:Paste the text into your shell and press Enter.

  ```
  Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
  ```

- Wait a few seconds for the command to complete.

- Type `choco` to see your choco version or `choco -` to see more instructions.

 

## INSTALL HUGO

There are many other methods to install hugo:

- 

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

## BUILD A SITE

- Select a folder as your site's root directory. Any name of it is OK.

- Go to the root directory and run the CMD command:

  ```
  hugo new site XXX
  ```

  Here "XXX" is your site's name then you'll see it generates a new folder named "XXX" and that is your really site's local directory.

- Double click the site's folder to go to the site's local directory and run the CMD command:

  ```
  hugo new posts/my-first-post.md
  ```

  Here "posts" is the name of the folder that contains your .md post file named "my-first-post". Double click the "content" folder and you'll see it.

At this time a basic site has been successfully built.

## EDIT THE SITE FURTHER

### Quickly comfigure a theme

Comfigure a theme for you site and make it look different and personal. Here are steps of quick method:

- First enter the website of hugo themes: https://themes.gohugo.io/

- Glance over the diverse hugo themes and select one theme you prefer to and click it.

- On the theme page,  you can browse the style of the theme . Find the "Quick Start" (maybe it dosen't exsist) or find directly the command to add the repository into your Hugo Project repository as a submodule. The command like this:

  ```
  git submodule add https://github.com/luizdepra/hugo-coder.git themes/hugo-coder
  ```

- Configure your `config.toml` which can be found in the site's root directory. You can only change the `theme` configuration to the name of your wanted theme's name. Or a recommended way is copy the `config.toml` inside the exampleSite in the theme's directory which you just added and it can be seen in the `themes` folder.

- Further you can modify some of configurations in the `config.toml` arrording to your preference but that will be detailed explained [here,]() not in the current post.

- Run the CMD command `hugo server -D`  of `hugo server` in the site's root directory to see the result at `http://localhost:1313/`.

### Correctly edit your post


