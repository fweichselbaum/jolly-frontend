<script lang="ts">
	import toast from 'svelte-french-toast';
	import type { Game, User } from '../model/base';
	import envs from '../model/env';
	import AvatarCarousel from './AvatarCarousel.svelte';

	export let user: User;
	export let game: Game;

	let inputUser: User = { name: '', avatarId: 0 };

	const createUser = () => {
		toast.promise(
			fetch(`http://${envs.BACKEND_BASE_URL}/games/${game.id}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				},
				body: JSON.stringify(inputUser),
			})
				.then(res => res.json() as any as Game)
				.then(updatedGame => {
					user = updatedGame.users[updatedGame.users.length - 1];
					game = updatedGame;
				}),
			{
				loading: 'Selecting...',
				success: `Selected name '${inputUser.name}'!`,
				error: "Couldn't select name!",
			}
		);
	};
</script>

<div class="min-h-screen relative">
	<button on:click={() => (game = null)} class="absolute left-4 top-4 btn btn-circle z-10"> ❮ </button>

	<div class="hero absolute h-full bg-base-200">
		<div class="hero-content flex-col lg:flex-row">
			<img src="https://www.pngall.com/wp-content/uploads/4/Fanned-Playing-Card-PNG-HD-Image.png" alt="Hero Logo" class="max-w-sm" />
			<div class="flex flex-col gap-2">
				<h1 class="text-5xl font-bold my-4">Jolly!</h1>
				<p>Select your name and avatar to start:</p>
				<input type="text" bind:value={inputUser.name} placeholder="Username" class="input w-full max-w-xs" />
				<AvatarCarousel bind:avatarId={inputUser.avatarId} />
				<button on:click={createUser} class="btn btn-primary">Select!</button>
			</div>
		</div>
	</div>
</div>
