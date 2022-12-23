import { Title } from "solid-start";
// import Counter from "~/components/Counter";
import { createSignal } from "solid-js";

export default function Home() {
	const [ready, setReady] = createSignal(false)
	const [count, setCount] = createSignal(0)
	setInterval( ()=> ready() && setCount( count()+1 ), 1000 )
  return (
    <main class="h-[75vh] grid place-items-center">
      <Title>Levels Plumbing State</Title>
			<header>
				<h1>Levels Plumbing State</h1>
			</header>
			<div>
				<button onClick={()=> setReady( (x)=>!x )}>
					ready is {ready()?'True':'False'}
				</button>
				{/* <Counter />*/}
			</div>
      <p>
				count is {count()}
			</p>
    </main>
  );
}
