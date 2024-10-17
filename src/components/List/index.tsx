import Title from '../Title'

type Props = {
  title: string
  total: string
  cooking: string
  preparation: string
}

const List = ({ title, total, cooking, preparation }: Props) => {
  return (
    <div className="bg-rose-50 p-6 my-6 rounded-xl">
      <Title title={title} variant="tertiary" />
      <ul className='list-disc list-inside marker:text-rose-800 leading-loose'>
        <li><b>Total:</b> {total}</li>
        <li><b>Preparation:</b> {preparation}</li>
        <li><b>Cooking:</b> {cooking}</li>
      </ul>
    </div>
  )
}

export default List