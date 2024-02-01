export default function InfoBox(props) {
  return (
    <p className="flex items-start relative mt-4 md:mt-8 w-full justify-start">
      <svg
        className="w-5 h-5 absolute"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13 14"
        fill="none"
      >
        <path
          d="M6.47664 0.520691L8.70524 4.59552L12.7801 6.82412L8.70524 9.05271L6.47664 13.1275L4.24804 9.05271L0.173218 6.82412L4.24804 4.59552L6.47664 0.520691Z"
          fill="#3DDEED"
          fillOpacity="0.9"
        />
      </svg>
      <span className="text-white text-xs xs:text-sm md:text-base leading-none text-left ml-8">
        {props.content}
      </span>
    </p>
  );
}
