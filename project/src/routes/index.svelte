<script lang="ts">
	import { supabase } from '$lib/db';
	import { CurrentUser } from '$lib/CurrentUser.store';

	const signin = () => {
		supabase.auth.signIn({ provider: 'google' });
	};

	const signout = async () => {
		await supabase.auth.signOut();
	};
</script>

<main>
	<section>
		<div class="splash">
			<img
				alt=""
				src="https://images.unsplash.com/photo-1657406307838-816f84a1632f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
			/>
		</div>
		<div class="menu">
			{#if $CurrentUser}
				<h1>Sign Out</h1>
				<button on:click={signout}>Sign Out</button>
			{:else}
				<h1>Sign In</h1>
				<button on:click={signin}>Sign In with Google</button>
			{/if}
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
                p-0;
	}

	section {
		@apply flex flex-row
                w-[768px] h-96 
                bg-zinc-800 rounded-2xl;
	}
	div.splash {
		@apply overflow-clip 
                w-80 flex-1
                rounded-l-2xl;
	}
	div.menu {
		@apply flex flex-col flex-1 px-16 md:justify-center gap-4 pt-16 md:pt-0;
	}

	button {
		@apply p-4 bg-zinc-600 text-zinc-50 rounded;
	}

	h1 {
		@apply text-center md:text-left text-peach text-3xl font-bold;
	}
</style>
