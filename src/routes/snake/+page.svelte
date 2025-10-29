<script lang="ts">
	let rows = $state(10);
	let cols = $state(10);
	const grid = $derived(
		Array.from({ length: rows }, (_, y) => Array.from({ length: cols }, (_, x) => ({ x, y })))
	);

	type Direction = 'left' | 'right' | 'up' | 'down';

	type Player = {
		row: number;
		col: number;
		direction: Direction;
	};

	let player = $state<Player>({
		row: Math.floor(rows / 2),
		col: Math.floor(cols / 2),
		direction: 'left'
	});

	console.log(grid[0][0]); // { x: 0, y: 0 }
	console.log(grid[9][9]); // { x: 9, y: 9 }

	// function limit(i: num) {
	//     if(i) {

	//     }
	// }

	// update every second
	$effect(() => {
		const interval = setInterval(() => {
			// move player based on direction
			// if limit is reached start at opposite side

			if (player.direction == 'left') {
				player.row = (player.row - 1) % rows;
			} else if (player.direction == 'right') {
				player.row += 1;
			} else if (player.direction == 'up') {
				player.col -= 1;
			} else {
				player.col += 1;
			}

			// player.row = (player.row + (Math.random() > 0.5 ? 1 : -1) + rows) % rows;
			// player.col = (player.col + (Math.random() > 0.5 ? 1 : -1) + cols) % cols;

			console.log(player.row, player.col);
		}, 1000);

		return () => clearInterval(interval); // cleanup
	});
</script>

<div class="w-[500px] aspect-1/1 border mx-auto">
	<div class="flex flex-col flex-grow h-full">
		{#each grid as row}
			<div class="flex flex-grow">
				{#each row as cell}
					{#if player.row == cell.x && player.col == cell.y}
						<div class="w-full border-2 bg-red-500"></div>
					{:else}
						<div class="w-full bg-white border-2"></div>
					{/if}
				{/each}
			</div>
		{/each}
	</div>
</div>
