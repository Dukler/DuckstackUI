function useHtmlReact(props) {
	if (props.shouldParse) {
		const ReactDOMServer = require("react-dom/server");
		const HtmlToReactParser = require("html-to-react").Parser;

		const htmlInput = props.value;
		const htmlToReactParser = new HtmlToReactParser();
		const reactElement = htmlToReactParser.parse(htmlInput);
		const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

		return [reactElement, reactHtml];
	} else {
		return [props.value];
	}
}

export default useHtmlReact;
