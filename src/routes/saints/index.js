import { h } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Markdown from 'markdown-to-jsx';
import style from './style';

const saints = (props) => {
	const [data, isLoading] = usePrerenderData(props);

	console.log("\n\n");
	console.log("isLoading ->", isLoading);
	console.log("data ->", data);

	return (
		<article class={style.saintcontainer}>
			{getSaintsListing(data, isLoading)}
		</article>
	);
};

function getSaintsListing(data, isLoading) {
	if (isLoading) {
		return <p>Loading...</p>;
	}

	console.log("data received by getSaintsListing ->", data);

	return(
		<div>
			<p>Loaded</p>
		</div>
	)

	// if (data && data.data) {
	// 	const { details, content } = data.data;
	// 	return (
	// 		<div>
	// 			<h1 class={style.sainttitle}>{details.title}</h1>
	// 			{ details.subtitle && <caption class={style.saintsubtitle}>{details.subtitle}</caption> }
	// 			{ details.cover && <div class={style.saintcover} style={`background-image:url(${details.cover})`} /> }
	// 			<div class={style.saintbody}>
	// 				<Markdown>{ content }</Markdown>
	// 			</div>
	// 		</div>
	// 	);
	// }
}

export default saints;
