import { CardProps } from "./types";
// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// Components
import ImageContent from "../image";
import PriceList from "../price";
import FloatDiv from "../content/FloatDiv";

export default function Card (props: CardProps) {
  const setColor = (price: number) => {
    if (price < 50) {
      return 'bg-cyan-300'
    } else if (price > 50 && price < 100) {
      return 'bg-lime-300'
    } else {
      return 'bg-violet-300'
    }
  }

  return (
    <div className="max-w-sm bg-white rounded-lg shadow">
      <div className="relative">
        <FloatDiv>
          <button
            type="button"
            className="font-medium bg-white rounded-lg text-sm px-4 py-2 text-center border"
            onClick={() => props.onAddItem(props.id)}
          >
            <FontAwesomeIcon icon={faPlus} color="black" />
          </button>
        </FloatDiv>
        <ImageContent
          src={props.image}
        />
        <PriceList className={`${setColor(props.price)} shadow`}>
          { props.currency } { props.price }
        </PriceList>
      </div>
      <div className="p-5">
        <h5 className="mb-2 font-bold tracking-tight text-gray-900">{props.title}</h5>
        <p className="mb-3 text-xs text-gray-700">{props.description}</p>
      </div>
    </div>
  )
}