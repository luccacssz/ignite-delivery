const CartIcon = ({ fill, background }: CartProps) => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="38" height="38" rx="6" fill={background} />
    <path
      d="M16.25 26.5625C16.25 26.8344 16.1694 27.1003 16.0183 27.3264C15.8672 27.5525 15.6524 27.7288 15.4012 27.8328C15.1499 27.9369 14.8735 27.9641 14.6068 27.9111C14.34 27.858 14.095 27.7271 13.9027 27.5348C13.7104 27.3425 13.5795 27.0975 13.5264 26.8307C13.4734 26.564 13.5006 26.2876 13.6047 26.0363C13.7087 25.7851 13.885 25.5703 14.1111 25.4192C14.3372 25.2681 14.6031 25.1875 14.875 25.1875C15.2397 25.1875 15.5894 25.3324 15.8473 25.5902C16.1051 25.8481 16.25 26.1978 16.25 26.5625ZM23.8125 25.1875C23.5406 25.1875 23.2747 25.2681 23.0486 25.4192C22.8225 25.5703 22.6462 25.7851 22.5422 26.0363C22.4381 26.2876 22.4109 26.564 22.4639 26.8307C22.517 27.0975 22.6479 27.3425 22.8402 27.5348C23.0325 27.7271 23.2775 27.858 23.5443 27.9111C23.811 27.9641 24.0874 27.9369 24.3387 27.8328C24.5899 27.7288 24.8047 27.5525 24.9558 27.3264C25.1069 27.1003 25.1875 26.8344 25.1875 26.5625C25.1875 26.1978 25.0426 25.8481 24.7848 25.5902C24.5269 25.3324 24.1772 25.1875 23.8125 25.1875ZM27.6023 13.775C27.5378 13.6901 27.4547 13.6212 27.3594 13.5735C27.264 13.5258 27.159 13.5007 27.0523 13.5H12.1508L11.4547 11.0594C11.3712 10.7726 11.1972 10.5206 10.9587 10.3409C10.7201 10.1613 10.4299 10.0636 10.1312 10.0625H8.6875C8.50516 10.0625 8.3303 10.1349 8.20136 10.2639C8.07243 10.3928 8 10.5677 8 10.75C8 10.9323 8.07243 11.1072 8.20136 11.2361C8.3303 11.3651 8.50516 11.4375 8.6875 11.4375H10.1312L10.9734 14.368V14.3852L13.2422 22.3172C13.3668 22.7476 13.6276 23.1261 13.9855 23.3957C14.3435 23.6653 14.7792 23.8116 15.2273 23.8125H23.4602C23.9083 23.8116 24.344 23.6653 24.702 23.3957C25.0599 23.1261 25.3207 22.7476 25.4453 22.3172L27.7141 14.3766C27.7431 14.2745 27.7482 14.167 27.7288 14.0627C27.7094 13.9583 27.6661 13.8598 27.6023 13.775Z"
      fill={fill}
    />
  </svg>
)

export default CartIcon
