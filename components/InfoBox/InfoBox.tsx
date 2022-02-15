import React from 'react';
import styled from 'styled-components';

type InfoBoxProps = {
	details: Record<string, string>;
	style?: React.CSSProperties;
	className?: string;
};

const InfoBox: React.FC<InfoBoxProps> = ({ details, style, className }) => (
	<InfoBoxContainer style={style} className={className}>
		{Object.entries(details).map(([key, value]) => (
			<div key={key}>
				<p className="key">{key}:</p>
				<p className="value">{value}</p>
			</div>
		))}
	</InfoBoxContainer>
);

const InfoBoxContainer = styled.div`
	border: ${(props) => props.theme.colors.selectedTheme.border};
	border-radius: 16px;
	padding: 14px;
	box-sizing: border-box;
	width: 100%;

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		p {
			margin: 0;
		}

		.key {
			color: ${(props) => props.theme.colors.selectedTheme.input.placeholder};
			font-size: 12px;
			text-transform: capitalize;
		}

		.value {
			color: ${(props) => props.theme.colors.common.primaryWhite};
			font-family: ${(props) => props.theme.fonts.mono};
			font-size: 12px;
		}

		&:not(:last-of-type) {
			margin-bottom: 8px;
		}
	}
`;

export default InfoBox;
