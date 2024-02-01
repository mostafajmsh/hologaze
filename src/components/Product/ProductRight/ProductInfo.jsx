import InfoBox from "./InfoBox";

export default function ProductInfo() {
  return (
    <div className="flex w-full z-50 mt-8 flex-col">
      <div className="flex flex-col w-full gap-4 lg:flex-row lg:gap-8 justify-start">
        <InfoBox content="High-resolution OLED or LCD screens: Provide sharp and clear visuals." />
        <InfoBox content="Refresh rate: Higher refresh rates reduce motion sickness and provide." />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 justify-start">
        <InfoBox content="Inside-out tracking: Built-in sensors (cameras or other sensors)." />
        <InfoBox content="Eye tracking: Monitors the movement of the user's eyes, allowing for more." />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 justify-start">
        <InfoBox content="High-resolution OLED or LCD screens: Provide sharp and clear visuals." />
        <InfoBox content="Refresh rate: Higher refresh rates reduce motion sickness and provide." />
      </div>
    </div>
  );
}
