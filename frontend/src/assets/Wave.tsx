interface WaveProps {
  style?: {}
}

export const Wave: React.FC<WaveProps> = ({ style }) => {
  return (
    <svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="currentColor"
        fillOpacity="1"
        d="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,144C672,117,768,75,864,96C960,117,1056,203,1152,218.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  )
}
