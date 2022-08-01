<!-- <main class="w-screen h-screen bg-orange-200 flex justify-center items-center">
	<section class="w-[768px] h-96 bg-zinc-800 flex">
        <div class="overflow-clip w-80">
            <img alt="" src="https://images.unsplash.com/photo-1657406307838-816f84a1632f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"/>
        </div>
		<div class="flex-1 flex flex-col px-16 justify-center gap-4">
            <h1 class="text-center md:text-left text-orange-200 text-3xl font-bold">Log In</h1>
        </div>
    </section>
</main> -->

<main class="w-screen h-screen bg-peach flex justify-center items-center">
	<section class="w-[768px] h-96 bg-zinc-800 rounded-2xl drop-shadow-2xl flex">
		<div class="w-80 overflow-clip rounded-l-2xl">
			<img alt="" src="https://images.unsplash.com/photo-1657406307838-816f84a1632f?q=80" />
		</div>
		<div class="flex-1 flex flex-col justify-center gap-4 px-16">
			<h1 class="text-center md:text-left text-peach text-3xl font-bold">Log In</h1>
			<button class="p-4 bg-zinc-600 text-zinc-50 rounded">Sign in with Google</button>
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
</style>