type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <section className="w-full sm:max-w-[616px] md:max-w-[736px] mx-auto sm:my-32">
      {children}
    </section>
  )
}

export default Container