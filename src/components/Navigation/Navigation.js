import style from './style.css';

const Navigation = () => (
	<div class={style.container}>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M19 22H5C4.44772 22 4 21.5523 4 21V11.414C4 11.1488 4.10545 10.8945 4.293 10.707L11.293 3.70701C11.4806 3.51924 11.7351 3.41373 12.0005 3.41373C12.2659 3.41373 12.5204 3.51924 12.708 3.70701L19.708 10.707C19.8957 10.8943 20.0009 11.1488 20 11.414V21C20 21.5523 19.5523 22 19 22ZM10 15H14V20H18V11.828L12 5.82801L6 11.828V20H10V15Z" fill="#2E3A59"/>
		</svg>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.897 21.968C12.366 21.9696 11.8564 21.7586 11.482 21.382L3.64799 13.547C3.23458 13.1348 3.0226 12.5621 3.06799 11.98L3.56799 5.41401C3.63929 4.4264 4.42619 3.64163 5.41399 3.57301L11.98 3.07301C12.031 3.06201 12.083 3.06201 12.134 3.06201C12.6638 3.06337 13.1717 3.27399 13.547 3.64801L21.382 11.482C21.7572 11.8571 21.9681 12.3659 21.9681 12.8965C21.9681 13.4271 21.7572 13.9359 21.382 14.311L14.311 21.382C13.9368 21.7583 13.4277 21.9693 12.897 21.968ZM12.133 5.06201L5.56199 5.56201L5.06199 12.133L12.897 19.968L19.967 12.898L12.133 5.06201ZM8.65399 10.654C7.69983 10.6542 6.87841 9.98037 6.69207 9.04458C6.50574 8.10879 7.0064 7.17169 7.88786 6.80639C8.76933 6.44109 9.78609 6.74933 10.3163 7.54259C10.8466 8.33586 10.7426 9.39322 10.068 10.068C9.69382 10.4443 9.18467 10.6553 8.65399 10.654Z" fill="#2E3A59"/>
		</svg>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM13 18H11V16H9V14H11V12H13V14H15V16H13V18Z" fill="#2E3A59"/>
		</svg>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM13 17H11V13H7V11H11V7H13V11H17V13H13V17Z" fill="#2E3A59"/>
		</svg>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11 4.062C7.72604 4.47603 5.04227 6.85789 4.24231 10.0595C3.44234 13.2611 4.69036 16.6254 7.38479 18.5307C10.0792 20.436 13.6671 20.4913 16.419 18.67L16.319 18.741L16.413 18.676L16.472 18.635L16.536 18.59L16.552 18.579L16.561 18.572L11.433 13.442C11.1544 13.1585 10.9988 12.7765 11 12.379V4.062ZM13.829 13L18.056 17.227L18.063 17.219L18.068 17.213L18.058 17.224C19.0896 16.0335 19.744 14.5633 19.938 13H13.829ZM13 4.062V11H19.938C19.4815 7.37411 16.6259 4.51851 13 4.062Z" fill="#2E3A59"/>
		</svg>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M5 21H3V20C3.00441 16.1358 6.13583 13.0044 10 13H14C17.8642 13.0044 20.9956 16.1358 21 20V21H19V20C18.9967 17.2399 16.7601 15.0033 14 15H10C7.23995 15.0033 5.00331 17.2399 5 20V21ZM12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C16.9967 9.76005 14.7601 11.9967 12 12ZM12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4Z" fill="#2E3A59"/>
		</svg>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14Z" fill="#2E3A59"/>
		</svg>
	</div>
);

export default Navigation;
