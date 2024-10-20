type Props = {
  children: React.ReactNode
}

const Card = ({ children }: Props) => {
  return (
    <div className="bg-white pb-10 sm:p-10 rounded-none sm:rounded-3xl">
      {children}
    </div>
  )
}

export default Card