import styled from "styled-components";


export const AddButton = ({title} : any) => {
	return (
		<StyledWrapperProduct>
			<button className="button-p" type="button">
				<span className="button__text-p">{title}</span>
				<span className="button__icon-p">
					<svg className="svg-p" fill="none" height={24} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
						<line x1={12} x2={12} y1={5} y2={19} />
						<line x1={5} x2={19} y1={12} y2={12} />
					</svg>
				</span>
			</button>
		</StyledWrapperProduct>
	);
};
const StyledWrapperProduct = styled.div`
	.button-p {
		--main-focus: #2d8cf0;
		--font-color: #323232;
		--bg-color-sub: #dedede;
		--bg-color: #eee;
		--main-color: #323232;
		position: relative;
		width: 200px;
		height: 40px;
		cursor: pointer;
		display: flex;
		align-items: center;
		border: 2px solid var(--main-color);
		box-shadow: 4px 4px var(--main-color);
		background-color: var(--bg-color);
		border-radius: 10px;
		overflow: hidden;
	}

	.button-p,
	.button__icon-p,
	.button__text-p {
		transition: all 0.3s;
	}

	.button-p .button__text-p {
		transform: translateX(22px);
		color: var(--font-color);
		font-weight: 600;
	}

	.button-p .button__icon-p {
		position: absolute;
		transform: translateX(157px);
		height: 100%;
		width: 39px;
		background-color: var(--bg-color-sub);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.button-p .svg-p {
		width: 20px;
		fill: var(--main-color);
	}

	.button-p:hover {
		background: var(--bg-color);
	}

	.button-p:hover .button__text-p {
		color: transparent;
	}

	.button-p:hover .button__icon-p {
		width: 197px;
		transform: translateX(0);
	}

	.button-p:active {
		transform: translate(3px, 3px);
		box-shadow: 0px 0px var(--main-color);
	}
`;