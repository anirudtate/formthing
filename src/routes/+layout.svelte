<script lang="ts">
	import '../app.css';
</script>

<div class="nav-bar-wrapper">
	<nav class="container">
		<ul>
			<li>
				<strong style="font-size: 1.5rem;"
					>form<span style="color: var(--pico-primary);">Thing</span></strong
				>
			</li>
		</ul>
		<ul>
			<li><a href="asdf">about</a></li>
		</ul>
	</nav>
</div>

<div class="container">
	<slot />
</div>

<style>
	.nav-bar-wrapper {
		position: sticky;
		top: 0;
		left: 0;
		border-bottom: 1px solid var(--pico-muted-border-color);
		background-color: var(--pico-background-color);
	}
</style>
