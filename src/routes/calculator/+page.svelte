<script lang="ts">
	const name = 'Sokol Paja';
	const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
	const operations: Operation[] = ['/', 'x', '-', '+', '='];

	type Operation = '/' | 'x' | '-' | '+' | '=';

	let selectedOperation = '';
	let display = '';
	let isDisplayingResult = false;

	let firstNumber = '';
	let secondNumber = '';

	const handleClear = () => {
		display = '';
		firstNumber = '';
		secondNumber = '';
		selectedOperation = '';
		isDisplayingResult = false;
	};

	const handleClickOperation = (operation: Operation) => {
		console.log('🚀 ~ handleClickOperation ~ operation:', operation, firstNumber);
		if (!firstNumber) return;

		if (operation === '=') {
			if (!secondNumber) return;
			const firstNum = parseInt(firstNumber);
			const secondNum = parseInt(secondNumber);

			let results = '';

			switch (selectedOperation) {
				case '/':
					results = (firstNum / secondNum).toFixed(2);
					break;
				case 'x':
					results = (firstNum * secondNum).toFixed(2);
					break;
				case '-':
					results = (firstNum - secondNum).toFixed(2);
					break;
				case '+':
					results = (firstNum + secondNum).toFixed(2);
				default:
					break;
			}

			display = results;
			isDisplayingResult = true;
			console.log('result:', firstNum, secondNum, { results });
		}

		selectedOperation = operation;
	};

	const handleNumberClick = (number: string) => {
		// do not add 0 when it is empty
		if (display == '' && number == '0') return;
		if (number === '.' && display.includes('.')) return;
		if (isDisplayingResult) {
			//  TODO handle chaining operations
		}
		if (!selectedOperation) {
			// do not add more than 1 decimal comma
			if (display == '' && number == '.') {
				firstNumber = '0.';
				return (display = firstNumber);
			} else {
				firstNumber = `${firstNumber}${number}`;
				return (display = firstNumber);
			}
		} else {
			if (display == '' && number == '.') {
				secondNumber = '0.';
				return (display = secondNumber);
			} else {
				secondNumber = `${secondNumber}${number}`;
				return (display = secondNumber);
			}
		}
	};
</script>

<main>
	<h1>Svelte Calculator App</h1>
	<div class="calculator">
		<div class="results">
			{display}
		</div>
		<div class="digits">
			<div class="numbers">
				<button class="btn btn-xlg" on:click={handleClear}>C</button>
				{#each numbers as number (number)}
					<button
						class={`btn ${number === '0' ? 'btn-lg' : null}`}
						on:click={() => handleNumberClick(number)}>{number}</button
					>
				{/each}
			</div>

			<div class="operations">
				<!-- this (operation) is the unique id, like in react .map the unique key -->
				{#each operations as operation (operation)}
					<button
						class={`btn ${selectedOperation === operation ? 'btn-silver' : 'btn-orange'}`}
						on:click={() => handleClickOperation(operation)}>{operation}</button
					>
				{/each}
			</div>
		</div>
	</div>
</main>

<style scoped>
	main {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.calculator {
		background-color: rgb(28, 28, 28);
		width: 270px;
		padding: 15px;
		border-radius: 7px;
	}
	.digits {
		display: flex;
	}
	.operations {
		display: flex;
		flex-direction: column;
	}
	.numbers {
		display: flex;
		flex-wrap: wrap;
		width: 200px;
	}
	.btn {
		width: 50px;
		height: 50px;
		border-radius: 100px;
		background-color: rgb(114, 113, 113);
		font-size: 20px;
		font-weight: bold;
		color: white;
		margin: 5px;
		border: none;

		&:hover {
			cursor: pointer;
		}
		&:active {
			transform: translateY(2px);
		}
	}
	.btn-lg {
		width: 110px;
	}
	.btn-orange {
		background-color: orange;
	}
	.btn-silver {
		background-color: silver;
	}
	.btn-xlg {
		width: 170px;
	}
	.results {
		height: 60px;
		color: white;
		font-size: 50px;
		display: flex;
		flex-direction: row-reverse;
		margin-right: 10px;
	}
</style>
