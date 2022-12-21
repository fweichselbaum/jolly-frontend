<script lang="ts">
	import toast from 'svelte-french-toast';
	import type { Game, User } from '../model/base';
	import envs from '../model/env';

	window.location.hash = '';

	export let game: Game;
	export let user: User;

	const copyGameId = () => {
		toast.promise(navigator.clipboard.writeText(game.id), {
			loading: 'Copying...',
			success: 'Copied to clipboard!',
			error: "Couldn't copy!",
		});
	};
</script>

<div class="navbar bg-base-100">
	<span class="normal-case text-xl">Game</span>
	<kbd class="kbd">{game.id}</kbd>
	<button class="btn btn-circle" on:click={copyGameId}>📋</button>
</div>

<ul>
	{#each game.users as user}
		<li>
			<div class="avatar flex items-center gap-4">
				<div class="w-16 mask mask-squircle">
					<img alt={`Avatar ${user.avatarId}`} src={`http://${envs.BACKEND_BASE_URL}/avatars/${user.avatarId}.jpg`} />
				</div>
				<p class="text-lg">{user.name}</p>
			</div>
		</li>
	{/each}
</ul>
