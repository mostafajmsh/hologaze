import FaqBox from "./FaqBox";

export default function FaqContent() {
  return (
    <div className="flex flex-col w-full lg:w-1/2 mx-auto mt-8 gap-6">
      <FaqBox title="What are the different types of virtual headsets available?" />
      <div className="bg-white/10 rounded-sm p-4">
        <div className="flex w-full justify-between items-center">
          <p className="text-white font-regFont text-base md:text-lg leading-none flex items-center">
            How does a virtual headset work?
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
              d="M3.28188 9.3485L4.32552 10.3921L8.4631 6.26197V15.2699H9.94345V6.26197L14.081 10.3921L15.1247 9.3485L9.20327 3.4271L3.28188 9.3485Z"
              fill="#BD00FF"
            />
          </svg>
        </div>
        <p className="text-white text-sm mt-4">
          Virtual headsets are equipped with various sensors to track the user's
          movements. These sensors can include accelerometers, gyroscopes, and
          sometimes external cameras or base stations. They constantly monitor
          the position and orientation of the headset and sometimes the user's
          hand controllers. The headset has one or two high-resolution displays,
          one for each eye, positioned in front of the user's eyes. These
          displays show stereoscopic 3D images, creating a sense of depth and
          immersion. Between the displays and the user's eyes, help focus the
          images and adjust them for the user's field of view.
        </p>
      </div>
      <FaqBox title="Do I need a powerful computer to use a virtual headset?" />
      <FaqBox title="What are the main applications of virtual headsets?" />
    </div>
  );
}
