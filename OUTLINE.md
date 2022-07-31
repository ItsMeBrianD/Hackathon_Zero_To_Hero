# Setting up Libraries

## Connecting to Supabase

### Adding Supabase to our project
Adding some libraries to svelte is very easy, supabase and tailwind included.

Run this snippet to add supabase to your code:
```bash
npx apply supabase-community/svelte-supabase // Add supabase boilerplate
npm i 										 // Install Dependencies
```

Open your project in Supabase, and fill in the appropriate fields in the `.env` file. 

**Remove the `SUPABASE_PRIVATE_KEY` and `SUPABASE_JWT_SECRET` lines, we won't need them for this project, and they can pose a security risk.**

You should end up with something like this:
```
# .env
VITE_SUPABASE_URL=[[ Project Configuration -> URL ]]
VITE_SUPABASE_ANON_KEY=[[ Project Api Keys -> anon public ]]
```

Next, lets make a couple tweaks to the generated `src/lib/db.js`, these are optional, and mostly stylistic, but it will keep things consistent as we continue on.
1. Rename `db.js` to `db.ts`
2. Delete line 8:
	```typescript
	export default supabase
	```
3. Change line 3:
	```typescript
	// Add export
	export const supabase = createClient(
	```

### Creating our first table
Under the hood, Supabase's database is just [Postgres](https://www.postgresql.org/), an excellent open source database.
Lets get our first table set up, using one of the presets they provide.
- First, open the project, and find the `SQL Editor` (an icon on the left sidebar)
- Under `Getting Started / Welcome`, there is a section `Quick Start`, find the `User Management Starter`
- Open the `User Management Starter`, and click `Run`.
	- You can confirm that it worked correctly by opening the `Table Editor` (another icon on the sidebar), and making sure that a `profiles` table exists.


### Testing it all together

Once you've completed these steps, open `src/routes/index.svelte` and replace it with the following block:
```html
<script>
	// Import our new supabase client
    import {supabase} from "$lib/db";
</script>
<!-- Attempt to select all user profiles -->
{#await supabase.from("profiles").select("*")}
<!-- Show a loading indicator -->
    Loading...
{:then r}
<!-- Display the HTTP status that is returned -->
    {r.status}
{/await}
```

Now we can run our project:
```bash
npm run dev
```

It should show something similar to this, which includes the URL for our local app.
```
  VITE v3.0.0  ready in 220 ms

  ➜  Local:   http://127.0.0.1:5173/ <-- This is the link to our local app
  ➜  Network: use --host to expose
```

If you see `200`, then you have configured Supabase correctly; otherwise, double check that you have followed the steps correctly.


## Installing Tailwind

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


# Building Login Page
`
## Building the Bones
There are two approaches that are often taken when designing an app; "Mobile First" and "Desktop First",
which at a very distilled level, is if you design / build the mobile version of the app before the desktop one, or vise versa.

We will be using a desktop first approach, but we will go over some basics of making our page responsive.

For each step, the code is available, but try to use Figma and the provided screenshot of the result to take a stab at it before peeking, it makes all the difference. Anything that is not tailwindcss, or part of the default configuration for tailwind will be noted outside the code block.

---

### Creating the background

#### Goals
 - Create our container element

#### Hints
 - Don't worry about the gradient in the background, we'll get to that towards the end; I'll be using `orange-200` as a standin color.

<details>
<summary>🔗 Related Links</summary>

- [Tailwind Width](https://tailwindcss.com/docs/width)  
- [Tailwind Height](https://tailwindcss.com/docs/height)

</details>

<details>
<summary>👀 View Code</summary>

```html
<!-- src/routes/index.svelte -->

<!-- This element will have the height and width of the screen -->
<main class="w-screen h-screen bg-orange-200">

</main>
```

</details>

#### End Result
<img src="./img/background%20only.png" width="600px"/>

---

### Creating the Content Card

#### Goals
 - Create the content card
   - Style it, but without any content

#### Hints
 - `slate-800` is the background color
 - The card uses a non-standard width, `w-[768px]` is the class to match figma.
 - We will center the card in the next step

<details>
<summary>🔗 Related Links</summary>

- [Tailwind Background Color](https://tailwindcss.com/docs/background-color)
- [Tailwind Border Radius (Rounding)](https://tailwindcss.com/docs/border-radius)
- [Tailwind Drop Shadow](https://tailwindcss.com/docs/drop-shadow)

</details>

<details>
<summary>👀 View Code</summary>

```html
<!-- src/routes/index.svelte -->

<main class="w-screen h-screen bg-orange-200">
	<!-- w-[768px] lets us override the available tailwind widths to provide our own -->
    <section class="w-[768px] h-96 bg-zinc-800 rounded-2xl drop-shadow-2xl">
	    <!-- ❔ why is this not centered? -->
    </section>
</main>
```

</details>

#### End Result
<img src="./img/un-centered%20card.png" width="600px"/>


### Centering the Content Card

#### Goals
 - Center the Content Card on the page
 - Get comfortable with flebox in Tailwind

#### Hints
 - We won't be changing the content card at all in this step.

<details>
<summary>🔗 Related Links</summary>

- [Tailwind Display](https://tailwindcss.com/docs/display)  
- [Tailwind Justify Content](https://tailwindcss.com/docs/justify-content)  
- [Tailwind Align Items](https://tailwindcss.com/docs/align-items)

</details>

<details>
<summary>👀 View Code</summary>

```html
<!-- src/routes/index.svelte -->

<!--                                         Note the 3 new classes here-->
<main class="w-screen h-screen bg-orange-200 flex justify-center items-center">
	<section class="w-[768px] h-96 bg-zinc-800 rounded-2xl drop-shadow-2xl">
	    <!-- ❕ now this is centered -->
    </section>
</main>
```

</details>

#### End Result
<img src="./img/centered%20card.png" width="600px"/>

---

### Adding our Stock Photo

#### Goals
 - Place the stock photo into our card
   - We also need to make sure that we aren't stretching the photo, while still constraining it to the space we want it in.

#### Hints
 - The image is `w-80` wide
 - We need to wrap our `img` element in another element for this effect to work.

<details>
<summary>🔗 Related Links</summary>

- [Tailwind Width](https://tailwindcss.com/docs/width)
- [Tailwind Overflow](https://tailwindcss.com/docs/overflow)
- [Tailwind Border Radius (Rounding)](https://tailwindcss.com/docs/border-radius)

</details>

<details>
<summary>👀 View Code</summary>

```html
<main class="w-screen h-screen bg-orange-200 flex justify-center items-center">
	<section class="w-[768px] h-96 bg-zinc-800 rounded-2xl drop-shadow-2xl flex">
	    <div class="w-80 overflow-clip rounded-l-2xl">
			<img alt="" src="https://images.unsplash.com/photo-1657406307838-816f84a1632f?q=80"/>
		</div>
    </section>
</main>
```

</details>

#### End Result
<img src="./img/image%20added.png" width="600px"/>

---


### Adding our Login Button and Text

#### Goals
 - Add header text
 - Add login button

#### Hints
 - Think about what we've used that lets us lay this out as a column
 - This is the largest step!

<details>
<summary>🔗 Related Links</summary>

- [Tailwind Width](https://tailwindcss.com/docs/width)  
- [Tailwind Height](https://tailwindcss.com/docs/height)

</details>

<details>
<summary>👀 View Code</summary>

```html
<main class="w-screen h-screen bg-orange-200 flex justify-center items-center">
	<section class="w-[768px] h-96 bg-zinc-800 rounded-2xl drop-shadow-2xl flex">
		<div class="w-80 overflow-clip rounded-l-2xl">
			<img alt="" src="https://images.unsplash.com/photo-1657406307838-816f84a1632f?q=80" />
		</div>
		<div class="flex-1 flex flex-col px-16 justify-center gap-4">
			<h1 class="text-center md:text-left text-orange-200 text-3xl font-bold">Log In</h1>
			<button class="p-4 bg-zinc-600 text-zinc-50 rounded">Sign in with Google</button>
		</div>
	</section>
</main>

```

</details>

#### End Result
<img src="./img/background%20only.png" width="600px"/>

---

# Building Logout Page

# Building Auth State Store