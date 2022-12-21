<script lang="ts">
	import envs from "../model/env";

	const avatarIds: number[] = [...Array(9).keys()];
	export let avatarId: number = 0;

	const previusId = (current: number): number => (current - 1 < 0 ? avatarIds.length - 1 : current - 1);
	const nextId = (current: number): number => (current + 1) % avatarIds.length;

	$: window.location.hash = `avatar${avatarId}`;
</script>

<div class="flex items-center bg-base-100 rounded-lg select-none">
	<button on:click={() => (avatarId = previusId(avatarId))} class="btn btn-circle mx-2"> ❮ </button>
	<div class="carousel" style="width:150px">
		{#each avatarIds as id (id)}
			<div id={`avatar${id}`} class="carousel-item relative w-full m-2 mask mask-squircle">
				<img loading="lazy" alt={`Avatar ${id}`} src={`http://${envs.BACKEND_BASE_URL}/avatars/${id}.jpg`} class="w-full pointer-events-none" />
			</div>
		{/each}
	</div>
	<button on:click={() => (avatarId = nextId(avatarId))} class="btn btn-circle mx-2"> ❯ </button>
</div>
