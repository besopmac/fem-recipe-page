type Props = {
  title: string
  variant: 'primary' | 'secondary'
}

const Title = ({ title, variant }: Props) => {
  return (
    variant === 'primary'
      ? <h1 className="text-[40px] text-stone-900 leading-none font-900 font-[Young] mb-6">{title}</h1>
      : <h2 className="text-[28px] text-brown-800 font-800 font-[Young] mb-6">{title}</h2>
  )
}



export default Title