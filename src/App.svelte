<script lang="ts">
	import { Toaster } from 'svelte-french-toast';
	import GamePage from './lib/GamePage.svelte';
	import JoinPage from './lib/JoinPage.svelte';
	import LoginPage from './lib/LoginPage.svelte';
	import ThemeSwitcher from './lib/ThemeSwitcher.svelte';
	import type { Game, User } from './model/base';

	let user: User = null;
	let game: Game = null;

</script>

<div class="w-full min-h-screen relative">
	{#if game}
		{#if user}
			<GamePage {game} {user} />
		{:else}
			<LoginPage bind:user bind:game />
		{/if}
	{:else}
		<JoinPage bind:game />
	{/if}
	<ThemeSwitcher />
	<Toaster />
</div>
