type Props = {
  title: string
  variant: 'primary' | 'secondary' | 'tertiary'
}

const Title = ({ title, variant }: Props) => {
  const classesByVariant = (variant: 'primary' | 'secondary' | 'tertiary') => {
    if (variant === 'secondary') {
      return <h2 className="text-[28px] text-brown-800 font-800 font-[Young] mb-6">{title}</h2>
    }
    if (variant === 'tertiary') {
      return <h2 className="text-[20px] text-rose-800 font-semibold font-[Outfit] mb-4">{title}</h2>
    }

    return <h1 className="text-[40px] text-stone-900 leading-none font-900 font-[Young] mb-6">{title}</h1>
  }


  return classesByVariant(variant)
}



export default Title