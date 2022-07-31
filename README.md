# Hackathon Zero to Hero

## Table of contents
  - [Preconditions](#preconditions)
  - [Workshop Outline](#workshop-outline)
    - [Connecting to Supabase](#connecting-to-supabase)
      - [Adding Supabase to our project](#adding-supabase-to-our-project)
      - [Creating our first table](#creating-our-first-table)
      - [Testing it all together](#testing-it-all-together)
    - [Installing Tailwind](#installing-tailwind)
    - [Building your first page](#building-your-first-page)
      - [Desktop Styling](#desktop-styling)
      - [Making it responsive](#making-it-responsive)
      - [Cleaning up](#cleaning-up)
      - [Logic](#logic)
  - [Resources](#resources)
    - [Tailwind](#tailwind)
    - [Supabase](#supabase)
    - [Svelte Resources](#svelte-resources)


## Workshop Outline

> ⚠ These steps we will be completing as part of the workshop, but if you are unable to attend (or want to go at your own pace), you are welcome to work through these on your own.



### Installing Tailwind

Setting up tailwind should be very straightforward,
1. Run the setup script
	```
	npx svelte-add@latest tailwindcss
	```
2. Configure the newly made `postcss.config.csj`
	3. Add this line at the top of the file:
	```typescript
	const nesting = require("tailwindcss/nesting");
	```
	4. Add `nesting()` to the array of plugins before `tailwindcss()`

To confirm that it's working, go to `src/routes/index.svelte` again, and we'll replace it with:
```html
<div class="w-64 h-64 bg-blue-200"></div>
```
Run the app, and if you see a blue square on the screen, then tailwind has been set up!


### Building your first page
We are going to build a login page, a logout page, and a [store](https://svelte.dev/docs#run-time-svelte-store) to easily access the current user throughout the app. The designs for the login page we're building can be found here: [Figma Link](https://www.figma.com/file/KWn6YlokQALKxsPRubAQdB/Hackathon-Zero-to-Hero).

As you work through this process, the code for each step is available, but if it is hidden, try to take a stab at each step before peeking, it makes all the difference!

#### Desktop Styling
First, lets start by recreating the background. Don't worry about the gradient, we'll get back to that.
<details>
<summary>🔗 Related Links</summary>

- [Tailwind Width](https://tailwindcss.com/docs/width)  
- [Tailwind Height](https://tailwindcss.com/docs/height)

</details>

<details>
<summary>👀 View Code</summary>

```html
<!-- This element will have the height and width of the screen -->
<main class="w-screen h-screen bg-orange-200">

</main>
```

</details>

Now that we have an approximation of the background, lets start building the card that goes in the middle:

```html
<main class="w-screen h-screen bg-orange-200">
	<!-- w-[768px] lets us override the available tailwind widths to provide our own -->
    <section class="w-[768px] h-96 bg-zinc-800">
	    <!-- ❔ why is this not centered? -->
    </section>
</main>
```
Before moving on, take a moment to try and center the card.

<details>
<summary>🔗 Related Links</summary>

- [Tailwind Display](https://tailwindcss.com/docs/display)  
- [Tailwind Justify Content](https://tailwindcss.com/docs/justify-content)  
- [Tailwind Align Items](https://tailwindcss.com/docs/align-items)

</details>

<details>
<summary>👀 View Code</summary>

```html
<!--                                         Note the 3 new classes here-->
<main class="w-screen h-screen bg-orange-200 flex justify-center items-center">
	<section class="w-[768px] h-96 bg-zinc-800">
	    <!-- ❕ now this is centered -->
    </section>
</main>
```

</details>


We can flex our new flexbox knowledge to add the image to our card. 

This is the URL for the picture in Figma, feel free to use whichever image you like.
`
https://images.unsplash.com/photo-1657406307838-816f84a1632f?q=80
`

As a helpful excersize, we can also add an empty, red (or whichever color you prefer) div next to the image to make sure we can use the rest of the space.

Don't worry about the height of the image yet.

<details>
<summary>🔗 Related Links</summary>

- [Tailwind Display](https://tailwindcss.com/docs/display)  
- [Tailwind Justify Content](https://tailwindcss.com/docs/justify-content)  
- [Tailwind Align Items](https://tailwindcss.com/docs/align-items)

</details>

<details>
<summary>👀 View Code</summary>

```html
	<!-- ⚠️ this does not contain outer code -->
	<section class="w-[768px] h-96 bg-zinc-800 flex">
	    <div class="w-80">
			<img alt="" src="https://images.unsplash.com/photo-1657406307838-816f84a1632f?q=80"/>
		</div>
		<div class="flex-1 bg-red-500">
    </section>
```

</details>
<br/>

Once the image is the right width, and you have your red rectangle, here's how we can make the image fit without stretching it:

```html
<div class="overflow-clip">
	<img alt="" src="https://images.unsplash.com/photo-1657406307838-816f84a1632f?q=80"/>
</div>
```

Remove the red (or whichever color) background from the rectangle, but we do need the rectangle for the next step,

Without too much worry about _how_ they look right now, let's get the `Log In` text, and button positioned.

```html
<!--
    This login page does not use @apply, nor is it responsive
-->

<main class="w-screen h-screen bg-peach flex justify-center items-center">
    <section class="flex w-full md:w-[768px] h-96 bg-zinc-800 rounded-2xl">
        <div class="overflow-clip rounded-l-2xl w-80">
            <img alt="" src="https://images.unsplash.com/photo-1657406307838-816f84a1632f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"/>
        </div>
        <div class="flex flex-col px-16 flex-1 justify-center gap-4">
            <h1 class="text-left text-peach text-3xl font-bold">Log In</h1>
            <div class="flex gap-4">
                <button class="flex-1 p-4 bg-zinc-600 text-zinc-50 rounded">Button</button>
                <button class="flex-1 p-4 bg-zinc-600 text-zinc-50 rounded">Button</button>
            </div>
        </div>
    </section>
</main>
```
#### Making it responsive
```html
<!--
    This login page does not use @apply, but it is responsive
-->

<main class="w-screen h-screen bg-peach flex justify-center items-center px-8 py-16 md:p-0">
    <section class="flex w-full h-full md:w-[768px] md:h-96 bg-zinc-800 rounded-2xl flex-col md:flex-row">
        <div class="overflow-clip md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none w-full md:w-80 flex-1">
            <img alt="" src="https://images.unsplash.com/photo-1657406307838-816f84a1632f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"/>
        </div>
        <div class="flex flex-col flex-1 px-16 md:justify-center gap-4 pt-16 md:pt-0">
            <h1 class="text-center md:text-left text-peach text-3xl font-bold">Log In</h1>
            <div class="flex md:gap-4 gap-8 flex-col md:flex-row">
                <button class="flex-1 p-4 bg-zinc-600 text-zinc-50 rounded">Button</button>
            </div>
        </div>
    </section>
</main>
```

#### Cleaning 
```html
<!--
    This login page does not use @apply, nor is it responsive
-->

<main>
	<section>
		<div class="splash">
			<img
				alt=""
				src="https://images.unsplash.com/photo-1657406307838-816f84a1632f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
			/>
		</div>
		<div class="menu">
			<h1>Log In</h1>
			<div class="buttons">
				<button>Button</button>
			</div>
		</div>
	</section>
</main>

<style lang="postcss">
	.bg-peach {
		@apply from-[#FFECD2] to-[#FCB69F] bg-gradient-to-br;
	}

	.text-peach {
		@apply from-[#FFECD2] to-[#FCB69F] bg-gradient-to-br 
    text-transparent bg-clip-text leading-relaxed;
	}
    
	main {
		@apply w-screen h-screen 
                bg-peach 
                flex justify-center items-center 
                px-8 py-16 md:p-0;
	}

	section {
		@apply flex flex-col md:flex-row
                w-full h-full md:w-[768px] md:h-96 
                bg-zinc-800 rounded-2xl;
	}
	div.splash {
		@apply overflow-clip 
                w-full md:w-80 flex-1
                md:rounded-l-2xl md:rounded-tr-none rounded-t-2xl;
	}
	div.menu {
		@apply flex flex-col flex-1 px-16 justify-center gap-4;
	}
	div.buttons {
		@apply flex flex-col md:flex-row
                md:gap-4 gap-8;

		button {
			@apply flex-1 p-4 bg-zinc-600 text-zinc-50 rounded;
		}
	}

	h1 {
		@apply text-center md:text-left text-peach text-3xl font-bold;
	}
</style>
```

#### Logic



## Resources

> Note that as you are using blocks, it is a good idea to break them into components yourself if you plan on having dynamic data in them (e.g. a navbar that changes it's items contextually). They will be much easier to use in the long run.

---
### Tailwind
#### Components
- [Flowbite Tailwind Component Library](https://flowbite.com/)
#### Blocks
- [TailBlocks](https://tailblocks.cc/)
- [WickedBlocks](https://wickedblocks.dev/)
- [Flowrift](https://flowrift.com/)
#### Helpful Links
- [Tailwind Docs](https://tailwindcss.com/docs/installation)
- [Awesome Tailwind](https://github.com/aniftyco/awesome-tailwindcss)

### Supabase

#### Helpful Links
- [Supabase Documentation](https://supabase.com/docs)
- [Awesome Supabase](https://github.com/GiovanniSM20/awesome-supabase)

### Svelte Resources
#### Helpful Links
- [Svelte Documentation](https://svelte.dev/docs)
- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Awesome Svelte](https://github.com/TheComputerM/awesome-svelte)

### Design / Stock Assets
- [Unsplash](https://unsplash.com) Photos and Videos
- [Pexels](https://pexels.com) Photos and Videos
- [Undraw](https://undraw.co/) Illustrations
- [Awesome Design Resources for Developers](https://github.com/bradtraversy/design-resources-for-developers)
- [Awesome Design](https://github.com/gztchan/awesome-design)