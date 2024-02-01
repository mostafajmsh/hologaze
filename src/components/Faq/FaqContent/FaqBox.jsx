export default function FaqBox(props) {
  return (
    <div className="bg-white/5 rounded-sm p-4">
      <div className="flex w-full justify-between items-center">
        <p className="text-white font-regFont text-base md:text-lg leading-none flex items-center">
          {props.title}
        </p>
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M15.1247 9.15687L14.0811 8.11323L9.94349 12.2434V3.23547H8.46314V12.2434L4.32556 8.11323L3.28191 9.15687L9.20331 15.0783L15.1247 9.15687Z"
            fill="white"
          />
        </svg>
      </div>
      <p className="text-white mt-0 h-0 opacity-0 text-sm">
        Virtual headsets are equipped with various sensors to track the user's
        movements. These sensors can include accelerometers, gyroscopes, and
        sometimes external cameras or base stations. They constantly monitor the
        position and orientation of the headset and sometimes the user's hand
        controllers. The headset has one or two high-resolution displays, one
        for each eye, positioned in front of the user's eyes. These displays
        show stereoscopic 3D images, creating a sense of depth and immersion.
        Between the displays and the user's eyes, help focus the images and
        adjust them for the user's field of view.
      </p>
    </div>
  );
}
