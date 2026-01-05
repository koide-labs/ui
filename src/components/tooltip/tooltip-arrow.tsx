export function TooltipArrow(props: { className?: string }) {
  return (
    <svg
      width="10"
      height="5"
      viewBox="0 0 30 10"
      preserveAspectRatio="none"
      className={props.className}
    >
      <polygon points="0,0 30,0 15,10"></polygon>
    </svg>
  );
}
