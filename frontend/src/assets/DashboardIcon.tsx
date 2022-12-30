import { SVGIconProps } from '~/types'

export const DashboardIcon: React.FC<SVGIconProps> = ({ style }) => {
  return (
    <svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M13 9V3h8v6ZM3 13V3h8v10Zm10 8V11h8v10ZM3 21v-6h8v6Z"
      />
    </svg>
  )
}
