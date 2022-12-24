interface ExpandIconProps {
  style: {}
}

export const ExpandIcon: React.FC<ExpandIconProps> = ({ style }) => {
  return (
    <svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M5 19v-6h2v4h4v2Zm12-8V7h-4V5h6v6Z" />
    </svg>
  )
}
