<script lang="ts">
	import toast from 'svelte-french-toast';
	import type { Game } from '../model/base';
	import envs from '../model/env';

	window.location.hash = '';

	const acceptJsonHeader = { Accept: 'application/json' };

	export let game: Game;
	let gameId: string;

	const findGame = () => {
		let uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
		if (!uuidRegex.test(gameId)) {
			toast.error('Not a valid Game-ID');
			return;
		}
		toast.promise(
			fetch(`http://${envs.BACKEND_BASE_URL}/games/${gameId}`, { headers: acceptJsonHeader })
				.then(res => res.json())
				.then(foundGame => (game = foundGame)),
			{
				loading: 'Joining...',
				success: 'Joined game!',
				error: "Couldn't find game!",
			}
		);
	};

	const createGame = () => {
		toast.promise(
			fetch(`http://${envs.BACKEND_BASE_URL}/games/new`, {
				method: 'POST',
				headers: acceptJsonHeader,
			})
				.then(res => res.json())
				.then(newGame => (game = newGame)),
			{
				loading: 'Creating...',
				success: 'Created new game!',
				error: "Couldn't create game!",
			}
		);
	};
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<img src="https://www.pngall.com/wp-content/uploads/4/Fanned-Playing-Card-PNG-HD-Image.png" alt="Hero Logo" class="max-w-sm" />
		<div class="flex flex-col gap-2">
			<h1 class="text-5xl font-bold my-4">Jolly!</h1>
			<p>Enter a Game-ID or create a new game:</p>
			<input type="text" bind:value={gameId} placeholder="Game-ID" class="input w-full max-w-xs" />
			<button on:click={findGame} class="btn btn-primary">Join!</button>
			<button on:click={createGame} class="btn">Create a new Game!</button>
		</div>
	</div>
</div>
