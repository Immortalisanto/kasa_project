import DropDownBar from '../DropDownBar/DropDownBar'
import { AProposData } from '../../data/AProposData'

export default function AProposDropDownBar() {
    return (
        <div>
            {AProposData.map(({ index, title, description }) => (
                <DropDownBar
                    key={`${title}-${index}`}
                    title={title}
                    description={description}
                />
            ))}
        </div>
    )
}
