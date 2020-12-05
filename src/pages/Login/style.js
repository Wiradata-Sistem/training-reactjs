import styled from 'styled-components';

const ImgBg = styled.img`
	width:100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	object-fit: cover;
`;

const DivLogoContainer = styled.div`
	display: flex; 
	align-items: center;
	height: 30%;
	width: 35%;
	background-color: rgba(255,255,255,.88);
	border-radius: 50%;
	position: absolute;
	top: 32%;
	left: 35%;

	img {
		width: 100%;
		height: auto;
		margin: 0 auto;
	}
`;

const DivForm = styled.div`
	padding: 0 3%;
	width: 100%;
	height: 100vh;
	max-width: 1440px;
	display: flex;

	.login-form {
		width: 100%;
	}

	form {
		height: 100%;
		width: 100%;
		padding: 10%;
		display: flex;
		flex-direction: column;
		justify-content: center;

		h3 {
			font-size: 2.5em;
		}

		.input-form {
			label {
				margin-bottom: 5%;
				display: block;
			}

			.ant-col {
				width: 100%;
			}

			.ant-form-item {
				display: flex;
				justify-content: initial;
				padding: 1% 0;
			
				.ant-input {
					font-size: 100%;
					width: 90%;
					height: 100%;
					padding: 2% 4%;
				}

				.base-input {
					width: 100%;
				}
			}
		}

		.footer-form {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.ant-form-item {
				margin-bottom: 0;
			}

			button {
				font-size: 125%;
				height: 100%;
				width: 150%;
			}
		}
	}
`;

export {DivLogoContainer, ImgBg, DivForm};