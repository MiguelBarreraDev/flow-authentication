interface EditIconProps {
  style?: {}
}

export const EditIcon: React.FC<EditIconProps> = ({ style }) => {
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
        d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575q.837 0 1.412.575l1.4 1.4q.575.575.6 1.388q.025.812-.55 1.387ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6Z"
      />
    </svg>
  )
}