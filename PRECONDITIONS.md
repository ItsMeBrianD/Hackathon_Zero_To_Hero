# Preconditions
- [Setting up Github](#setting-up-github)
- [Setting up Supabase](#setting-up-supabase)
- [Initializing your project](#initializing-your-project)
- [Setting up Vercel](#setting-up-vercel)


For this workshop, it is assumed that you have:
- A working knowledge of HTML, CSS, and Javascript
  - A basic understanding of [Svelte](https://svelte.dev); if you haven't used it before, I recommend their [excellent tutorials](https://svelte.dev/tutorial/basics). If you complete up to the end of Section 6, that should be enough to complete this workshop.

- A basic knowledge of using a command line
- Your preferred IDE set up the way you like
  - If you aren't sure, [Visual Studio Code](https://code.visualstudio.com/) is a good choice. If you choose to use VSCode, it has a lot of great extensions that work with the tools we will be using. I recommend installing:
    - [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
    - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
    - [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
    - [Prettier - Code Formatting](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Things we will cover:
 - Basic Git Version Control (see [Setting up Github](#setting-up-github), and [Gitkraken's Library of Tutorials](https://www.gitkraken.com/learn/git/tutorials))
 - Building a functional signup / login page with [Supabase](https://supabase.com)
 - Hosting our page with [Vercel](https://vercel.com)

Please complete the items in the preconditions list to ensure you are ready for the workshop. If you have questions or something is unclear, please [file an issue](https://github.com/0c370t/Hackathon_Zero_To_Hero/issues/new).

## Setting up Github
I recommend using [GitKraken](https://www.gitkraken.com/invite/uk5zfsbz), an excellent [git](https://www.gitkraken.com/learn/git/git-download) gui that is free for open source projects.
	<small>If you choose to use Gitkraken, please ensure you sign in with your Github account, this makes working with the repository much easier.</small>

1. If you don't already have one, [create a Github account](https://github.com/signup) (We'll be using this a lot)
3. Next, set up your repository [[❔]](https://www.gitkraken.com/learn/git/tutorials/what-is-a-git-repository)
	1. [Create it on Github](https://github.com/new)
	2. [Clone](https://www.gitkraken.com/learn/git/git-clone) the repository
		1. Don't forget where this gets put on your computer 

## Setting up Supabase
1. [Create an account](https://app.supabase.com/)
2. Set up your first project
	1. Click `New Project`
		1. Name the project `StartupZeroToHero` (or whatever you want).
		2. Set a database password, <sup>_(I **highly** recommend that you save this in a password manager, I recommend [Bitwarden](https://bitwarden.com))_</sup>
		3. Select the region closest to you, for best performance.
		4. Ensure you have the `Free` plan selected, it will be plenty to get through the weekend.
3. Next, we're going to set up our OAUTH credentials. This is how we'll users will sign in to our app. Don't worry about the last section (adding code) 
	4. [How to set up Google OAUTH with Supabase](https://supabase.com/docs/guides/auth/auth-google)
	5. [How to set up Twitter OAUTH with Supabase](https://supabase.com/docs/guides/auth/auth-twitter)

## Initializing your project
1. [Visual Studio **Code**](https://code.visualstudio.com/) is the recommended editor for this stack
	1. The [Svelte Plugin](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) and [Tailwind Plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) make life a lot easier.
2. Ensure you have node version 16+
	1. You can check with `node -v`
	1. If you are on Windows, use [`nvm-windows`](https://github.com/coreybutler/nvm-windows)
	1. If you are on Mac / Linux, use [`nvm`](https://github.com/nvm-sh/nvm)
3. In the repository directory, initialize a new SvelteKit application
    ```bash
    npm init svelte .
    ```
	1. Select:
		1. Template: Skeleton Project
		2. Type Checking: Yes, using Typescript
		3. Linting: Yes
		4. Formatting: Yes
		5. Playwright: No <sup>*Tests are usually good, but we don't have time for that</sup>
4.  [Commit](https://youtu.be/PI-frlPBcL8?t=115) your changes

## Setting up Vercel
1. [Sign in](https://vercel.com/login) to vercel (with your github account)
2. [Create a new project](https://vercel.com/new)
	1. Select the repository you created for this project
	2. Override the `Output Directory` to `.svelte-kit`
![image](https://user-images.githubusercontent.com/10779616/179279695-02618386-b43c-4781-af7c-decaee658ee7.png)
3. Deploy the project, once it has built and deployed, you will be given a URL where your page is now live! That link will be the hosted version of your application any time you push an update to Git.

Congratulations, you are now ready for Hackathon 0 to Hero!